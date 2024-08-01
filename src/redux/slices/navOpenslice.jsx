import { createSlice} from "@reduxjs/toolkit";


const initialState={

    drawer:false,
   
}


export  const  navOpenslice=createSlice({
    name:"drawer",
    initialState,
reducers:{
  
   setDrawer: (state)=>{
    state.drawer=!state.drawer


   },
  
    
}
    

})

export const {}=navOpenslice.actions;
export default navOpenslice.reducer