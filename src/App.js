import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

function App() {
  const localStorageKey="contact"

  const[contact, setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey)) || []});

  
  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(contact))}, [contact])

  const addContact=(data)=>{
    setContact([...contact, {id:uuidv4(),data} ]);
  }

  const removeContact=(id)=>{
    const updatedList=contact.filter((val)=>{
      return val.id !== id;
    })
    setContact(updatedList)
  }
  
  return (
    <div>
      <Header/>
      <AddContact addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
