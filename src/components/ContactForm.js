import { useEffect, useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({})
    const [validForm, setValidForm] = useState(false)

    // we are getting all the information from the event itself
    const setFormObject = (event) => {
        !event.target.checked
        // in case it is a regular input we use value
        ?setFormData({...formData, [event.target.name]: event.target.value})
        // for inputs that return checked we need a variation
        :setFormData({...formData, [event.target.name]: event.target.checked})
    }

    useEffect(()=>{
        if(formData.firstName && formData.lastName && formData.terms){
            setValidForm(true)
        }
    },[formData.firstName, formData.lastName, formData.terms])

    const sendData = (e) => {
        e.preventDefault() // it prevents the auto-refresh and the POST request
        fetch(`${process.env.REACT_API_ENDPOINT}/hot`, {
            method: 'POST', 
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(formData)
            })
        .then(res => res.json())
        .then(data => console.log('Success',data))
        .catch(err => console.error(err))
    }

    console.log(formData)

  return (
    <>
      <form method="post">
        <label>First Name:
            <input type="text" name="firstName" placeholder="John" 
                // onChange={ (event) => setFormData({...formData, firstName: event.target.value}) }/>
                // onChange={setFormObject}/>
                onChange={setFormObject}/>
        </label>
        <br />
        <label>Last Name:
            <input type="text" name="lastName" placeholder="Doe" 
                // onChange={ (event) => setFormData({...formData, lastName: event.target.value}) }/>
                onChange={setFormObject}/>
        </label>
        <br />
        <label>Address:
            <input type="text" name="address" placeholder="1234 Yellow Brick Rd"
                // onChange={ (event) => setFormData({...formData, address: event.target.value}) } />
                onChange={setFormObject}/>
        </label>
        <br />
        <label>Zip:
            <input type="text" name="zip" maxLength={5} placeholder="12345"
                // onChange={ (event) => setFormData({...formData, zip: event.target.value}) } />
                onChange={setFormObject}/>
        </label>
        <br />
        <label>State:
            <select name="state" 
                // onChange={ (event) => setFormData({...formData, state: event.target.value}) }>
                onChange={setFormObject}>
            <option value="">Select your state</option>
            <option value="fl">FL</option>
            <option value="ge">GE</option>
            <option value="sc">SC</option>
            </select>
        </label>
        <br />
        <label>Message:
            <textarea name="message" cols="50" rows="3" 
                // onChange={ (event) => setFormData({...formData, message: event.target.value}) }/>
                onChange={setFormObject}/>
        </label>
        <br />
        <label>Date:
            <input type="date" name="date"
                // onChange={ (event) => setFormData({...formData, date: event.target.value}) } />
                onChange={setFormObject}/>
        </label>
        <br />
        <label>Terms and conditions
            <input type="checkbox" name="terms" 
                // onChange={ (event) => setFormData({...formData, terms: event.target.checked}) }/>
                onChange={setFormObject}/>
        </label>
        

        <button type="submit" disabled={!validForm} 
            onClick={(e)=>sendData(e)} >Submit</button>
      </form>
    </>
  );
}
