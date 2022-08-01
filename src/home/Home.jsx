import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
function Home() {
  let [users, setUsers] = useState([]);
  useEffect(async () => {
    await getData();
  }, []);

  
  async function getData() {
    try {
      await axios.get('http://localhost:3001/users').then(response => {
        console.log(response.data);
        setUsers(response.data);
        //console.log(users);
      }).catch(error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id){
    //console.log(id);
    try {
      await axios.delete("http://localhost:3001/users/" +id).then((response) => {
        console.log(response);
        getData();
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
      
    }
    
  }


  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>

          {
            users.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.userName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>

                   <Link to={"/user-profile/" + item.id} className="btn btn-primary m-1"><i class="fa-solid fa-eye"></i></Link> {/* preview */}
                  <Link to={"/update-user/" + item.id} className="btn btn-success m-1"><i class="fa-solid fa-pen-to-square"></i></Link> 

                  <a onClick={() => {deleteUser(item.id)}} className="btn btn-danger m-1"><i class="fa-solid fa-trash-can"></i></a>

                  </td>




                </tr>

              )

            })
          }


        </tbody>
      </table>
    </div>

  )
}
export default Home;
