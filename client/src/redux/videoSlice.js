import {createSlice}  from '@reduxjs/toolkit';

const initialState = {
    currentUser:null,
    loading:false,
    error:false
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    loginStart:(state) =>{
        state.loading = true;
    },
    loginSucess:(state,action) =>{
        state.login = false;
        state.currentUser = action.payload;
    },
    loginFailure:(state) =>{
        state.loading = false;
        state.error = true;
    },
    logout:(state)=>{
        state.currentUser=null;
        state.loading=false;
        state.error=false;
    }
  },
});
export const {loginStart,loginFailure,loginSucess,logout} = videoSlice.actions;

export default videoSlice.reducer;