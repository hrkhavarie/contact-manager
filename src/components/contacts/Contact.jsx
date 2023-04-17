import React from "react";
import { CurrentLine , Yellow , Cyan , Red , Purple  } from "../../helpers/color";
import { Link } from "react-router-dom";

const Contact = ({ contact , deleteContact}) =>{
    return(
        <div className="col-md-6 col-xs-12 ">
        <div className="card my-2" style={{backgroundColor:CurrentLine}}>
            <div className="card-body">
                <div className="row align-item-center d-flex justify-content-around">
                    <div className="col-md-4 col-sm-4">
                        <img 
                          src={contact.photo}
                          alt="" 
                          style={{border: `1px solid ${Purple}`}} 
                          className="img-fluid rounded"  />
                    </div>
                    <div className="col-md-7 col-sm-7">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark">
                                    Full Name: {""}
                                    <span className="fw-bold">
                                        {contact.fullname}
                                    </span>
                            </li>

                           
                            <li className="list-group-item list-group-item-dark">
                                    Email: {""}
                                    <span className="fw-bold">
                                         {contact.email}
                                    </span>
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                    Mobile: {""}
                                    <span className="fw-bold">
                                         {contact.mobile}
                                    </span>
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                    Job : {""}
                                    <span className="fw-bold">
                                         {contact.job}
                                    </span>
                            </li>

                        </ul>
                
                        
                    </div>
                    <div className="col-md-1 col-sm-1 d-flex flex-column align-items-cneter">
                        <div className="row">
                            <Link to={`/contacts/${contact.id}` } className="btn my-1" style={{backgroundColor: Yellow}}>
                                <i className="fa fa-eye" />
                            </Link>
                    
                       
                        
                            <Link to={`/contacts/edit/${contact.id}` } className="btn my-1" style={{backgroundColor: Cyan}}>
                                <i className="fa fa-pencil" />
                            </Link>
                        
                        
                            <button onClick={deleteContact} className="btn my-1" style={{backgroundColor: Red}}>
                                <i className="fa fa-trash" />
                            </button>
                        </div>

                      


                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Contact ;