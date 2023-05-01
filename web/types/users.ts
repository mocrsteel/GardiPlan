export type BaseUser = {
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
}

export type User = {
  [Property in keyof BaseUser as string]: string
}

export type NewUser = User & {
  password: string,
  verifyPassword: string,
}

export type LoginUser = {
  userName: string,
  password: string
}

export type DataBaseUser = BaseUser & {
  creationDate: string,
  hashedPassword: string,
  approved: boolean,
}