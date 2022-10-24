import React from "react";
import { Link } from "react-router-dom";
//import "./styles.module.css";
import "./styles1.css"


const AdminUser = () => {

    return (
        <div className="adminuser">

            <h1> Hey! Are you a Admin or User?</h1>
            <br></br>
            <Link to = "/adminsignup">
                <br></br>
                <h1><button type = "button" className="userbtn" onClick = "/adminsignup">
                    ADMIN
                </button></h1>
                <br></br>
            </Link>
            <Link to = "/login">
                <h1><button type = "button" className="userbtn" onClick = "/login">
                    USER
                </button></h1>
            </Link>
        </div>
    )
}

export default AdminUser;