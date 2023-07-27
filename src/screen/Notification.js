import React, { useEffect, useState } from 'react'
import {Text, View,StyleSheet,Dimensions,Image} from 'react-native'
import PageLoader from '../components/PageLoader'
import image1 from '../images/image1.jpg'
const Hp = Dimensions.get('window').height;
const Wp = Dimensions.get('window').width;
export default function Notification(){
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
          <View style={styles.Container}>
            <View style={styles.imageView}>
              <Image source={image1} style={styles.image}/>
            </View>
            <View style={styles.text}>

            </View>
          </View>
          </>
        }
      </>
    )
}
const styles=StyleSheet.create({
  Container:{
   width:Wp,
    height:Hp*.55,
    backgroundColor:'white'
  },
  imageView:{
      flex:1.5,
  },
  image:{
    width:Wp,
    height:Hp*.3
},
  text:{
    flex:1,
   

  }
})