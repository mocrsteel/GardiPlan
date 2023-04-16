import React, {useState} from "react";
import styles from '@/styles/Home.module.css'

type CreateUserForm = {
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  verifyPassword: string
}

const CreateUser = () => {
  const [createForm, updateCreateForm] = useState<CreateUserForm>({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: '',
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Object.keys(createForm).indexOf(event.currentTarget.id) !== -1) {
      console.log(event.currentTarget.id, createForm[event.currentTarget.id])
      updateCreateForm({
        ...createForm,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Create a new user</h1>
        <form id={'create-user'}>
          <label>Username
            <input id={'userName'} type={'text'} value={createForm.userName} onChange={handleChange}/>
          </label>
          <label>First name
            <input id={'firstName'} type={'text'} value={createForm.userName} onChange={handleChange}/>
          </label>
          <label>Last name
            <input id={'lastName'} type={'text'} value={createForm.userName} onChange={handleChange}/>
          </label>
          <label>Email
            <input id={'email'} type={'email'} value={createForm.userName} onChange={handleChange}/>
          </label>
          <label>Password
            <input id={'password'} type={'password'} value={createForm.password} onChange={handleChange}/>
          </label>
          <label>Verify password
            <input id={'verifyPassword'} type={'password'} value={createForm.verifyPassword} onChange={handleChange}/>
          </label>
          <input type={'submit'} value={'Create'} />
        </form>
      </main>
    </div>
  )
}

export default CreateUser
export type { CreateUserForm }

describe('<CreateUser /> in-module testcode', () => {
  it("works!", () => {
    expect(2).to.eq(2)
  })
  it('also fails correctly', () => {
    expect(2).to.eq(1)
  })
})
