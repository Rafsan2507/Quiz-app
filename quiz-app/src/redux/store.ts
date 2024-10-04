import { configureStore } from "@reduxjs/toolkit";
import { CreateQuizSlice } from "./Quiz/TeacherSlice";
import { CreatePublishSlice, publishInfo } from "./Quiz/PublishedSlice";


export const store = configureStore({
  reducer: {
    addQuizInfo : CreateQuizSlice.reducer,
    publishInfo: CreatePublishSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
