import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage/Homepage.jsx";
import Main from "./components/Main/index.jsx"

function App() {

	return (
		<Routes>
			<Route path="/" exact element={<Homepage />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			 <Route path="/main" exact element={<Main />} />
			{/* <Route path="/login" element={<Navigate replace to="/main" />} /> */}
		</Routes>
	);
}

export default App;