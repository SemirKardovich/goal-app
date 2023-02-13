export interface Employee {
  id: string
  firstName: string
  lastName: string
  profilePic?: {
    url: string
  }
  bio: string
  gender: string
  birthDate: string
  email: string
}
