import React, {useState} from "react";
import styles from '@/styles/Home.module.css'

import type { NewUser } from '@/types/users'

const CreateUser = () => {
  const [createForm, updateCreateForm] = useState<NewUser>({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: '',
  })
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (Object.keys(createForm).indexOf(event.currentTarget.name) !== -1) {
      updateCreateForm({
        ...createForm,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }
  }
  const handleSubmit = () => {
    console.log(createForm)
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Create a new user account</h1>
        <form id={'create-user'} onSubmit={handleSubmit}>
          <label>Username
            <input name={'userName'} type={'text'} value={createForm.userName} onChange={handleChange}/>
          </label>
          <label>First name
            <input name={'firstName'} type={'text'} value={createForm.firstName} onChange={handleChange}/>
          </label>
          <label>Last name
            <input name={'lastName'} type={'text'} value={createForm.lastName} onChange={handleChange}/>
          </label>
          <label>Email
            <input name={'email'} type={'email'} value={createForm.email} onChange={handleChange}/>
          </label>
          <label>Password
            <input name={'password'} type={'password'} value={createForm.password} onChange={handleChange}/>
          </label>
          <label>Verify password
            <input name={'verifyPassword'} type={'password'} value={createForm.verifyPassword} onChange={handleChange}/>
          </label>
          <input title={'submit'} type={'submit'} value={'Create'}/>
        </form>
      </main>
    </div>
  )
}

export default CreateUser
