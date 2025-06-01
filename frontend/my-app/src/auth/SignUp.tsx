import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


function SignUp(){

     const[email,setEmail] = useState<string>('')
     const[name,setName] = useState<string>('')
     const[password,setPassword] = useState<string>('')
     const navigate   = useNavigate();


     const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
      const data  = {name,email,password};
      try {
        const res = await fetch('http://localhost:8080/api/auth/register',{
          method:'POST',
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(data)
        })
        //JSON.stringify() convert object into json
        if(!res.ok){
          throw new Error("http error in registration")
        }
         const result = await res.json();
         console.log(result)
         localStorage.setItem("name",result.newuser.name)
         console.log(result.newuser.name)
         if(result){

           navigate('/')
         }
         


      } catch (error) {
        console.log(error)
      }
     }
   


     
     return(
          <>
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
                     <input
                       type="name"
                       value={name || ''}
                       onChange={(e) => setName(e.target.value)}
                       required
                       placeholder="Type Name"
                     />
                     <input
                       type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       placeholder="type email"
                     />
                     <input
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       placeholder="type password"
                     />
                     <button type="submit">submit</button>
                  </div>

               
          </form>
          </>
        
     )
}

export default SignUp