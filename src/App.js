import './App.css';
import { Profile } from './profile/Profile';

function App() {
  const fullname="mortadha abidi"
  const bio='loarzklaeznlkfnaeznfazenfnaze neaznezljnfjazne'
  let myfunction=()=>(alert(fullname))
  const obj={color:"red",border:"20px",borderColor:"red",borderStyle: "solid"}
  return (
    <div className="App" style={obj} >
      <Profile fullname={fullname} bio={bio} myfunction={myfunction} obj={obj}>
        
        <img src="https://th.bing.com/th/id/OIP.mNVDFhnN5fXh7Ebg8SRItgAAAA?w=190&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt=""/>
      
      </Profile>
      
    </div>
  );
}

export default App;
