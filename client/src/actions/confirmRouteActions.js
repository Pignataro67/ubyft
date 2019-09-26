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
    fetch(`/RailsApi/lyft?pickupLat=${pickupLat}&pickupLong=${pickupLong}&dropoffLat=${dropoffLat}&dropoffLong=${dropoffLong}`)
    .then(res => res.json())
    .then(data => _normalizeLyft(data))
    .then(estimates => dispatch({ type: 'ADD_LYFT_ESTIMATES_TO_STATE', estimates: estimates }))
  };
} 