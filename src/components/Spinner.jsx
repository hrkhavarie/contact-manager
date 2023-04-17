import React from "react";

import spin from '../assets/img/Spinner.gif';

const Spinner = ()=>{
    return(
        <>
            <img src={spin}  className="d-block m-auto" style={{width:"200px"}} alt="" />
        </>
    )
}
export default Spinner;