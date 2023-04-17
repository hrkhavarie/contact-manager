import React from "react";
import SearchContact from "./contacts/SearchContact";
import {Purple , Background} from '../helpers/color';
import { useLocation } from "react-router-dom";


const Navabar = ()=>{

    const location = useLocation();

    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"  style={{backgroundColor: Background}}>
        <div className="container">
            <div className="row w-100">
                <div className="col col-sm-12 col-md-5 col-lg-5">
                        <div className="navbar-brand mt-1" >
                            <img src=".//assets/img/contact.png" alt="" className="img-responsive" style={{maxHeight:'60px'}} />
                            {/* <i className="fa fa-id-badge" ></i> */}
                            Contact Manager Web App by:{" "}
                            <span style={{color: Purple}}>Reactjs</span>
                        </div>
                </div>

                {
                    location.pathname === '/contacts' ? (
                        <div className="col col-sm-12 col-md-7 col-lg-7">
                        <SearchContact />
                   </div>
                    ) : null 
                }
               
            </div>
        </div>
    </nav>

        
    )
}
export default Navabar