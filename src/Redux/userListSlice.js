import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList: [],
  userDetails:{}
}

export const userListSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setuserlist: (state, action) => {
        state.userList = action.payload;
    },
    setuserdetails: (state, action) => {
      state.userDetails = action.payload;
    }
  },
})

export const { setuserlist, setuserdetails } = userListSlice.actions

export default userListSlice.reducer