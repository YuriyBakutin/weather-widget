import State from './state'

export default {
  setLocationsFromLocalStorage() {
    const locations = JSON.parse(localStorage.getItem('locations') ?? '[]')

    State.locations.value = locations
  },

  updateLocationsInLocalStorage() {
    localStorage.setItem('locations', JSON.stringify(State.locations.value))
  },
}