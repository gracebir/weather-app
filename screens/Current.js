import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const API_KEY = "0d872bc4b5fec223998f8e7523f1a6a2";
const Current = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Current



const styles = StyleSheet.create({
    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: 36,
      fontWeight: 'bold',
      color: '#e96e50',
    },
    subtitle: {
      fontSize: 24,
      marginVertical: 12,
      marginLeft:7,
      color: '#e96e50',
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFBF6',
      
    },
    loading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    current: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
    },
    currentTemp: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },  
    currentDescription: {
      width: '100%',
      textAlign: 'center',
      fontWeight: '200',
      fontSize: 24,
      marginBottom: 5
    },
    hour: {
      padding: 6,
      alignItems: 'center',
    },
    largeIcon: {
      width: 300,
      height: 250,
    },
    smallIcon: {
      width: 100,
      height: 100,
    },
    extraInfo: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      padding: 10
    },
    info: {
      width: Dimensions.get('screen').width/2.5,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      padding: 10,
      borderRadius: 15,
      justifyContent: 'center'
    },
  });