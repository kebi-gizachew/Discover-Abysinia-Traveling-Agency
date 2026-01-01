const API_URL = "http://localhost:5000/api/auth"
const apiRequest = async(endpoint , method = 'GET' , data = null)=>{
const config = {
    method,
    credential:'include'
}
if(data){
    config.headers = {
        'Content-Type':'application/json'
    }
    config.body=JSON.stringify(data)
}
try{
const response = await fetch(`${API_URL}${endpoint}`,config)
const result = await response.json()
if(!response.ok){
    throw new Error (result.message ||  'Something went wrong')
}
return result
}catch(err) {
    console.log("API Request error",err)
    throw err
}
}


export const authService={
    signup: async(email,password)=>{
        const result = await apiRequest('/signup','POST',{email,password})
        if(result.success && result.user){
            localStorage.setItem('user',JSON.stringify(result.user))
        }
        return result
    },
    login: async(email,password)=>{
        const result = await apiRequest('/login','POST',{email,password})
        if(result.success && result.user){
            localStorage.setItem('user',JSON.stringify(result.user))
        }
        return result
    },
    logout: async()=>{
        try{
        await apiRequest('/logout','POST')
        }catch(err){
            console.log(err)
        }finally{
            localStorage.removeItem('user')
        }
    },
    getCurrentUser:()=>{
        const user = localStorage.getItem('user')
        return user?JSON.parse(user):null
    },
    isAuthenticated:async()=>{
        try{
        const response = await apiRequest('/check-auth','GET')
        return response.success ===true
        }
        catch(err){
            console.log(err)
        }
    }
}
