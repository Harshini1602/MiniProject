require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const adminauthRoutes = require("./routes/adminauth");
const product = require("./routes/product.routes.js");
const fruit = require("./routes/Grocery/Fruitroutes.js");
const vegetable = require("./routes/Grocery/Vegetableroutes.js");
const audio = require("./routes/Electronics/Audioroutes");
const charger = require("./routes/Electronics/Chargerroutes");
const laptop = require("./routes/Electronics/Laptoproutes");


// const multer = require("multer");
// const {v4 : uuidv4 } = require("uuid");



//database connection
connection();

//middlewares
app.use(express.json())
app.use(cors());


//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);
app.use("/api/adminauth", adminauthRoutes);

app.use("/mobiles/api/productapp", product);
app.use("/grocery/api/fruitapp", fruit);
app.use("/grocery/api/vegetableapp", vegetable);
app.use("/electronics/api/audioapp", audio);
app.use("/electronics/api/chargerapp", charger);
app.use("/electronics/api/laptopapp", laptop);



// const storage = multer.diskStorage({
//     destination : function(req, file, cb){
//         cb(null , 'images');
//     },
//     filename: function(req, file, cb) {
//         cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//     }
// });
// const fileFilter = (req,file,cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     }
//     else{
//         cb(null, false);
//     }
// }
// let upload = multer({storage, fileFilter});



const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`))
