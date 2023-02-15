import React from 'react'
import {
  allButtonClicked, 
  evenButtonClicked, 
  oddButtonClicked, 
  smallButtonClicked,
  bigButtonClicked,
 } from './utilityFunctions'

function RenderButtons({setSelectedNumbers}) {
 
  const buttonList = [
    {name: 'All',  onClickHandler: allButtonClicked},
    {name: 'Even',  onClickHandler: evenButtonClicked},
    {name: 'Odd',  onClickHandler: oddButtonClicked},
    {name: 'Small',  onClickHandler:smallButtonClicked},
    {name: 'Big',  onClickHandler:bigButtonClicked},
    {name: 'Clear',  onClickHandler:()=>{ return []}},
  ]
  const handleStateUpdate = (passedFunction)=>{
    const retunedValue = passedFunction()
    setSelectedNumbers(retunedValue)
  }

  return (
    <div>
        {
            buttonList && buttonList.map(( {name, onClickHandler}) =>(
                <button  
                key={ Math.random() }  
                style={{ width:'100px', margin: '20px'}}
                onClick={()=> handleStateUpdate(onClickHandler)}
                >
                  {name}
                </button>
            ))
        }
    </div>
  )
}

export default RenderButtons