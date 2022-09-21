import { createSlice } from "@reduxjs/toolkit";

let Usersslice = createSlice({
    name: 'user',
    initialState: {
        users: [{
            id: 1,
            name: 'Alex adams'
        }
        ],
        theme: {
            color: true
        }
    },
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload)
        },
        deleteUser(state, action) {
            state.users = state.users.filter(item => item.id !== action.payload.id)
        },
        editeUser(state, action) {
            console.log(state);
            console.log(action.payload);
        }
    }
})

export let {addUser, deleteUser, editeUser } = Usersslice.actions
export default Usersslice.reducer