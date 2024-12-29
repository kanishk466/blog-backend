import User from "../models/user.model.js"
import jwt from "jsonwebtoken"


export const register  = async (req,res)=>{
 
    const {username , email , password , } = req.body;

    try {
        let user = await User.findOne({email});
        if(user) return res.status(400).json({msg:"Email already exists"})

        user =  new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });


    } catch (error) {
        res.status(400).json({ error: error.message });
    }


}



export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ id: user._id},  'secretKey', { expiresIn: "1h" });
      res.header('Authorization', token).send({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };