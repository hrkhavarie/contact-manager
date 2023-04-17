import { useEffect, useState , useContext } from "react";


import { Link, useNavigate, useParams } from "react-router-dom";

import {
    getContact,
    updateContact,
} from "../../services/contactService";
import { Spinner } from "../";
import { Comment, Yellow, Purple } from "../../helpers/color";
import { ContactContext } from "../../context/contactContext";


const EditContact = () => {
    const { contactId } = useParams();
    const navigate = useNavigate();
    const {contacts ,setContacts , setFilteredContacts ,loading , setLoading , groups} = useContext(ContactContext);
  

    const [contact, setContact] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true) ; 
                const { data: contactData } = await getContact(contactId);
                
                setContact(contactData);
                setLoading(false);
                
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onContactChange = (event) => {
        setContact({   
                ...contact ,
                            [event.target.name]: event.target.value
                        
                        });
                    }
                    

    const submitForm = async (event) => {
        event.preventDefault();
            try {
                setLoading(true);
             
                const {data ,status } =await updateContact(contact , contactId ) ; 
                

        
                if(status ===200) {

                    setLoading(false);

                    const allContacts = [...contacts] ; 
                    const contactIndex = allContacts.findIndex(c => c.id === parseInt(contactId) );
                    console.log(allContacts[contactIndex]);

                    allContacts[contactIndex] = {...data}; 
                    console.log(allContacts);
                    setContacts(allContacts);
                    setFilteredContacts(allContacts)

                    navigate('/contacts');
                }
                

                // copy state
                // update state
                // send request
                // status == 200 do nothing
                // state == error  -> setstate (copyState)


                /*
                NOTE
                1- forceRender -> setforcerender (true)
                2- send request server
                3- update local state
                4- update local state before sending request to server
                 */


                
            } catch (err) {
                console.log(err);
             setLoading(false);
            }
    };


    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <div className="container">
                            <div className="row my-2">
                                <div className="col text-center">
                                    <p className="h4 fw-bold" style={{ color: Yellow }}>
                                        ویرایش مخاطب
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Yellow }} />
                            <div
                                className="row p-2 w-75 mx-auto align-items-center"
                                style={{  borderRadius: "1em" }}
                            >
                                <div className="col-md-8">
                                    <form onSubmit={submitForm}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                className="form-control"
                                                value={contact.fullname}
                                                onChange={onContactChange}
                                                required={true}
                                                placeholder="fullname"
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
                                                placeholder="آدرس تصویر"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                className="form-control"
                                                value={contact.mobile}
                                                onChange={onContactChange}
                                                required={true}
                                                placeholder="شماره موبایل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                value={contact.email}
                                                onChange={onContactChange}
                                                required={true}
                                                placeholder="آدرس ایمیل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="job"
                                                type="text"
                                                className="form-control"
                                                value={contact.job}
                                                onChange={onContactChange}
                                                required={true}
                                                placeholder="شغل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={contact.group}
                                                onChange={onContactChange}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">انتخاب گروه</option>
                                                {groups.length > 0 &&
                                                    groups.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{ backgroundColor: Purple }}
                                                value="Edit Contact "
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{ backgroundColor: Comment }}
                                            >
                                                Cancle
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src={contact.photo}
                                        className="img-fluid rounded"
                                        style={{ border: `1px solid ${Purple}` }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-1">
                            <img
                                src={require("../../assets/img/man-taking-note.png")}
                                height="300px"
                                style={{ opacity: "60%" }}
                            />
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default EditContact;
