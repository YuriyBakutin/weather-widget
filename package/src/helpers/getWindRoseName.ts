export default (deg: number | undefined) => {
  if (deg == undefined) {
    return ''
  }

  const windRoseNames = [
    'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW',
  ]

  const index = Math.floor((deg + 360) / 22.5) % 16

  return windRoseNames[index]
}
