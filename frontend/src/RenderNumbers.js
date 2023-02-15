import React from 'react'
import './renderNumbers.css'

function RenderNumbers({selectedNumbers, setSelectedNumbers}) {
    const numbers = [0, 1, 2, 3, 4, 5,6, 7, 8, 9]
    const handleNumberSelection = (number)=>{
        let selectedNum = [...selectedNumbers]

        //check if array is empty before checking if numbers are the same to avoid always returning -1;
        if (selectedNum.length === 0){
            selectedNum.push(number)
            setSelectedNumbers(selectedNum.sort());
            return;
        }
       
        if (selectedNum.length > 0){
            const numberIndex = selectedNum.indexOf(number)
            
            //check if number is already present in selectedNumbers array
            if(numberIndex ===-1) {
            selectedNum.push(number)
        }else{
            selectedNum.splice(numberIndex, 1);
        } }
        
        setSelectedNumbers(selectedNum.sort())
       
    }

  return (
    <div>
       <ul style={{listStyle: 'none', display:'flex',  justifyContent:'space-evenly'}}>
       {
         numbers && numbers.map(number=>(
            <li 
                key={ Math.random() } 
                onClick={()=> handleNumberSelection(number)} 
                // style={{fontSize:'30px', backgroundColor:'red', width:'40px', borderRadius:'20px'}}
                className={`number-buttons ${selectedNumbers.indexOf(number) !== -1 ? 'selected': null}`}
            >
                    {number}
            </li>
         ))   
        }
       </ul>
    </div>
  )
}

export default RenderNumbers