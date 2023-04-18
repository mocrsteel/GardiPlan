import style from '@/styles/Home.module.css'

const UserManagementPage = () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1>User management</h1>
        <p>This section is intended to contain a user management section with the ability to add, remove, approve and modify users.</p>
      </main>
    </div>
  )
}

export default UserManagementPage