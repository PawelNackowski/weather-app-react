import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchApi } from '../fetchApi';
import { useRef, useState } from 'react';
import { StyledButtonForm, Header, Image, StyledButtonRefresh, StyledForm, StyledInput, Wrapper, WeatherDetails } from './style';
import Sunny from "./png/10000_clear_large.png";
import {weatherCodes} from './weatherIconMap';

export const Weather = ({defaultLocation}) => {
  const queryClient = useQueryClient();
  const [newValue, setNewValue] = useState(defaultLocation);
  const inputRef = useRef(null);
  const [location, setLocation] = useState(defaultLocation) 

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newValue.trim() === '') return;
      setLocation(newValue.trim());
  }

  const { isLoading, data, error } = useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchApi(location),
    enabled: !!location,
  });

  const refreshWeather = () => {
    if (!location) return;
    localStorage.removeItem(`weather-${location}`);
    queryClient.invalidateQueries(['weather', location]);
  };
  const getWeatherIcon = (code) => {
    if (!weatherCodes) return null;
    const weather = weatherCodes.find(w => w.code === code);
    return weather ? weather.url : null;
  };
  return (
    <div>  
    <Wrapper>
      <StyledForm onSubmit= {onFormSubmit} >
        <StyledInput 
          ref={inputRef}
          value={newValue} 
          onChange={({ target }) => setNewValue(target.value)}
          placeholder='Wpisz miejscowość'
          />
          <StyledButtonForm type="submit">Szukaj</StyledButtonForm>
      </StyledForm>
        
        {isLoading && <p>⏳ Ładowanie pogody...</p>}
        {error && <p>❌ Wystąpił błąd: {error.message}</p>}

      {data && location && (
        <>
      {/* <img src={getWeatherIcon(data.weatherCode)} alt="Pogoda" width={64} height={64} /> */}
      <Image src={Sunny} alt="Pogoda" />
        <Header> 
          {location}
        </Header>
        <WeatherDetails>
          🌡️ {data.temperature} °C 
          💧 {data.humidity} %
          💨 {data.windSpeed} m/s
        </WeatherDetails>
        </>
      )}
      <StyledButtonRefresh onClick={refreshWeather}>🔄 Odśwież dane</StyledButtonRefresh>
      </Wrapper>
    </div>
  );
};
