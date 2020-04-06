interface DataFromBackEnd {
  slug: string
  _id: string
}

export interface tags {
  WIFI: Boolean
  OPEN_LATE: Boolean
  FAMILY_FRIENDLY: Boolean
  VEGETARIAN: Boolean
  LICENSED: Boolean
}

export interface Store {
  name: String
  description: String
  tags: tags
  url: String
}

export type StoreComplete = Store & DataFromBackEnd