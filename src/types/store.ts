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