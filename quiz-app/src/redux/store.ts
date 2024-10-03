import { configureStore } from "@reduxjs/toolkit";
import { CreateQuizSlice } from "./Quiz/TeacherSlice";


export const store = configureStore({
  reducer: {
    addQuizInfo : CreateQuizSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
