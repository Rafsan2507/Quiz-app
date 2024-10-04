import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Published {
    published: boolean;
  }

  const initialState: Published = {
    published: false
  };
  export const CreatePublishSlice = createSlice({
    name: "publish",
    initialState,
    reducers: {
      publishInfo: (state, action: PayloadAction<Published>) => {
        return { ...state, ...action.payload };
      },
    },
});
export default CreatePublishSlice.reducer;
export const { publishInfo } = CreatePublishSlice.actions;