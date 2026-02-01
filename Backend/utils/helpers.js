export const parseRequestBody=(req)=>new Promise((resolve, reject) => {
    let body=""
    req.on("data",chunk=>body+=chunk)
    req.on("end",()=>{
      try{
        resolve(JSON.parse(body))
      } catch (err){
      reject(err)
      }
    })
  })
export const sendJSON=(res,statusCode,data)=>{
  res.writeHead(statusCode,{"Content-Type":"application/json" })
  res.end(JSON.stringify(data))
}
