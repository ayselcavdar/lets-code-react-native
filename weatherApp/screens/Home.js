import React, {useState, useEffect} from 'react';
import {Card, Title} from 'react-native-paper';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './Header';

const Home = (props) => {
  const [info, setInfo] = useState({
    name: 'loading...',
    temp: 'loading...',
    pressure: 'loading...',

    desc: 'loading...',
    icon: 'loading...',
  });

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    let MyCity = await AsyncStorage.getItem('newcity');
    if (!MyCity) {
      const {city} = props.route.params;
      MyCity = city;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=e4cac56d7cc4066d103bbeab1cc594a0&units=metric`,
    )
      .then((data) => data.json())
      .then((results) => {
        setInfo({
          name: results.name,
          temp: results.main.temp,
          pressure: results.main.pressure,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  if (props.route.params.city !== 'london') {
    getWeather();
  }
  return (
    <View style={{flex: 1}}>
      <Header name="Weather App" />
      <View style={{alignItems: 'center'}}>
        <Title style={{color: '#4A8DB7', marginTop: 30, fontSize: 30}}>
          {info.name}
        </Title>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={{
            uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
          }}
        />
      </View>
      <Card style={{margin: 5, padding: 12}}>
        <Title style={{color: '#4A8DB7'}}>Temperature = {info.temp}°C</Title>
      </Card>

      <Card style={{margin: 5, padding: 12}}>
        <Title style={{color: '#4A8DB7'}}>
          {' '}
          Pressure = {info.pressure} mBar
        </Title>
      </Card>

      <Card style={{margin: 5, padding: 12}}>
        <Title style={{color: '#4A8DB7'}}>Description = {info.desc}</Title>
      </Card>
    </View>
  );
};

export default Home;

{
  /*
   {"base": "stations",
    "clouds": {"all": 89},
    "cod": 200, 
    "coord": {"lat": 51.51, "lon": -0.13},
    "dt": 1605811918,
    "id": 2643743,
    "main": {"feels_like": 3.23,
    "humidity": 66,
    "pressure": 1033,
    "temp": 6.89,
    "temp_max": 9,
    "temp_min": 6.11},
    "name": "London",
    "sys": {"country": "GB", "id": 1414, "sunrise": 1605770763, "sunset": 1605801975, "type": 1},
    "timezone": 0,
    "visibility": 10000,
    "weather": [{"description": "overcast clouds", "icon": "04n", "id": 804, "main": "Clouds"}],
    "wind": {"deg": 280, "speed": 2.6}}
  */
}
