import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList: [],
  userDetails:{}
}

export const userListSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getuserlist: (state, action) => {
        state.userList = action.payload;
    },
    getuserdetails: (state, action) => {
      state.userDetails = action.payload;
    }
  },
})

export const { getuserlist, getuserdetails } = userListSlice.actions

export default userListSlice.reducer