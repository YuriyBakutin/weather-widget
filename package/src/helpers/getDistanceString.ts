export default (distance: number | undefined) => {
  if (distance == undefined || distance < 0) {
    return {
      distance: 0,
      unit: ''
    }
  }

  if (distance < 1000) {
    return {
      distance: distance.toFixed(0),
      unit: 'm'
    }
  }

  return {
    distance: (distance / 1000).toFixed(1),
    unit: 'km'
  }
}