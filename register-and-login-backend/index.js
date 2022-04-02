const Express = require("Express");
const cors = require("cors");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const router = Express.Router();        //router instance 
const app = Express()
app.use(Express.json())
app.use(Express.urlencoded())
app.use(cors()) 



mongoose.connect("mongodb://localhost:27017/RegisterLoginDB",{   //connect to database
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;
db.on('error',()=>console.log("Error in connecting to database"));
db.once('open',()=>console.log("Connected to Database"))



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model('User', userSchema)


//Routing
app.post("/login", (req, res)=> {
    const { email, password} = req.body
   
    User.findOne({ email: email}, (err, user) => {
        const{ id } = user._id;
        console.log(id)
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else if(password != (user.password)){
                res.send({ message: "Incorrect Password"})
            }
            } else {
            res.send({message: "User not registered"})
        }
        app.get("/fetch/:id", (req, res) => {
            User.findOne({ "_id": new ObjectId(id) }, (error, result) => {
                if(error) {
                    return res.status(500).send(error);
                }
                res.send(result);
            });
        });
    })
   
}) 


        
app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "Username is already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } 
            })
        }
    })
    
}) 
 
    

app.listen(9002,() => {
    console.log("Backend started at port 9002");
})