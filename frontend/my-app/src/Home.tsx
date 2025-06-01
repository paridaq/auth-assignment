import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from "react-router-dom";


function Home(){

   const name= localStorage.getItem("name");
 const navigate = useNavigate()


    return(
        <>
        <h1>Welcome to the home page</h1>
        <button onClick={()=>navigate('/signin')}>SignIn</button>
        <button onClick={()=>navigate('/signup')}>signUp</button>
        <h3>hey{name} welcome</h3>

        
        </>
    )
}
export default Home