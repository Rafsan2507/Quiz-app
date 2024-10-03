import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface QuizForm {
    title: string;
    duration: number;
    mcqQuestions: MCQQuestion[];
    trueFalseQuestions: TrueFalseQuestion[];
  }
  
  export interface MCQQuestion {
    question: string;
    options: string[];
  }
  
  export interface TrueFalseQuestion {
    question: string;
    answer: string[];
  }
  const initialState: QuizForm = {
    title: "",
    duration: 0,
    mcqQuestions: [],
    trueFalseQuestions: [],

  };
  export const CreateQuizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
      addQuizInfo: (state, action: PayloadAction<QuizForm[]>) => {
        return { ...state, ...action.payload };
      },
    },
});
export default CreateQuizSlice.reducer;
export const { addQuizInfo } = CreateQuizSlice.actions;