export default (hum: number | undefined, t: number | undefined) => {
  // See: https://en.wikipedia.org/wiki/Dew_point
  if (!hum || !t ||t < 0) {
    return 0
  }

  const a = 17.27
  const b = 237.7
  const rh = hum / 100
  const gamma = (a * t) / (b + t) + Math.log(rh)

  return b * gamma / (a - gamma)
}