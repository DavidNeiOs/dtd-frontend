interface DataFromBackEnd {
  slug: string
  _id: string
}

export interface tags {
  WIFI: boolean
  OPEN_LATE: boolean
  FAMILY_FRIENDLY: boolean
  VEGETARIAN: boolean
  LICENSED: boolean
}

export interface location {
  address: string
  coordinates: number[]
}

export interface Store {
  name: string
  description: string
  location: location
  tags: string[]
  url: string
}

export type StoreComplete = Store & DataFromBackEnd