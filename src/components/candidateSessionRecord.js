import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { getuserEmail, getUser, Cartlength } from '../Services/AuthService';
import ReactPaginate from 'react-paginate';
const useremail = getuserEmail();
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;;
}



function App() {

  const [filterText, setFilterText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(''); // 'date' or 'domain'

  const [data, setData] = useState([]);
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0); // Current page




  const downloadAudio = async (email) => {

    const userid = document.getElementById("userid").value;
    const useremail = document.getElementById("useremail").value;

    console.log(useremail + userid);
    try {
      const response = await Axios.get('http://127.0.0.1:8083/api/users/downloadaudio/' + userid + '/' + useremail, {
        responseType: 'blob', // Response type should be 'blob'
      });

      // Create a URL for the audio blob
      const audioUrl = window.URL.createObjectURL(new Blob([response.data]));
      const audioLink = document.createElement('a');
      audioLink.href = audioUrl;
      audioLink.download = 'audiofile.mp3';
      audioLink.click();
    } catch (error) {
      console.error('Error downloading audio:', error);
    }
  }

  useEffect(() => {
    Axios.get('http://127.0.0.1:8083/api/users/getinterviewrecords/' + useremail)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);
  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  const filteredItems = slicedData.filter((item) => {
    if (selectedFilter === 'date') {
      // Filter by date
      return item.timestamp.toLowerCase().includes(filterText.toLowerCase());
    } else if (selectedFilter === 'domain') {
      // Filter by domain
      return item.domain.toLowerCase().includes(filterText.toLowerCase());
    }
  });



  return (
    /*
        <>
        <div className="App">
          <h2>Your Interview Session</h2>
          <ul>
            
       
            
            
              
              <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Domain</th>
          <th scope="col">Date</th>
          <th scope="col">No of Interview</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {slicedData.map((item, index) => (
          <tr key={index}>
            <th scope="row">{startIndex + index + 1}</th>
            <td>{item.useremail}</td>
            <td>{item.timestamp}</td>
            <td>{item.noofinterview}</td>
            <td>{/* Action buttons or links </td>
          </tr>
        ))}
      </tbody>
    </table> 
    <h2></h2>
    <ReactPaginate
      pageCount={Math.ceil(data.length / itemsPerPage)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
    />
    
    
    
              <>
              
              
              </>
              
            
          </ul>
        </div>/



        filter

           <div class="row mb-2">
          <div class="col">
            <div class="input-group">
              <span class="input-group-text"><i class="fa fa-search"></i></span>
              <input type="text" class="form-control" placeholder="Search by order#, name..." />
            </div>
          </div>
          <div class="col-auto">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="filtersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Filters <i class="fa fa-angle-down"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="filtersDropdown">
                <li><a class="dropdown-item" href="#">Date</a></li>
                <li><a class="dropdown-item" href="#">Domain</a></li>
              </ul>
            </div>
          </div>
        </div>
    */
    <>
      <div class="container mt-5">
     
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead class="table-light">
              <tr>
                <th scope="col" width="5%">
                  <input class="form-check-input" type="checkbox" />
                </th>
                <th scope="col" width="10%">Domain</th>
                <th scope="col" width="20%">Date</th>
                <th scope="col" width="20%">Domain</th>
                <th scope="col" class="text-end" width="20%">Action</th>
              </tr>
            </thead>
            <tbody>
              {slicedData.map((item, index) => (
                <tr key={item.id}>
                  <td><input class="form-check-input" type="checkbox" /></td>
                  <td><i class="fa fa-check-circle-o green"></i><span class="ms-1">{item.domain}</span></td>
                  <input type="hidden" id="useremail" value={item.useremail}></input>
                  <input type="hidden" id="userid" value={item.id}></input>
                  <td>{formatDate(item.timestamp)}</td>
                  <td>{item.useremail}</td>
                  <td class="text-end">
                    <button onClick={() => downloadAudio()} class="btn btn-primary">
                      <i class="bi bi-download"></i>
                    </button>
                    <i class="fa fa-ellipsis-h ms-2"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <div class="container">
        <div class="d-flex justify-content-between align-items-center mt-3">
          <ReactPaginate
            pageCount={Math.ceil(data.length / itemsPerPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            breakClassName="page-item"
          />
        </div>
      </div>
    </>


  );
}

export default App;
