import {createContext} from "react";


export const ContactContext = createContext({
    loading : false  ,
    setLoading : ()=>{} , 
    contact : {} , 
    contactQuery: {},
    setContacts : ()=>{} ,
    contacts: [] , 
    setFilteredContacts: ()=>{} , 
    filteredContacts: [] , 
    groups: [] ,
    onContactChange: () =>{} , 
    deleteContact : ()=>{} , 
    //updateContact: () =>{} , 
    createContact : () =>{} ,
    contactSearch:()=>{},

}) ; 