export default function searchReducer(state = {
  isFetchingPickupLocation: false,
  isFetchingDropOff: false,
  suggestedPickupLocations: [],
  suggestedDropOffs: [],
    }, action) {
    switch(action.type){
      case "FETCHING_SUGGESTED_PICKUP_LOCATIONS":
        return {...state, isFetchingPickupLocation: true, suggestedPickupLocations: []}
      case "DISPLAY_PICKUP_LOCATIONS":
        return {...state, isFetchingPickupLocation: false, suggestedPickupLocations: action.suggestedPickupLocations}
      case "FETCHING_SUGGESTED_DROPOFFS": 
        return {...state, isFetchingDropOff: true, suggestedDropOffs: []}
      case "DISPLAY_DROPOFFS":
        return {...state, isFetchingDropOff: false, suggestedDropOffs: action.suggestedDropOffs}
      default: 
        return state
    }
  }