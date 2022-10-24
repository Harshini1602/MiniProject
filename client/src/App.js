import { Route, Routes, Navigate } from "react-router-dom";
// import "./App.css"
import Signup from "./components/Signup/index.jsx";
import Login from "./components/Login/index.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Main from "./components/Main/index.jsx"
import Mobiles from "./components/Products/Mobiles/mobiles.jsx"
// import Userprofile from "./components/User/Userprofile.jsx"
import Fruits from "./components/Products/Grocery/Fruits/fruits.jsx"
import Vegetables from "./components/Products/Grocery/Vegetables/Vegetables.jsx"
import AdminUser from "./components/AdminUser.jsx/AdminUser";
import AdminSignup from "./components/Signup/adminSignup.jsx";
import AdminLogin from "./components/Login/adminLogin.jsx";
import DisplayProduct from './components/AdminCrud/Mobiles/DisplayProduct';
import CreateProduct from './components/AdminCrud/Mobiles/CreateProduct';
import DisplayFruit from "./components/AdminCrud/Grocery/FruitsCRUD/DisplayFruit/DisplayFruit.js";
import FruitsList from "./components/Products/Grocery/Fruits/fruits.jsx";
import CreateFruit from "./components/AdminCrud/Grocery/FruitsCRUD/CreateFruit/CreateFruit.js";
import DisplayVegetable from "./components/AdminCrud/Grocery/VegetablesCRUD/DisplayVegetable/DisplayVegetable.js";
import CreateVegetable from "./components/AdminCrud/Grocery/VegetablesCRUD/CreateVegetable/CreateVegetable.js";
import AdminHome from "./components/AdminCrud/AdminHome.jsx";
import CreateAudio from "./components/AdminCrud/Electronics/AudioCRUD/CreateAudio/CreateAudio.js";
import DisplayAudio from "./components/AdminCrud/Electronics/AudioCRUD/DisplayAudio/DisplayAudio.js";
import AudioList from "./components/Products/Electronics/Audio/audio.jsx";
import CreateCharger from "./components/AdminCrud/Electronics/ChargersCRUD/CreateCharger/CreateCharger.js";
import DisplayCharger from "./components/AdminCrud/Electronics/ChargersCRUD/DisplayCharger/DisplayCharger.js";
import ChargerList from "./components/Products/Electronics/Charger/charger.jsx";
import VegetableLists from "./components/AdminCrud/Grocery/VegetablesCRUD/VegetableLists/VegetableLists.js";
import LaptopLists from "./components/Products/Electronics/Laptop/Laptoplist";
import Laptop from "./components/Products/Electronics/Laptop/laptop.jsx";
import CreateLaptop from "./components/AdminCrud/Electronics/LaptopsCRUD/CreateLaptop/CreateLaptop.js";
import DisplayLaptop from "./components/AdminCrud/Electronics/LaptopsCRUD/DisplayLaptop/DisplayLaptop.js";
import Footer from "./components/Footer/Footer";


function App() {

	return (
		<Routes>
			<Route path="/" exact element={<Homepage />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/main" exact element={<Main />} />
			<Route path="/Mobiles" exact element={<Mobiles />} />
			{/* <Route path="/Userprofile" exact element={<Userprofile />} /> */}
			<Route path="/Fruits" exact element={<Fruits />} />
			<Route path="/Laptops" exact element={<Laptop />} />
			<Route path="/Vegetables" exact element={<Vegetables />} />
			<Route path="/Fruits" exact element={<FruitsList />} />
			<Route path="/Vegetables" exact element={<VegetableLists />} />
			<Route path="/Audio" exact element={<AudioList />} />
			<Route path="/Chargers" exact element={<ChargerList />} />
			<Route path="/Laptops" exact element={<LaptopLists />} />
			<Route path="/adminuser" exact element={<AdminUser />} />
			<Route path="/adminsignup" exact element={<AdminSignup />} />
			<Route path="/adminlogin" exact element={<AdminLogin />} />
			<Route path="/adminhome" exact element={< AdminHome />} />
			<Route exact path="/displayproduct" element=<DisplayProduct /> />
			<Route path="/add-list" element=<CreateProduct /> />
			<Route exact path="/displayfruit" element=<DisplayFruit /> />
			<Route path="/createfruit" element=<CreateFruit /> />
			<Route exact path="/displayvegetables" element=<DisplayVegetable /> />
			<Route path="/createvegetable" element=<CreateVegetable /> />
			<Route exact path="/displayaudio" element=<DisplayAudio /> />
			<Route path="/createaudio" element=<CreateAudio /> />
			<Route exact path="/displaycharger" element=<DisplayCharger /> />
			<Route path="/createcharger" element=<CreateCharger /> />
			<Route path="/createlaptop" element=<CreateLaptop /> />
			<Route exact path="/displaylaptop" element=<DisplayLaptop /> />
			{/* <Route path="/login" element={<Navigate replace to="/main" />} /> */}
		</Routes>
	);
}

export default App;