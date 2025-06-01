const apiKey = 'q7MhpRuQTjsJqf9Lpi5g1tZ5exETDsyQ';
export const location = 'Tokyo';

const API_URL = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`;

export const fetchApi = async () => {
  const cached = localStorage.getItem('weatherData');

  if (cached) {
    console.log('📦 Dane z localStorage');
    return JSON.parse(cached);
  }

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Nie udało się pobrać danych pogodowych');
  }

  const json = await response.json();
  const weatherValues = json.data.values;

  // Zapisz do localStorage
  localStorage.setItem('weatherData', JSON.stringify(weatherValues));
  console.log('🌐 Dane z API i zapisane do localStorage');

  return weatherValues;
};