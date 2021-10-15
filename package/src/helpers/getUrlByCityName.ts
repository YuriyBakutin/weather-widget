export default (city: string) => {
  const token = localStorage.getItem('token')
  const url = 'https://api.openweathermap.org/data/2.5/weather'
    + `?q=${city}`
    + `&appid=${token}`
    + '&lang=en&units=metric'

  return url
}
