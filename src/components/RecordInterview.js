
import React, { useState, useEffect, useRef } from 'react';
import {getuserEmail, getUser,Cartlength } from '../Services/AuthService';
 // Import your CSS file for styling


const user=getuserEmail();
const RecordInterview = () => {
//     const [recording, setRecording] = useState(false);
//   const [audioChunks, setAudioChunks] = useState([]);

//   let mediaRecorder;

//   const startRecording = () => {
//     const constraints = { audio: true };
//     navigator.mediaDevices.getUserMedia(constraints)
//       .then(stream => {
//         mediaRecorder = new MediaRecorder(stream);
//         mediaRecorder.addEventListener("dataavailable", event => {
//           setAudioChunks([...audioChunks, event.data]);
//         });
//         mediaRecorder.start();
//         setRecording(true);
//       })
//       .catch(error => console.error(error));
//   };

//   const stopRecording = () => {
//     mediaRecorder.stop();
//     setRecording(false);
//   };

//   const download = () => {
//     // Create a Blob object from the recorded audio chunks
//     const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
    
//     // Create a URL for the Blob object
//     const audioUrl = URL.createObjectURL(audioBlob);
    
//     // Create a download link with the audioUrl and download attributes
//     const downloadLink = document.createElement('a');
//     downloadLink.href = audioUrl;
//     downloadLink.download = 'audio.webm';
    
//     // Add the download link to the document body and click it
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
    
//     // Clean up the download link and audioUrl
//     document.body.removeChild(downloadLink);
//     URL.revokeObjectURL(audioUrl);
//   };

//   useEffect(() => {
//     return () => {
//       mediaRecorder?.stop();
//     };
//   }, []);

//   return (
//     <div>
//       <button onClick={recording ? stopRecording : startRecording}>
//         {recording ? 'Stop Recording' : 'Start Recording'}
//       </button>
//       <button onClick={download} disabled={!audioChunks.length}>
//         Download Audio
//       </button>
//       <button onClick={download} >Audio</button>
//     </div>
//   );


const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    if (!mediaRecorder) {
      return;
    }

    let chunks = [];

    const handleDataAvailable = (event) => {
      chunks.push(event.data);
    };

    const handleStop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      setAudioUrl(URL.createObjectURL(blob));
    };

    mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
    mediaRecorder.addEventListener('stop', handleStop);

    return () => {
      mediaRecorder.removeEventListener('dataavailable', handleDataAvailable);
      mediaRecorder.removeEventListener('stop', handleStop);
    };
  }, [mediaRecorder]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        setIsRecording(true);
        recorder.start();
      })
      .catch((err) => console.error('Failed to start recording:', err));
  };

  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorder?.stop();
  };
  

  const downloadAudio = () => {
    if (!audioUrl) {
      return;
    }
  
    // Convert the audio URL to a Blob
    fetch(audioUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a FormData object to send the audio file
        const formData = new FormData();
        formData.append('audio', blob);
  
        // Send the audio data to the Spring Boot API
        fetch('http://127.0.0.1:8083/api/users/saveinterviewrecording/'+user, {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            console.log('Audio uploaded successfully', data);
          })
          .catch(error => {
            console.error('Failed to upload audio', error);
          });
      });
  };



  
  return (<>


  
    <div className='mt-2'>
      <button className='btn btn-primary' onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioUrl && (
        <button className='btn btn-primary m-2' onClick={downloadAudio}>Save Interview Recording</button>
      )}
    </div>

    <div className="container mt-5">
      <h2>Recording Process</h2>
      <p>We've streamlined the recording process for your convenience. Below are the steps to initiate and save your interview recordings:</p>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Step</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Start Recording</strong></td>
              <td>
                Click the "Start Recording" button to begin capturing your interview session. This action activates your device's microphone, ensuring that every detail is captured professionally.
              </td>
            </tr>
            <tr>
              <td><strong>Stop Recording</strong></td>
              <td>
                Once your interview is completed, click the "Stop Recording" button. This step halts the recording, guaranteeing that your entire interview is securely saved.
              </td>
            </tr>
            <tr>
              <td><strong>Save Recording</strong></td>
              <td>
                After stopping the recording, a "Save Recording" button becomes enabled in the responsive table. By clicking this button, you can securely store your interview for future reference or easy sharing.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Your interview recordings are now just a few clicks away from being safely stored for your records or to share with others.</p>
    </div>
    </>
  );
}
  
export default RecordInterview;
