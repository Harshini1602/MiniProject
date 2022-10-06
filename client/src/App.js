import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage/Homepage.jsx";



function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/" exact element={<Homepage />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{/* <Route path="/" element={<Navigate replace to="/" />} /> */}
		</Routes>
	);
}

export default App;