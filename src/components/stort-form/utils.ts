export const tags: { [key: string]: string } = {
  WIFI: "Wifi", 
  OPEN_LATE: "Open late", 
  FAMILY_FRIENDLY: "Family friendly",
  VEGETARIAN: "Vegetarian", 
  LICENSED: "Licensed"
}

export const getBooleanObject = (object: object) => {
  return Object.keys(object).reduce((acc, current) => {
    return {
      ...acc,
      [current]: false
    }
  }, {})
}