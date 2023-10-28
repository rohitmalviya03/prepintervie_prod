import React from 'react';
import axios from "axios";
import Speech from 'react-speech';
import { getQuestions } from '../Services/InterviewService';
import { useState,useRef, useEffect } from 'react';
import { getUser } from '../Services/AuthService';
import { useNavigate ,useLocation} from "react-router-dom";
import Timer from './Timer';
import RecordInterview from './RecordInterview';
export default function Dashboard() {
  const location = useLocation();

  const user=getUser();
  
    const [data, setData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const randomIndex = Math.floor(Math.random() * data.length);
  const randomProduct = data[randomIndex];

    useEffect(() => {
      if (currentIndex >= data.length) {
        setCurrentIndex(0);
      }
      
    }, [data.length, randomIndex]);
    

    useEffect(() => {
      
      fetchData();
    // playques();  

      
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex) =>
          currentIndex === data.length - 1 ? 0 : currentIndex + 1
        );
      }, 20000);
         
      return () => clearInterval(interval);
    }, [data.question,currentIndex]);
  
    const fetchData = async () => {
      
      const response = await fetch('http://127.0.0.1:8083/api/users/getquestion/'+location.state.value)
     
      const data1 = await response.json();
      setData(data1);
        
      
      
    };

    const voices = window.speechSynthesis.getVoices();
voices.forEach(voice => {
  console.log(voice.name);
});


    const playques=()=>{
      console.log(data[randomIndex].question);
      const myString = JSON.stringify(data['question']);
      const text =data[randomIndex].question;
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.name === 'Microsoft Heera - English (India)');
      console.log(femaleVoice);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = femaleVoice;
      utterance.rate = 1.3;  //for speed
      window.speechSynthesis.speak(utterance);
    
    }
  
  const videoRef = useRef(null);
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Stop video stream before navigating
    
    if (videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach(track => {
        track.stop();
      });

      videoRef.current.srcObject = null;
    }
   
   
  };
  const [stream, setStream] = useState(null);
 
  useEffect(() => {
    async function enableWebcam() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error(error);
      }
    }
    enableWebcam();
  }, []);

  function stopWebcam() {

    const confirmExit = window.confirm('Are you sure you want to exit?');
     if (stream)
       {if (confirmExit) 
    {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
     
   
      navigate('/userdashboard');
    }
     
    }
  }

    return (

      <>
      
      <div></div>
<Timer></Timer>
      <div>
 <div className='row border border-dark mb-2' >
<div className='col-md-8 '>
   <video height="200" width="220" ref={videoRef}></video>
</div>
  <div className='col-md-4 mt-4'>
    <p>Candidate  Name: {user}</p>
   
    <p>Language: {location.state && location.state.value}</p>
    <button className='btn btn-primary' onClick={stopWebcam}>End Exam</button> 
 
    </div>   
    </div>

    <div className='row border border-dark'>
    <div className="card">{data.length > 0 ? (
  <div className="card-body">
  {data[randomIndex].question}
  </div>
  ):(<div>No questions available</div>)}
<div className='card-footer'>
  
  <button className='btn btn-primary' onClick={playques}>Play</button> 
  
 </div>
</div></div>
<RecordInterview></RecordInterview>
</div>
      </>);
    }
    

//     useEffect(() => { que.then(response => {
//         let timeoutId;
        
//         timeoutId = setTimeout(() => {
//             setQuestion(response.data);
   
//           }, 5000); // Wait 5 seconds before fetching data
      
//           return () => {
//             clearTimeout(timeoutId);
//           };
//       }
      
      
//       );
      
//       },[question]);


//    console.log(question);
//     const handleSpeak = () => {
        
       
      
//       const text ='hello brother';
//       const voices = window.speechSynthesis.getVoices();
//       const femaleVoice = voices.find(voice => voice.name === 'Google US English Female');
//       console.log(femaleVoice);
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.voice = femaleVoice;
//       utterance.rate = 1.5;
//       window.speechSynthesis.speak(utterance);
//     };
  
  

// return (
// <>

// <button onClick={handleSpeak}>Speak</button>
// <div>
//       {question ? (
//         <ul>
//           {question.map((item) => (
//             <li key={item.que_id}>{item.question}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
// </>
//   );
// }
