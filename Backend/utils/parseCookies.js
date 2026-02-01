export const parseCookies=(req)=>{
    const rawCookies=req.headers.cookie|| ""
    const parsed ={}
    rawCookies.split(";").forEach(cookie=>{
      const [key,value]=cookie.split("=")
      if (key && value){
        parsed[key.trim()] =decodeURIComponent(value.trim())
      }
    })
  
    return parsed
  }
  