const apiKey = 'q7MhpRuQTjsJqf9Lpi5g1tZ5exETDsyQ';

export const fetchApi = async (location) => {
  const cacheKey = `weather-${location}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const API_URL = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}&fields=temperature,humidity,windSpeed,weatherCodeDay`;
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Nie udało się pobrać danych pogodowych');
  }

  const json = await response.json();
  const weatherValues = json.data.values;
  const weatherCode = weatherValues.weatherCodeDay;

  localStorage.setItem(cacheKey, JSON.stringify({ ...weatherValues, weatherCode }));

  return weatherValues;
};