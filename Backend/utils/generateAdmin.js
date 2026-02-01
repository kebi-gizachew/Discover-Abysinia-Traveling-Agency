import jwt from "jsonwebtoken"
const generateAdmin=(user)=>{
  const token=jwt.sign(
    {id:user._id },
    process.env.JWT_Admin,
    {expiresIn:"7d"}
  );
  return  {name:"admin",value:token,
options:{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        path:"/",
        maxAge:1000*60*60*24*7,
        }
    }
}
export default generateAdmin