export default (city: string) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather'
    + `?q=${city}`
    + '&appid=96b5ee02f283f9e4100e0cd14b088ac8'
    + '&lang=en&units=metric'

  return url
}