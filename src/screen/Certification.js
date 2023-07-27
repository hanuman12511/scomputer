import React, { useEffect, useState } from 'react'
import {Text} from 'react-native'
import PageLoader from '../components/PageLoader'
export default function Certification(){
    const[loader,setLoader] = useState(true)
    useEffect(()=>{

            setInterval(()=>{
                    setLoader(false)
            },2000)
    },[])
    function Loader(){
        return(<PageLoader/>)
    }
    return(
        <>
        {loader&& Loader() }
        
        <Text>Certification</Text>
        </>
    )
}