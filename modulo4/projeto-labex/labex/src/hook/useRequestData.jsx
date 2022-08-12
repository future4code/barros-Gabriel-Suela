import { useState, useEffect } from 'react'
import axios from 'axios'

function useRequestData(url) {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    

    useEffect(()=>{
     setLoading(true)
      axios.get(url)
      .then((res)=>{
        setLoading(false)
        setData(res.data.trips)
      })
      
      .catch((err)=>{
        setLoading(false)
        setError(err)
        console.log(err)
      })
    }, [])


  return [data, loading, error]
    
  
}

export default useRequestData