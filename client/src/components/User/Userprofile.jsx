// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// import ProfileList from "./ProfileList"
// // import "./styles.css"

// export function Userprofile() {
//   const [id, setId] = useState("");
  
//   const [infoUser, setInfoUser] = useState([]);



//   useEffect(
//     function () {
//       axios
//         .get("http://localhost:4000/api/users")
//         .then((res) => {
//           setInfoUser(res.data);
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     },
    
//   );
  
//   return (
//     <section className="container">
      
//       <section className="todo-data">
//         <h1></h1>
//         <ul className="todo-list-block">
//           {infoUser.map((userInfo, index) => (
//             <ProfileList
//               key={index}
//               userInfos={userInfo}
              
//             />
//           ))}
//         </ul>
//       </section>
      
//     </section>
//   );
// }

// export default Userprofile;

