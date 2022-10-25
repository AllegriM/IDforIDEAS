import './App.css'
import { Route, Switch} from "react-router-dom";
import Landing from './Components/Landing/Landing';


function App() {
  return( 
   <div className="App">
<Switch>

<Route exact path='/' element={<Landing/>}/>


</Switch>
  </div>
)}

export default App
