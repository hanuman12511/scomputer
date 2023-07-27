import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default  PageLoader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <View style={[styles.horizontal , styles.bg]}>
    <ActivityIndicator size="large" />
    </View>
   
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  alignItems:'center'  
  },
  bg:{
  
    backgroundColor:'white',
width:200,
height:200,
borderRadius:20}
});

