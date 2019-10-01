export default function confirmRouteReducer(state = {
  isConvertingPickupLatLong: false,
  isConvertingDropoffLatLong: false,
  pickupLat: '',
  pickupLong: '',
  dropoffLat: '',
  dropoffLong: '',
}, action) {
  switch(action.type) {
  case "CONVERTING_PICKUP_LAT_LONG":
    return {...state, isConvertingPickupLatLong: true}
  case "RETRIEVE_PICKUP_LAT_LONG":
    return {...state, isConvertingPickupLatLong: false, pickupLatLong: action.pickupLatLong}
  case "CONVERTING_DROPOFF_LAT_LONG":
    return {...state, isConvertingDropoffLatLong: true}
  case "RETRIEVE_DROPOFF_LAT_LONG":
    return {...state, isConvertingDropoffLatLong: false, dropoffLatLong: action.dropoffLatLong}
  default: 
    return state
  }
} 