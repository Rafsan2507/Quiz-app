import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Activated {
    activate: string;
  }

  const initialState: Activated = {
    activate: "deactivated"
  };
  export const CreateActivateSlice = createSlice({
    name: "activate",
    initialState,
    reducers: {
      activateInfo: (state, action: PayloadAction<Activated>) => {
        return { ...state, ...action.payload };
      },
    },
});
export default CreateActivateSlice.reducer;
export const { activateInfo } = CreateActivateSlice.actions;