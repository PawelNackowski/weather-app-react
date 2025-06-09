import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchApi } from '../fetchApi';
import { useRef, useState } from 'react';
import { StyledForm, Wrapper } from './style';
import {weatherCodes} from './weatherIconMap';

export const Weather = () => {
  const queryClient = useQueryClient();
  const [newValue, setNewValue] = useState('');
  const inputRef = useRef(null);
  const [location, setLocation] = useState(null) 

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
        <input 
          ref={inputRef}
          value={newValue} 
          onChange={({ target }) => setNewValue(target.value)}
          placeholder='Wpisz miejscowość'
          />
          <button type="submit">Szukaj</button>
      </StyledForm>
        
        {isLoading && <p>⏳ Ładowanie pogody...</p>}
        {error && <p>❌ Wystąpił błąd: {error.message}</p>}

      {data && location && (
        <>
      <img src={getWeatherIcon(data.weatherCode)} alt="Pogoda" width={64} height={64} />
        <h1> Pogoda {location}</h1>
        <p>🌡️ Temperatura: {data.temperature} °C</p>
        <p>💧 Wilgotność: {data.humidity} %</p>
        <p>💨 Wiatr: {data.windSpeed} m/s</p> *
        <button onClick={refreshWeather}>🔄 Odśwież dane</button>
        </>
      )}
      </Wrapper>
    </div>
  );
};
