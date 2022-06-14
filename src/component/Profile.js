import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Profile() {

  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  const params = useParams();
  const navigat = useNavigate();

  useEffect(() => {
    const getProductDetails = async () => {

      let result = await fetch(`http://localhost:5000/login/${params.id}`);
      result = await result.json();
      setName(result.name);
      setemail(result.email);
    }
    
    getProductDetails();
  }, []);

  return (
    <>
      <div className='addproduct'>
        <h1> Profile User </h1>
        <div>
          <input type="text" className='inputBox' disabled value={name} />
          <input type="text" className='inputBox' disabled value={email} />
          {/* <input type="text" className='inputBox' disabled value={company} /> */}
          <button className='Submitbtn' >Back To Home Page</button>

        </div>
      </div>
    </>
  )
}

export default Profile;