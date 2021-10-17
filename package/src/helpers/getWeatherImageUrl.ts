export default (iconId: string | undefined) => (
  iconId ? `http://openweathermap.org/img/wn/${iconId}@2x.png` : ''
)