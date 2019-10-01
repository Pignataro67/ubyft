export default function mapboxReducer(state = {
  isFetchingMapboxKey: false,
  mapBoxKey: '',
}, action) {
  switch(action.type) {
  case "FETCHING_MAPBOX_KEY":
    return {...state, isFetchingMapboxKey: true}
  case "ADD_MAPBOX_KEY_TO_STATE":
    return {...state, isFetchingMapboxKey: false, mapBoxKey: action.key}
  default:
    return state
  }
}