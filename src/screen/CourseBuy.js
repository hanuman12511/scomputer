import React, { useEffect, useState } from 'react'
import {Text} from 'react-native'

import PageLoader from '../components/PageLoader'
import ImageSliderComponent from '../components/ImageSliderComponent'
import SearchComponet from '../components/SearchComponent'
import SearchComponent from '../components/SearchComponent'
import ShowAllCoursesTopBarComponent from '../components/ShowAllCoursesTopBarComponent'
export default function CourseBuy(){
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
          <>
          <SearchComponent/>
          <ShowAllCoursesTopBarComponent/>
          <ImageSliderComponent/>
          </>
        }
      </>
    )
}