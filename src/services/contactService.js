import axios from "axios";

const SERVER_URL = "http://localhost:5000"; 

//@desc Get All Contacts
// @route get http://localhost:5000/contacts
export const getAllContacts = () =>{
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

//@desc Get Contact with ID
// @route get http://localhost:5000/contacts/:contactID
export const getContact =  (contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.get(url);
}

//@desc Get All groups
// @route get http://localhost:5000/groups
export const getAllGroups = () =>{
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

//@desc  group with Id
// @route get http:://localhost:5000/groups/:grpupId
export const getGroup = (groupId)=>{
    const url = `${SERVER_URL}/groups/${groupId}`
    return axios.get(url);
}

//@desc  Create contact
// @route POST http:://localhost:5000/contacts
export const createContact =(contact)=>{
    const url = `${SERVER_URL}/contacts` ; 
    return axios.post(url , contact);
}

//@desc  Update conatact 
// @route PUT https://localhost:5000/contacts/:contactId
export const updateContact = (contact , contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}` ;
    return axios.put(url , contact);
}

//@desc  Delete contact 
// @route Delete https://localhost:5000/contacts/:contactId
export const deleteContact = (contactId)=>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url , contactId);
}