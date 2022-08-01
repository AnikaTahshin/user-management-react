import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


export default function AddUser() {
  let history = useHistory();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [website, setWebsite] = useState("");
  let [address, setAddress] = useState("");

  function validation() {
    if (!name) {
      swal({
        text: "Name required!!",
        icon: "error",
      });
      return false;
    }
    else if (!email) {
      swal({
        text: "Email required!!",
        icon: "error",
      });
      return false;
    }

    else if (!phone) {
      swal({
        text: "Phone required!!",
        icon: "error",
      });
      return false;

    }

    else {
      return true;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    //console.log(name, email, phone, website, address);
    if (validation()) {
      try {
        let data = {
          name: name,
          email: email,
          phone: phone,
          website: website,
          address: address,
        }

        await axios.post("http://localhost:3001/users", data).then((response) => {
          console.log(response)
          if (response.status == 201) {
            history.push("/");

          }
        }).catch((error) => {
          console.log(error)
        })


      } catch (error) {
        console.log(error);

      }

    }

  }

  return (

    <div>
      <form onSubmit={(e) => { submitForm(e) }}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone number</label>
          <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Phone number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Website</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Website" value={website} onChange={(e) => { setWebsite(e.target.value) }} />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Address</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={address} onChange={(e) => { setAddress(e.target.value) }} ></textarea>
        </div>

        <button type='submit' className='btn btn-success'>Submit</button>

      </form>
    </div>
  )
}
