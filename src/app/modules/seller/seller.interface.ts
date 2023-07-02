export type sellerName = {
  firstName: string
  lastName: string
}

export type ISeller = {
  id: string
  name: sellerName
  phoneNumber: string
  address: string
  budget: number
  income: number
}
