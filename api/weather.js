// api/weather.js
export async function getWeather() {
  const API_KEY = '70e1909399564ae9a01213905250206';
  const city = 'Valenzuela';

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    const data = await response.json();

    return {
      currentTemperature: data.current.temp_c,
      description: data.current.condition.text,
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    return null;
  }
}
