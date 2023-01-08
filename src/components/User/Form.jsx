import React, { useState } from "react";
import {Link} from 'react-router-dom';
const userform = () => {
  const [username,setusername] = useState('');
  const [count, setcount] = useState(0);
  // var reset = false; 

  function handleChangeEvent(e) {
    setusername(e.target.value)
  }
  function handleCountChange() {
      setcount(count+1)
  }
  function handleReset() {
      setcount(0)
  }
    return (<><div className="row d-flex justify-content-center">
    <div className="col-md-8 col-lg-6">
      <div
        className="card shadow-0 border"
        style={{ backgroundColor: "#f0f2f5" }}
      > 
        <div className="card-body p-4">
          <div className="form-outline mb-4">
            <input
              onChange = {handleChangeEvent}
              type="text"
              id="addANote"
              className="form-control"
              placeholder="Type comment..."
            /><br/><br/>
            <button  onClick = {handleCountChange} className="form-label" htmlFor="addANote">
               Increasing Number
            </button>
            <button onClick = {handleReset} className="form-label" htmlFor="addANote">
               Reset
            </button><br/><br/>
            <button><Link to="/user/listing">User listing</Link></button>
            <h1>{count}</h1>
            <h5>{username} is typing</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>)
};
export default userform