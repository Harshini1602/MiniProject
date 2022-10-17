import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


const AdminUser = () => {

    return (
        <div className="d-flex">

            <h1> Hey! Are you a Admin or User?</h1>
            <Link to = "/adminsignup">
                <button type = "button" className="{styles.white_btn}" onClick = "/adminsignup">
                    ADMIN
                </button>
            </Link>
            <Link to = "/login">
                <button type = "button" className="{styles.white_btn}" onClick = "/login">
                    USER
                </button>
            </Link>
        </div>
    )
}

export default AdminUser;