import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default function UpdateUser() {
    let history = useHistory();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [website, setWebsite] = useState("");
    let [address, setAddress] = useState("");

    useEffect(() => {
        getData();
    }, []);
    //console.log(useParams());
    let { id } = useParams();
    async function getData() {
        try {

            await axios.get("http://localhost:3001/users/" + id).then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
                setPhone(response.data.phone);
                setWebsite(response.data.website);
                setAddress(response.data.address);

            })
        } catch (error) {

        }
    }

    async function update(e) {
        e.preventDefault();
        try {

            let data = {
                name: name,
                email: email,
                phone: phone,
                website: website,
                address: address,
            }
            await axios.put("http://localhost:3001/users/" + id, data).then((response) => {
                console.log(response);
                if (response.status == 200) {

                    history.push("/");
                    
                }
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {

        }

    }
    return (

        <div>
            <form onSubmit={(e) => { update(e) }}>
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
