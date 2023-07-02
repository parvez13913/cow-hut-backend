export type BuyerName = {
  firstName: string
  lastName: string
}

export type IBuyer = {
  id: string
  name: BuyerName
  phoneNumber: string
  address: string
  budget: number
  income: number
}
