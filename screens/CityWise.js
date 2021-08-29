import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import Weather from '../components/Weather';
import Search from '../components/Search';

const API_KEY = "0adcf369df62ac2cf865a8e6b1f2789b";

const CityWise = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName){
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
        try
        {
            const response = await fetch(API);
            if(response.status == 200){
                const data = await response.json();
                setWeatherData(data);
            } else{
                setWeatherData(null)
            }
            setLoaded(true)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchWeatherData('Kigali');
    },[])

    if(!loaded){
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray' size={36}/>
            </View>
        )
    } else if (weatherData === null){
        return (
            <View style={styles.container}>
                <Search fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
        </View>
    )
}

export default CityWise

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryText: {
        margin: 20,
        fontSize: 28
    }
  });
