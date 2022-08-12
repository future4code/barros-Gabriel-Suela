import { useState, useEffect } from 'react'
import axios from 'axios'

function useRequestData(url) {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(undefined)
    const [error, setError] = useState(undefined)
    

    useEffect(()=>{
      axios.get(url)
      .then((res)=>{
        setLoading(true)
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