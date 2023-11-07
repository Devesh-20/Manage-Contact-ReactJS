import React, { useState } from 'react'

const AddContact = ({addContact}) => {
    const[contactdata, setContactdata]=useState({name:"",email:""});

    const handleChange=(e)=>{
      if(e.target.name==="name"){
        setContactdata({...contactdata, name:e.target.value});
      }else{
        setContactdata({...contactdata, email:e.target.value});
      }
    } 

    const handleAdd=()=>{
      if(contactdata.name==="" || contactdata.email===""){
        alert("Please fill all the details");
        return
      }
      addContact(contactdata);
      setContactdata({name:"", email:""});
    }

  return (
    <div className='formHeader'>
        <div className='add-contact'> Add Contact </div>

        <form>
            <label > Name: </label> <br />
            <input type="text" placeholder='Enter Name' name='name' value={contactdata.name} onChange={handleChange}/> <br />

            <label > Email: </label><br />
            <input type="email" placeholder='Enter Email' name='Email' value={contactdata.email} onChange={handleChange}/>
        </form>

        <button className='btn' onClick={handleAdd} > Add Contact </button>
    </div>
  )
}

export default AddContact