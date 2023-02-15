import axios from "axios";
import {useState} from 'react'

const backendURL = 'http://localhost:3000'
async function usePostData(userSelection) {
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')

     const res = await axios({
        method: 'post',
        url: `${backendURL}/checkdraw`,
        data: {
        userSelection
          }
      })
      if (res){
        setResponse(res.data)
      }
      if (res){
        setResponse(res.data)
      }

      return [response, error]
}

export default usePostData