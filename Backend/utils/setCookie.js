export const setCookie=(res,name,value,options={})=>{
    let cookie=`${name}=${value}; HttpOnly`  
    if (options.maxAge) cookie+= `; Max-Age=${options.maxAge}`
    if (options.path) cookie += `; Path=${options.path}`
    if (options.sameSite) cookie+=`; SameSite=${options.sameSite}`
    res.setHeader("Set-Cookie",cookie)
  }
  