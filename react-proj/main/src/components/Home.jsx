
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Home = () => {
    let [users , setUsers] = useState([])
    useEffect( () => {
      let res =  async(e) => {
         let result = await axios.get("http://localhost:8080/users")
         console.log(result);
         let {data} = result
         console.log(data);
         setUsers(data)
        }
        res()
    } , [])
  

     let deleteData = (id) => {
        console.log(id);
         axios.delete(`http://localhost:8080/users/${id}`)
        .then(() => {
            window.location.reload()
        })
        .catch(() => {
            console.log("not deleted");
            
        })
    }


  return (
    <div >
      <Link to="/create">
        <button className="btn btn-outline-secondary mb-3">
          Create a New User
        </button>
      </Link>

      <div className="row">
        {users.length > 0 ? (
          users.map((user) => {
            
            const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${user.name}`

            return (
              <div className="col-md-4 mb-4" key={user.id}>
                <div className="card shadow-sm">
                  <div >
                    <img src={avatarUrl} alt="avatar" width="100" height="100"/>

               
                    <p ><strong>Id:</strong>{user.name}</p>
                    <p ><strong>Username:</strong>{user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Company:</strong> {user.company}</p>

                   
                    <div >
                      <Link to={`/edit/${user.id}`}>
                        <button className="btn btn-outline-success">
                          Edit
                        </button>
                      </Link>
                       &nbsp;&nbsp;
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteData(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3 >No Users Found</h3>
        )}
      </div>
    </div>
  );
};

export default Home;

