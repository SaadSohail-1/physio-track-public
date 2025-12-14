import {createSlice} from "@reduxjs/toolkit"
// import quizQuestions from "../../data/questions";
// import { createMemoryRouter } from "react-router-dom";

const initialState = {
    currentQuestion: 0,
    answers: [],
    result: null,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        initializeQuiz: (state, action) => {
            const totalQuestions = action.payload;
            state.currentQuestion = 0;
            state.answers = Array(totalQuestions).fill("__EMPTY__");
            state.result = null; 
        },
        selectAnswer : (state, action) => {
            const { questionIndex, category} = action.payload;
            state.answers[questionIndex] = category;

            if(state.currentQuestion < state.answers.length - 1){
                state.currentQuestion += 1
            }
        },
        nextQuestion: (state) => {
            if(state.currentQuestion < state.answers.length-1){
                state.currentQuestion += 1;
            }
        }, 
        prevQuestion: (state) => {
            if (state.currentQuestion > 0) state.currentQuestion -= 1
        }, 
        setResult: (state, action) => {
            state.result = action.payload
        },
        resetQuiz: (state)=>{
            state.currentQuestion = 0;
            state.answers = Array(state.answers.length).fill("__EMPTY__");
            state.result = null;
        },
    }
})

export const {initializeQuiz, selectAnswer, nextQuestion, prevQuestion, setResult, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;