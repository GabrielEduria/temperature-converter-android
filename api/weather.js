// api/weather.js
export async function getWeather() {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=14.6866&longitude=120.9795&hourly=temperature_2m&timezone=Asia%2FSingapore'
  );
  const data = await response.json();

  // Just take the first hourly temperature as current temp
  const latestTemp = data.hourly.temperature_2m[0];

  return {
    currentTemperature: latestTemp,
    description: 'Sunny', // You can adjust this if API has description
  };
}
