import React, { useContext } from "react";
import {    Purple } from '../../helpers/color'
import { ContactContext } from "../../context/contactContext";
const SearchContact = () => {

     const {contactQuery , contactSearch} = useContext(ContactContext);
    return ( 
        <div className="input-group mb-3 mt-3">
             <input
             value={contactQuery.text}
             onChange={contactSearch}
              type="text" 
              style={{borderColor: Purple}}
              className="form-control" 
              placeholder="Contacts names..." 
              aria-label="Contacts names..." 
              aria-describedby="button-addon2" />
             <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{backgroundColor:Purple}}> <i className="fa fa-search"></i></button>
        </div>
    
     );
}
 
export default SearchContact;