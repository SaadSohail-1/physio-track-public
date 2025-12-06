import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    currentQuestion: 0,
    answers: [],
    result: null,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        selectAnswer : (state, action) => {
            const {questionIndex, category} = action.payload;
            state.answers[questionIndex] = category
        },
        nextQuestion: (state) => {
            state.currentQuestion += 1;
        }, 
        prevQuestion: (state) => {
            if (state.currentQuestion > 0) state.currentQuestion -= 1
        }, 
        setResult: (state, action) => {
            state.result = action.payload
        },
        resetQuiz: (state)=>{
            state.currentQuestion = 0;
            state.answers = [];
            state.result = null;
        }
    }
})

export const {selectAnswer, nextQuestion, prevQuestion, setResult, resetQuiz} = quizSlice.action;
export default quizSlice.reducer;