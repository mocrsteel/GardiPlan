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

const _testUser: User = {
  userName: 'test',
  firstName: 'test',
  lastName: 'test',
  email: 'test',
  randomValue: 'test'
}