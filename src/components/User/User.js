import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head/Head'
import NotFound from '../NotFound/NotFound'
import UserHeader from './UserHeader/UserHeader'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStats from './UserStats/UserStats'

const User = () => {

  const {data} = React.useContext(UserContext)

  return (
    <section className="container">
      <Head title="Minha Conta"/>
      <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="estatisticas" element={<UserStats/>}/>
      </Routes>
    </section>
  )
}

export default User
