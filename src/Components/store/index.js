import {configureStore} from '@reduxjs/toolkit'
import Usersslice from './features/Users/Usersslice'

export let store = configureStore({
    reducer: {
        users: Usersslice
    }
})