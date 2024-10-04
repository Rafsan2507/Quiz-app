import { configureStore } from "@reduxjs/toolkit";
import { CreateQuizSlice } from "./Quiz/TeacherSlice";
import { CreatePublishSlice, publishInfo } from "./Quiz/PublishedSlice";
import { activateInfo, CreateActivateSlice } from "./Quiz/ActivateSlice";


export const store = configureStore({
  reducer: {
    addQuizInfo : CreateQuizSlice.reducer,
    publishInfo: CreatePublishSlice.reducer,
    activateInfo: CreateActivateSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
