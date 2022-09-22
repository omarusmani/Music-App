
import {useState, useEffect} from "react";
import './App.css';
import Button from '@mui/material/Button';
import Header from "./components/header";
import Input from "./components/input";
import Switcher from "./components/Switch";
import Slide from "./components/Slide";
import Selector from "./components/Slector";



function App() {
 const [isLoggedIn,setIsLoggedIn]= useState(false);
 const[isToggled,setIsToggled]=useState(false);
 const[Volume,setVolume]=useState(20);
 const[TooLoud,setTooLoud]=useState(false);
 const[quality,setQuality]=useState(["High"])

useEffect(() => {
  console.log(isToggled)
}, [isToggled]);

useEffect(() => {
  console.log(Volume)
}, [Volume]);
useEffect(()=>{
  console.log(TooLoud)
},[TooLoud])

useEffect(() => {
  console.log(quality)
}, [quality]);

 const changeState=(state)=>{
  return !state;
}
const changeVolume=(value)=>{
  console.log(value.target.value)
  if(value.target.value>80){
    setTooLoud(!TooLoud)
  }
  else{ setTooLoud(false)
  }
  setVolume(value.target.value)
}
const changeQuality=(qual)=>{

  let x=qual;
  console.log(x)
  // setQuality(x);
}


  return( 
    <main>
    <Header title="Music Dashboard"/>
    <div className={"App"}>
      {
    isLoggedIn===false?(
      <form className="form">
     <Input  label="Username"/>
     <Input  type="password" label="Password"/>
     <Button 
        className="button" 
        variant="contained"
        onClick={()=>setIsLoggedIn(true)}
     >Login</Button>
    </form>

    ):(
      <div className="dashboard-container">
      <h2>Welcome User!</h2>
      <div className ="Cards">
      <div>
      <Switcher
      state={isToggled} 
      setState={setIsToggled}
      stateChange={changeState}
      title="Online Mode" 
      body="Is this application connected to the internet."
      />    
      </div><div>
      <Slide 
      state={Volume}
      setState={setVolume}
      stateChange={changeVolume}
      title="Master Volume" 
      body="Overrides all other sound settings in this application"
      />   
        </div><div>
       <Selector 
      state={quality} 
      setState={setQuality}
      stateChange={changeQuality}
      title="Sound Quality" 
      body="Manually control the music quality in event of poor connection"
      />
      </div>
      </div>
        {/* this is where cards */}
      <h4>System Notifications</h4>
      {isToggled&&(
        <span>Your application is offline. You won't be able to share or stream music to other devices.</span>
      )}<br/>
       {TooLoud&& <span>Listening to music at a high volume could cause long-term hearing loss.</span>}
        {/* this is where notifications will go */}
      </div>
    )
}
    </div>

  </main>
  );
}

export default App;
