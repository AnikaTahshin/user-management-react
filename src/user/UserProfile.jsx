import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    useEffect(() => {
        userData()
    }, [])
    let {id} = useParams();
    let [user, setUsers] = useState([]);
    

    async function userData(){
        try{
        let response = await axios.get("http://localhost:3001/users/" + id);
        setUsers(response.data);
        
        }
        catch(error){
            console.log(error);
        }
    }


  return (
    <div>
        
            <p>{user.name}</p>
            <p>{user.address}</p>

            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.phone}</p>

    </div>
  )
}
