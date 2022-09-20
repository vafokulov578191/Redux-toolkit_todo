import { Container } from '@mui/system'
import React, { useState } from 'react'
import Userlist from '../important_comp/Userlist'
import Userslice from '../important_comp/UserAdd'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from '../store/features/Users/Usersslice'

const Main = () => {
    let [User, setUser] = useState('')
    const arr = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    let onSubmit = () => {
        if (User.length > 0) {
            dispatch(addUser({ id: Date.now(), name: User }))
        }
    }

    let handleSubmit = (id) => {
        dispatch(deleteUser({ id }))
    }

    return (
        <>
            <Header />
            <Container maxWidth='mx' sx={{ bgcolor: 'white', height: '700px', display: 'flex', flexDirection: 'column' }}>
                <Userslice setUser={setUser} onSubmit={onSubmit} />
                {
                    arr.map(item => <Userlist key={item.id} handleSubmit={handleSubmit} User={item} />)
                }
            </Container>
        </>
    )
}

export default Main