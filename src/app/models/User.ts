export interface User {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  //age?: number,
  // address?: {
  //   street?: string,
  //   city?: string,
  //   email?: string
  // },
  registered?: Date,
  hide?: boolean

}