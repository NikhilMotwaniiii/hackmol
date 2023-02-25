import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import {mapLayout} from '../globalComp/mapLayout'
import { Component } from 'react'

export default class MapCode extends Component {
    render() {
      return (
        <View>
          <MapView
                 
                   provider={PROVIDER_GOOGLE} style={styles.map} customMapStyle={mapLayout}
                  
                  //  showsUserLocation={true} followsUserLocation={true} initialRegion={{...ambsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
                    >
                    
                    {/* {
                      
                      ambsAround.map((amb,index)=>
                        <Marker coordinate={amb} key={index.toString()} >
                            <Image  source={require('../../assets/amb-icon3.png')} style={styles.carsAround} resizeMode="contain"/>
                        </Marker>
                      )
                    } */}
  
  
                   </MapView>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
    map:{
        height: "100%",
        width:"100%"
    }
})