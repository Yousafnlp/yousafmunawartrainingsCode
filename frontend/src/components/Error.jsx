import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
const nav = useNavigate()
    useEffect(()=>{
        nav('/')

    },[])
  return (
    <div>
    
    
    </div>
  )
}

export default Error
