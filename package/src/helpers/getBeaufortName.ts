export default (windSpeed: number | undefined) => {
  if (windSpeed == undefined) {
    return ''
  }

// See: https://en.wikipedia.org/wiki/Beaufort_scale
const beaufortScale = [
  {
    name: 'Hurricane',
    minSpeed: 32.7
  },
  {
    name: 'Violent storm',
    minSpeed: 28.5
  },
  {
    name: 'Storm',
    minSpeed: 24.5
  },
  {
    name: 'Strong gale',
    minSpeed: 20.8
  },
  {
    name: 'Gale',
    minSpeed: 17.2
  },
  {
    name: 'Near gale',
    minSpeed: 13.9,
  },
  {
    name: 'Strong breeze',
    minSpeed: 10.8,
  },
  {
    name: 'Fresh breeze',
    minSpeed: 8,
  },
  {
    name: 'Moderate breeze',
    minSpeed: 5.5,
  },
  {
    name: 'Gentle breeze',
    minSpeed: 3.4,
  },
  {
    name: 'Light breeze',
    minSpeed: 1.6,
  },
  {
    name: 'Light air',
    minSpeed: 0.5,
  },
  {
    name: 'Calm',
    minSpeed: 0,
  },
]

  return beaufortScale.find((wind) => wind.minSpeed <= windSpeed)?.name
}

