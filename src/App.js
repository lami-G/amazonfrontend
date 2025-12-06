
import { useContext, useEffect } from 'react';
import './App.css';
import { DataContext } from './Components/DataProvider/DataProvider';
import Routering from './Router';
import { Type } from './Utility/actiontype';
import { auth } from './Utility/firebase';
function App() {
  const [{user},dispatch]=useContext(DataContext)
  useEffect(()=>{

auth.onAuthStateChanged((authUser)=>{
if(authUser){



dispatch({type:Type.SET_USER,user:authUser})}
else {
  dispatch({type:Type.SET_USER,user:null})  

}
})


  },[])
 

    return <Routering />;
}
export default App;
