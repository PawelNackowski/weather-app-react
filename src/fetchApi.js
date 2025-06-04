const apiKey = 'q7MhpRuQTjsJqf9Lpi5g1tZ5exETDsyQ';

export const fetchApi = async (location) => {
  const cacheKey = `weather-${location}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    console.log(`📦 Dane z localStorage (${location})`);
    return JSON.parse(cached);
  }

  const API_URL = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`;
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Nie udało się pobrać danych pogodowych');
  }

  const json = await response.json();
  const weatherValues = json.data.values;

  localStorage.setItem(cacheKey, JSON.stringify(weatherValues));
  console.log('🌐 Dane z API i zapisane do localStorage');

  return weatherValues;
};