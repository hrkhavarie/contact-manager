import React from "react";
import { ContactContext } from "./context/contactContext";
import {useState  , useEffect } from "react";
import {  AddContact  , EditContact, Navabar, ViewContact, } from './components';
import { Route , Routes  , Navigate , useNavigate } from "react-router-dom";
import  { confirmAlert } from "react-confirm-alert";
import  {createContact, getAllContacts , getAllGroups, deleteContact} from './services/contactService';

import './assets/styles/App.scss';

import Contacts from "./components/contacts/Contacts";
import { CurrentLine, Foreground, Purple, Yellow } from "./helpers/color";


const App=()=>{
    const [loading , setLoading] = useState(true);
    const [contacts , setContacts] = useState([]);
    const [filteredContacts , setFilteredContacts] =useState ([]);
    const [groups , setGroups] = useState([]);
    const [contact , setContact] = useState({ });
    const [contactQuery , setContactQuery] = useState({text: ""});

    const navigate = useNavigate();

    useEffect(()=>{
      const fetchData = async() =>{
        try {
          setLoading(true); 
          const {data : contactsData } = await getAllContacts();
          const {data: groupsData } = await getAllGroups();

          setContacts(contactsData);
          setFilteredContacts(contactsData);
          setGroups(groupsData);

          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
      fetchData();
    } , [])


    const createContactFrom = async (event) =>{
      event.preventDefault();
      
      try {
        setLoading((prevLoading) => !prevLoading);
        const {status , data} = await createContact(contact);

        /*
          NOTE: 
          1- Rerender -> force render , setForecrender 
          2- setContact (data)

        */
        if (status === 201){
          const allContacts = [...contacts , data];
          setContacts(allContacts);
          setFilteredContacts(allContacts);
          setContact({});
          setLoading((prevLoading) => !prevLoading);
          navigate('./contacts');
        }
      } catch (error) {
          console.log(error) ;
          setLoading((prevLoading) => !prevLoading);
      }
    }

    const onContactChange = (event) =>{
      setContact({ ...contact  , 
        [event.target.name] : event.target.value ,
      } ) 
    }

    const confirmDelete = (contactId , contactFullname) =>{
      confirmAlert({
        customUI :({onClose}) =>{
          return <div dir="rtl" style={{backgroundColor :CurrentLine 
            , border: `1px solid ${Purple}` ,
            borderRadius: '1em' ,
          }}
          className="p-4"> 
            <h1 style={{color:Yellow}}>Delete Contact </h1>
            <p style={{color: Foreground }}>
              Are you Sure wants remove the contact {contactFullname} ?
            </p>
            <button onClick={()=>{
              removeContact(contactId) ;
              onClose();
            }} className="btn btn-danger mx-2">Yes , Im Sure</button>

            <button onClick={onClose} className="btn btn-primary mx-2">Cancle</button>

          </div>
        }
      })
    }

    const removeContact = async (contactId) =>{
      const allContacts = [...contacts] ; 
      try {
        setLoading(true);
        

        const updatedContact = contacts.filter(c=> c.id !== contactId);
        setContacts(updatedContact);
        setFilteredContacts(updatedContact)

        // sending delete request to server 
        const {status} = await deleteContact(contactId);

        if(status !== 200){
          // const {data : contactsData} = await getAllContacts();
          setContacts(allContacts);
          setFilteredContacts(allContacts);
          setLoading(false);
        }
        
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        setContacts(allContacts);
        setFilteredContacts(allContacts);
      }
    }

    const contactSearch = (event) =>{
      setContactQuery({ ...contactQuery , text :  event.target.value });
      const allContacts = contacts.filter((contact)=>{
        return contact.fullname
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase());
      });

      setFilteredContacts(allContacts);
      console.log("setfilteed" , allContacts);

    };

    //console.log(contactSearch);

    return(

      <ContactContext.Provider value={{
         loading , 
         setLoading , 
         contact , 
         setContacts , 
         contactQuery ,
         contacts , 
         groups , 
         setFilteredContacts,
         filteredContacts,
         onContactChange , 
         deleteContact : confirmDelete , 
        createContact : createContactFrom , 
        contactSearch , 
  
      }}>
           <>
            <Navabar/>
            <Routes>
                <Route path="/" element={<Navigate to="/contacts"/>} />
                <Route 
                    path="/contacts"
                    element={<Contacts  />} />
                 <Route
                    path="/contacts/add"
                    element= {<AddContact />}
                 />
                 <Route path="/contacts/:contactId"  element={<ViewContact/> } />
                 <Route path="/contacts/edit/:contactId" element={<EditContact />}/>
            </Routes>
          
       
       </>

      </ContactContext.Provider>
      
    )
}

export default App;