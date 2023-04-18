import React, {useState} from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

type LoginForm = {
  userName: string,
  password: string
}

const Login = () => {
  const [loginForm, updateLoginForm] = useState<LoginForm>({
    userName: '',
    password: ''
  })

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) {
      case 'userName':
        updateLoginForm({
          ...loginForm,
          userName: event.currentTarget.value
        })
        break
      case 'password':
        updateLoginForm({
          ...loginForm,
          password: event.currentTarget.value
        })
        break
    }
  }

  return (
    <div id={'login-page'} className={styles.container}>
      <main className={styles.main}>
        <h1>Login</h1>
        <form id={'login'}>
          <label>Username
            <input
              name={'userName'}
              type={'text'}
              placeholder={'Enter username'}
              value={loginForm.userName}
              onChange={handleChange}/>
          </label>
          <label>Password
            <input
              name={'password'}
              type={'password'}
              placeholder={'Enter password'}
              value={loginForm.password}
              onChange={handleChange}/>
          </label>
          <input type={'submit'} value={'Submit'}/>
        </form>
        <Link href='/user/create'>
          <p>Create an user account</p>
        </Link>
      </main>
    </div>
  )
}

export default Login
