import { useState,useEffect } from 'react';

import DevContent from '../DevBord/Dev';
import LoadContent from './load-content';

const Loader = () =>{
  
  
  
  const[loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
<div >
   { loading ? (
    <LoadContent/>)
  
  :
   
   (<DevContent/>)}

  </div>)

}

export default Loader