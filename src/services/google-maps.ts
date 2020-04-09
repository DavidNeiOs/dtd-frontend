/**Proxy is needed for `No-access-control-origin` https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141 */
const proxy = "https://cors-anywhere.herokuapp.com/"

export const getAutoCompleteUrl = (searchTerm: string) => {
  const baseUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchTerm}&language=en&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
  return proxy + baseUrl
}

export const getGeocodeUrl = (address: string) => {
  const baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
  return proxy + baseUrl
}

export const getStaticMap = ([lng, lat]: number[]) => {
  const zoom = 14
  const size = '800x150'
  const scale = 2

  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&markers=${lat},${lng}&scale=${scale}`
}