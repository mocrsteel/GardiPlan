import style from '@/styles/Home.module.css'
import { DataBaseUser } from '@/types/users'

const userMockList: Array<DataBaseUser> = [
  {
    userName: "JohnDoe1",
    firstName: "John",
    lastName: "Doe",
    email: "John@doe.com",
    approved: false,
    creationDate: "2023-04-01",
    hashedPassword: "randomPassword1"
  },
  {
    userName: "JaneDoe1",
    firstName: "Jane",
    lastName: "Doe",
    email: "Jane@doe.com",
    approved: true,
    creationDate: "2023-04-01",
    hashedPassword: "randomPassword2"
  }
]

const UserList = (props: {users: Array<DataBaseUser>}) => {
  const users = props.users
  return (
    <ul id='user-list'>
      {
        users.map(user =>
          <li key={user.userName}><b>{user.userName}</b>
            <ul id={'user-' + user.userName}>
              <li>First Name:{'\t\t'}{user.firstName}</li>
              <li>Last Name: {'\t\t'}{user.lastName}</li>
              <li>Email:{'\t\t'}{user.email}</li>
              <li>Created on: {'\t\t'}{user.creationDate}</li>
              <li>Approval status: {user.approved ? 'Approved' : 'Pending'}</li>
            </ul>
          </li>
        )
      }
    </ul>
  )
}

const UserManagementPage = () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1>User Management</h1>
        <p>This section is intended to contain a user management section with the ability to add, remove, approve and modify users.</p>
        <UserList users={userMockList} />
      </main>
    </div>
  )
}

export default UserManagementPage