import React, { useEffect, useState } from 'react'
import {Text} from 'react-native'
import PageLoader from '../components/PageLoader'
import {WebView} from 'react-native-webview'
export default function PrivacyPolicy(){
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
         {loader? Loader():
        <WebView
        source={{uri: 'https://github.com/facebook/react-native',}}
        style={{marginTop: 20}}/>
            }
      </>
    )
}