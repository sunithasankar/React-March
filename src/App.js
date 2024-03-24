
import './App.css';
import Comp1 from './Example/Comp1.jsx';
import Comp2 from './Example/Comp2.jsx';
import Comp3 from './Example/Comp3.jsx';
import Comp4 from './Example/Comp4.jsx';
import SampleArrays from './SampleArrays.js';


const mycar={
  
model:"Maruthi",
year: "2022",
dealer:"Nixon",
colour:"red"
}

const fruits={
Banana:"Yellow",
Gova:"Green",
Apple:"Red",
Grapes:"Violet",
Orange:"Orange",
}
function App() {
  return (
    <div className="App">
    
      <h1><SampleArrays/></h1>
      
      <Comp4/>
       <h1>   <Comp3/>  </h1> 
      <Comp1 mycar={mycar}/> 
    <Comp2 myfruits={fruits}/>
  
    </div>
  );
}

export default App;
