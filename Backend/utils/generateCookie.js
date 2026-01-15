import jwt from "jsonwebtoken";

const generateCookie = (user) => {
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  return  {name:"user",
        value:token,
        options:{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge:1000*60*60*24*7,
        }
    }
};
export default generateCookie;