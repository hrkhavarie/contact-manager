import { Link } from "react-router-dom";

import { Comment, Green, Purple } from "../../helpers/color"
import Spinner from "../Spinner";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";

const AddContact = () => {

    const {loading , onContactChange , contact , groups , createContact } =  useContext(ContactContext);
    
    return (
        <>
        {loading ?
         (<Spinner/>
         ):(
            <>
             <section className="p-3">
                  
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p
                                        className="h4 fw-bold text-center"
                                        style={{ color: Green }}
                                    >
                                        Create New Contact
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Green }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form onSubmit={createContact} >
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                 value={contact.fullname}
                                                 onChange={onContactChange}
                                                className="form-control"
                                                placeholder=" full name "
                                               required={true}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={contact.photo}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder=" photo link"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                value={contact.mobile}
                                                onChange={onContactChange}
                                                className="form-control"
                                               required={true}
                                                placeholder="mobile "
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="email"
                                                name="email"
                                                value={contact.email}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="email "
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                name="job"
                                                value={contact.job}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="job"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={contact.group}
                                                onChange={onContactChange}
                                               required={true}
                                                className="form-control">
                                                <option value=""> Group</option>
                                                       { groups.length > 0 && groups.map((group)=>(
                                                            <option key={group.id} value={group.id}>
                                                                {group.name}
                                                            </option>
                                                        ))   }                                                  
                                            </select>
                                        </div>
                                        <div className="mx-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{ backgroundColor: Purple }}
                                                value="Create Contact "
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{ backgroundColor: Comment }}
                                            >
                                               Cancel
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-8">
                                <img
                            src={require("../../assets/img/man-taking-note.png")}
                            height="400px"
                            // style={{
                            //     position: "absolute",
                            //     zIndex: "-1",
                            //     top: "130px",
                            //     left: "100px",
                            //     opacity: "50%",
                            // }}
                        />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
         )
        }
         
            
        </>
    );
};

export default AddContact;
