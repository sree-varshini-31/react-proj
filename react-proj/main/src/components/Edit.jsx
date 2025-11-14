
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");

  const { userid } = useParams();
  const navigate = useNavigate();


useEffect(() =>{
        axios.get(`http://localhost:8080/users/${userid}`)
        .then((x) => {
            console.log(x);
            setId(x.data.id)
            setUsername(x.data.username)
       setName(x.data.name)
       setEmail(x.data.email)
       setPhone(x.data.phone)
       setWebsite(x.data.website)
       setAddress(x.data.address)
       setCompany(x.data.company)
        })
      
      } , [])


  // Update user data
  const editData = (e) => {
    e.preventDefault();
    const payload = {
      id,
      username,
      name,
      email,
      phone,
      website,
      address,
      company,
    };

    axios
      .put(`http://localhost:8080/users/${userid}`, payload)
      .then(() => {
        window.alert("User updated successfully");
        navigate("/");
      })
      .catch(() => alert("Error updating user"));
  };



  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: "22rem" }}>
        <div >
          <img src={"https://api.dicebear.com/9.x/lorelei/svg?seed=${user.name}"} alt="avatar" width="100" height="100" />

          <form >
            <div>
              <label><strong>ID:</strong></label>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>

         
            <div >
              <label><strong>Username:</strong></label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

               <div >
              <label><strong>Name:</strong></label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>


            <div >
              <label><strong>Email:</strong></label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div >
              <label><strong>Phone:</strong></label>
              <input type="tel"value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div >
              <label><strong>Website:</strong></label>
              <input type="text" value={website}onChange={(e) => setWebsite(e.target.value)} />
            </div>

            <div>
              <label><strong>Address:</strong></label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>

            <div>
              <label><strong>Company:</strong></label>
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
            </div>

            <div >
              <button type="submit" className="btn btn-success"  onClick={editData}>
                Update
              </button>
               &nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-secondary "
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
