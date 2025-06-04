
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchApi } from './fetchApi';
import { useRef, useState } from 'react';

export const Weather = () => {
  const queryClient = useQueryClient();
  const [newValue, setNewValue] = useState("");
  const inputRef = useRef(null);
  const [location, setLocation] = useState(null) 

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newValue .trim() === "")
      return 
    setLocation(newValue.trim());
  }

  const { isLoading, data, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchApi,
    enabled: !!location,
  });

  const refreshWeather = () => {
    localStorage.removeItem('weather-${location}');
    queryClient.invalidateQueries(['weather', location]);
  };

  if (isLoading) return <p>⏳ Ładowanie pogody...</p>;
  if (error) return <p>❌ Wystąpił błąd: {error.message}</p>;

  return (
    <div>
      <form onSubmit= {onFormSubmit} >
        <input 
          ref={inputRef}
          value={newValue} 
          onChange={({ target }) => setNewValue(target.value)}
          placeholder='Wpisz miejscowość'
          />
          <button>Szukaj</button>
      </form>

      {data && location  (
        <>
        <h1>🌍 Pogoda w {location}</h1>
        <p>🌡️ Temperatura: {data.temperature} °C</p>
        <p>💧 Wilgotność: {data.humidity} %</p>
        <p>💨 Wiatr: {data.windSpeed} m/s</p>
        {console.log(newValue)};
        <button onClick={refreshWeather}>🔄 Odśwież dane</button>
        </>
      )}
    </div>
  );
};
