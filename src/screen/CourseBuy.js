import React, { useEffect, useState } from 'react'
import {Text,View,Image,StyleSheet,Dimensions} from 'react-native'

import PageLoader from '../components/PageLoader'
import ImageSliderComponent from '../components/ImageSliderComponent'
import SearchComponet from '../components/SearchComponent'
import SearchComponent from '../components/SearchComponent'
import ShowAllCoursesTopBarComponent from '../components/ShowAllCoursesTopBarComponent'
import FooterComponent from '../components/FooterComponent'
const W =Dimensions.get('window').width
const H =Dimensions.get('window').height
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
          <View style={styles.couserteg}>
            <Image style={styles.image} source={require('../images/icons/opendoor.png')}/>
              <Text style={styles.Text}> Unlocking The Digital World</Text>
          </View>
          <View style={styles.course} >
            <Text style={styles.Text}>Top It Course</Text>
          </View>
          <FooterComponent/>
          </>
        }
      </>
    )
}

const styles = StyleSheet.create({
  couserteg:{
    width:W,
   
    backgroundColor:'#50DEDE',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:15
  },
  image:{
    width:30,
    height:30,
    marginRight:20
  }
  ,
  Text:{
    color:'#ED0101',
    fontSize:14,
  },
  course:{
    width:W,
    backgroundColor:'#fff',
    flexDirection:'row',
    padding:15,
    marginTop:5
  }
})