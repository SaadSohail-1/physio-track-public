import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAnswer, nextQuestion, prevQuestion, setResult } from '../features/quiz/quizSlice'
import questions from '../data/questions'
import resultMapping from '../data/resultMapping'

function Quiz() {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(state => state.quiz.currentQuestion)
  const answers = useSelector(state => state.quiz.answers)
  const result = useSelector(state => state.quiz.result)
  const question = questions[currentQuestion]

  const handleAnswer = (category) => {
    // console.log("Answering question:", currentQuestion, "with category:", category);
    // console.log("Before answer state", answers)
    dispatch(selectAnswer({questionIndex: currentQuestion, category}))
    // console.log("After answer state", answers)
    
  }

  const handleNext = () => {
    if(currentQuestion < questions.length - 1) {
      dispatch(nextQuestion())
    } else { //computes result
      const resultCounts = {};
      answers.forEach(ans => {
        if(ans){
          resultCounts[ans] = (resultCounts[ans] || 0) + 1
        }
      })
      const categories = Object.keys(resultCounts)
      let maxCategory = null
      let maxCount = 0

      categories.forEach(category => {
        if(resultCounts[category] > maxCount){
          maxCount = resultCounts[category];
          maxCategory = category;
        }
      })
      dispatch(setResult(resultMapping[maxCategory]))
    }
  }

  const handlePrev = () => {
    if(currentQuestion > 0) {
      dispatch(prevQuestion())
    }
  }

  if (result) {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-red-500">
      <h2 className="text-3xl font-bold mb-4">Your main problem area:</h2>

      <p className="text-2xl font-semibold text-blue-700">
        {result.label}
      </p>

      <p className="mt-4 text-lg text-gray-700">
        Recommended Plan: {result.plan}
      </p>
      <div className='mt-6'>
        <iframe 
        src={result.video}
        frameborder="0"
        wiidth = "100%"
        height = "315"
        title = "Exercise video"
        allow = "accelerometer; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className='rounded-lg shadow-md'
        ></iframe>
      </div>
    </div>
  );
}

  return (
    <div className='p-8 max-w-xl mx-auto'>
      <h2 className='text-xl font-semibold mb-4'>{question.text}</h2>
      <div className='flex flex-col gap-2'>
        {question.options.map((option, idx) => (
          <button
          key={idx}
          onClick= {() =>{handleAnswer(option.category)}}
          className={`bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-left`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className='flex justify-between mt-6'>
        <button
        onClick= {() => handlePrev()}
        disabled = {currentQuestion===0}
        className='bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50'
        >Previous</button>
        <button
        onClick={() => handleNext()}
        className='bg-blue-600 text-white px-4 py-2 rounded'
        >{currentQuestion === questions.length -1 ? "Submit" : "Next"}</button>
      </div>
      
    </div>
  )
}

export default Quiz
