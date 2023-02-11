import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import RenderButtons from './RenderButtons';
import RenderNumbers from './RenderNumbers';


const backendURL = 'http://localhost:3000'
function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [response, setResponse] = useState('')

  useEffect(()=>{},[])


 const onClickHandler = async()=>{
    const response = await axios({
      method: 'post',
      url: `${backendURL}/checkdraw`,
      data: {
      userSelection: selectedNumbers
        }
    })
    if(response){
      setResponse(response.data) }
    }
;


  console.log(response)
  return (
    <div className="App">

      <RenderNumbers selectedNumbers={selectedNumbers} setSelectedNumbers={setSelectedNumbers}/>
      <RenderButtons setSelectedNumbers={setSelectedNumbers}/>
      <button onClick={onClickHandler}>
        Check Draw
      </button>
      <div>
        <p>{response.message}</p>
      </div>
    </div>
  );
}

export default App;
