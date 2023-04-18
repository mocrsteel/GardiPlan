import React, { useState } from 'react'
import Link from 'next/link'

import style from '@/styles/Home.module.css'
import { User } from '@/types/users'

const mockUsers: Array<User> = [
  {
    userName: "johndoe",
    firstName: "John",
    lastName: "Doe",
    email: "John@Doe.com",
  },
  {
    userName: "janedoe",
    firstName: "Jane",
    lastName: "Doe",
    email: "Jane@Doe.com",
  }
]

const AdminPage = () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1>Administrator</h1>
        <Link href='/admin/user-management'>
          <h2>Manage users</h2>
          <h3>Current users</h3>
          {"list of users"}
        </Link>
      </main>
    </div>
  )
}

export default AdminPage
