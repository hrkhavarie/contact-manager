import React, { useContext } from "react";
import {Pink, Yellow} from '../../helpers/color';
import Spinner from "../Spinner";
import NotFound from '../../assets/img/no-found.gif';
import { Link } from "react-router-dom";
import Contact from './Contact';
import { ContactContext } from "../../context/contactContext";


const Contacts = ()=>{
    const   {filteredContacts , loadding , deleteContact} = useContext(ContactContext);
    return(
       <>
         <section className="container">
            <div className="grid">
                <div className="row">
                        <div className="col">
                            <p className="h3">
                                <Link to={"/contacts/add"} className="btn mx-2" style={{backgroundColor: Pink}}>
                                    New Contact
                                    <i className="fa fa-plus-circle mx-2"></i>
                                    </Link>
                            </p>
                        </div>
                </div>
            </div>
         </section>
         {
            loadding ? <Spinner /> : (
                <section className="container">
                <div className="row">
                    {
                      filteredContacts.length > 0 ? filteredContacts.map( con =>(
                            <Contact key={con.id} 
                            deleteContact={()=>{deleteContact(con.id  , con.fullname)
                            }} contact={con} />
                      )) :
                       (
                        <div className="text-center">
                               <p className="h3" style={{color:Yellow}}>
                                Contacts Not Founded!
                               </p>
                              <img src={NotFound} className="img-fluid" alt="" style={{maxWidth:'250px'}} />
                        </div>
                       )  
                    }


                   
                </div>
        </section>
            ) 
         }
         
       </>
           
       
    )
}
export default Contacts;