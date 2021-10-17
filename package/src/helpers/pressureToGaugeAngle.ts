// https://en.wikipedia.org/wiki/Atmospheric_pressure
const normalPressure = 1013.25 // hPa

// min sea-level pressure = 907 hPa, deviation "-" from the norm = 1013 - 907 = 106
// max sea-level pressure = 1080 hPa, deviation "+" from the norm = 1080 - 1013 = 67
// For expressive indication the dependence of the gaugeAngle is nonlinear.
export default (pressure: number | undefined) => (
  pressure != undefined ? Math.tanh((pressure - normalPressure) / 45) * 170 : 0
)
