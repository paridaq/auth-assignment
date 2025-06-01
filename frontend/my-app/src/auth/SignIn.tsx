import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SignIn(){

    const [email,setemail] = useState<string>('')
    const[password,setPassword] = useState<string>('')
    const  navigate = useNavigate()

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
        const data = {email,password}

        const res = await fetch('http://localhost:8080/api/auth/login',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const result = await res.json();
        console.log(result);
        console.log(result.user.name)
         localStorage.setItem("name",result.user.name)
         if(result){
            navigate('/')
         }
        }catch(error){
            console.log(error);
        }
    }
    return(

        <>
        <form onSubmit={handleSubmit}>

            <input type="email" 
            value={email} 
            onChange={(e)=>setemail(e.target.value)}
            required
            placeholder="Type email..."/>
            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            placeholder="type password ...." />
            <button type="submit">submit</button>
        </form>
        
        </>
    )
}
export default SignIn