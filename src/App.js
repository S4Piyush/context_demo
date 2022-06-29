import logo from './logo.svg';
import './App.css';
import { useState, createContext } from "react";
import Home from './Home';
import Menu from './Menu';
export  const UserContext = createContext();
var ron1=12;

function App() {

  const[user,setuser]=useState("Cdmi");
  const [user1,setuser1] = useState("piyush");
  

  return (
    <div className="App">

        <UserContext.Provider value={{"name":user,"name1":user1,"ron2":user2}}>

      <Home/>
      <Menu/>

        </UserContext.Provider>

    </div>
  );
}

export default App;
