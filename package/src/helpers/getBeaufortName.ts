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
    name: 'Violent Storm',
    minSpeed: 28.5
  },
  {
    name: 'Storm',
    minSpeed: 24.5
  },
  {
    name: 'Strong Gale',
    minSpeed: 20.8
  },
  {
    name: 'Gale',
    minSpeed: 17.2
  },
  {
    name: 'Near Gale',
    minSpeed: 13.9,
  },
  {
    name: 'Strong Breeze',
    minSpeed: 10.8,
  },
  {
    name: 'Fresh Breeze',
    minSpeed: 8,
  },
  {
    name: 'Moderate Breeze',
    minSpeed: 5.5,
  },
  {
    name: 'Gentle Breeze',
    minSpeed: 3.4,
  },
  {
    name: 'Light Breeze',
    minSpeed: 1.6,
  },
  {
    name: 'Light Air',
    minSpeed: 0.5,
  },
  {
    name: 'Calm',
    minSpeed: 0,
  },
]

  return beaufortScale.find((wind) => wind.minSpeed <= windSpeed)?.name
}

