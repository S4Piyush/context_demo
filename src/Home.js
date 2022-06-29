import { useContext } from "react";
import { UserContext } from "./App";

function Home()
{
    const demo = useContext(UserContext);
    return(

        <div>

        <h1>Hello-{demo.name}</h1>
        {/* <h1>Hello-{demo.ron}</h1> */}
        <h1>Name - {demo.name1}</h1>
        <h1>city={demo.ron2}</h1>


        
        </div>



       ) 
    
}
export default Home;
