import React, { useState } from "react";
const userform = () => {
  const [username,setusername] = useState('');

  function handleChangeEvent(e) {
    console.log(e.target.value);
    setusername(e.target.value)
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
            <button className="form-label" htmlFor="addANote">
               Add a note
            </button>
            <h5>{username} is typing</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>)
};
export default userform