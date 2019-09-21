function _fetchLocations(input) {
  return fetch(`RailsApi/search_locations/${input}`)
  .then(res => res.json())
  .then(locations => locations.predictions)
}
  
function _getLatLong(location) {
  return fetch(`RailsApi/confirm_route/convert_lat_long/${location}`)
  .then(res => res.json())
  .then(addressInfo => addressInfo.results[0].geometry.location)
}
  
function _convertPickupLatLong(location) {
  return (dispatch) => {
    dispatch({type: 'CONVERTING_PICKUP_LAT_LONG'})
    return _getLatLong(location).then(({ lat, long }) => dispatch({type: 'RETRIEVE_PICKUP_LAT_LONG', pickupLat: lat, pickupLong: long}))
  }
}
  
function _convertDropoffLatLong(location) {
  return (dispatch) => {
    dispatch({type: 'CONVERTING_DROPOFF_LAT_LONG'})
    return _getLatLong(location).then(({ lat, long }) => dispatch({type: 'RETRIEVE_DROPOFF_LAT_LONG', dropoffLat: lat, dropoffLong: long}))
  }
}

function _normalizeUber({ prices }) {
  return prices.map(({ display_name, estimate }) => (
    {type: display_name, costEstimate: estimate}
  ))
}
  
function _normalizeLyft({ cost_estimates }) {
  return cost_estimates.map(({ display_name, estimated_cost_cents_min, estimated_cost_cents_max }) => (
    {type: display_name, costEstimate: `${estimated_cost_cents_min / 100} - ${estimated_cost_cents_max / 100}`}
  ))
}

export function fetchPickupLocation(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_PICKUP_LOCATIONS' });
      _fetchLocations(input).then(suggestedPickupLocations => 
      dispatch({ type: 'DISPLAY_PICKUP_LOCATIONS', suggestedPickupLocations }));
  };
}

export function fetchDropOff(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_DROPOFFS' });
      _fetchLocation(input).then(suggestedDropOffs => 
      dispatch({ type: 'DISPLAY_DROPOFFS', suggestedDropoffs }));
  };
}
  
export function convertLatLong(pickupLocation, dropoffLocation) {
  console.log(location)
  return async (dispatch) => {
  await dispatch(_convertPickupLatLong(pickupLocation))
  await dispatch(_convertDropoffLatLong(dropoffLocation))
  }
}
  
export function fetchUberEstimate(pickupLat, pickupLong, dropoffLat, dropoffLong) {
  return (dispatch) => {
    fetch(`RailsApi/uber?pickupLat=${pickupLat}&pickupLong=${pickupLong}&dropoffLat=${dropoffLat}&dropoffLong=${dropoffLong}`)
    .then(res => res.json())
    .then(data => _normalizeUber(data))
    .then(estimates => estimates.reverse().slice(1))
    .then(estimates => dispatch({ type: 'ADD_UBER_ESTIMATES_TO_STATE', estimates: estimates }))
  };
}
  
export function fetchLyftEstimate(pickupLat, pickupLong, dropoffLat, dropoffLong) {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_LYFT_ESTIMATE'});
    fetch(`RailsApi/lyft?pickupLat=${pickupLat}&pickupLong=${pickupLong}&dropoffLat=${dropoffLat}&dropoffLong=${dropoffLong}`)
    .then(res => res.json())
    .then(data => _normalizeLyft(data))
    .then(estimates => dispatch({ type: 'ADD_LYFT_ESTIMATES_TO_STATE', estimates: estimates }))
  };
}

export function getMapboxKey() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_MAPBOX_KEY'});
    fetch("RailsApi/confirm_route/mapbox")
    .then(res => res.text())
    .then(key => dispatch({ type: 'ADD_MAPBOX_KEY_TO_STATE', key }));
  };
}