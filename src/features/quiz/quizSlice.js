import {createSlice} from "@reduxjs/toolkit"
import questions from "../../data/questions";
// import { createMemoryRouter } from "react-router-dom";

const initialState = {
    currentQuestion: 0,
    answers: Array(questions.length).fill(null),
    result: null,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        selectAnswer : (state, action) => {
            const {questionIndex, category} = action.payload;
            state.answers[questionIndex] = category
            if(state.currentQuestion < state.answers.length -1) state.currentQuestion += 1
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
            state.answers = Array(questions.length).fill(null);
            state.result = null;
        }
    }
})

export const {selectAnswer, nextQuestion, prevQuestion, setResult, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;