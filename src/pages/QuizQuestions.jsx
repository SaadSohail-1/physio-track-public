import React, {useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import quizQuestions from '../data/questions';
import { useSelector, useDispatch } from 'react-redux';
import { initializeQuiz, selectAnswer, nextQuestion, prevQuestion, setResult } from '../features/quiz/quizSlice';
import resultMapping from '../data/resultMapping';

function QuizQuestions() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //get current state from redux
  const {currentQuestion, answers} = useSelector(state => state.quiz);
  //get questions for this specific body part
  const currentQuiz = quizQuestions[id];

  useEffect(()=>{
    if(currentQuiz) {
      dispatch(initializeQuiz(currentQuiz.questions.length))
    }
  }, [id, dispatch])
  
  const handleFinish = () => {
    const counts = {};
    answers.forEach(ans => {
      if(ans && ans!== "__EMPTY__"){
        counts[ans] = (counts[ans] || 0) + 1 ;
      }
    })
    let winnerKey = null
    let maxCount = 0

    Object.keys(counts).forEach(key => {
      if(counts[key] > maxCount){
        maxCount = counts[key];
        winnerKey = key
      }
    })
    // const finalResult = winnerKey ? resultMapping[winnerKey] : resultMapping["general_mobility"]
    dispatch(setResult(winnerKey))
    navigate("/results")
  }
  
  
  //getting one question to display
  const currentQData = currentQuiz.questions[currentQuestion];
  const isLastQuestion = currentQuestion === currentQuiz.questions.length - 1;

  if (!currentQuiz) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-red-500">Topic not found</h2>
        <Link to="/quiz" className="text-blue-500 underline">Go back</Link>
      </div>
    )
  }

  return (
    <div className='p-8 max-w-xl mx-auto'>
      <div className='mb-4 text-sm text-gray-500'>
        Question {currentQuestion + 1} of {currentQuiz.questions.length}
      </div>
      <h2 className='text-xl font-bold mb-6'>{currentQData.text}</h2>
      {/* options */}
      <div className='flex flex-col gap-3'>
        {currentQData.options.map((option, idx) => (
          <button
          key={idx}
          onClick={() => dispatch(selectAnswer({
            questionIndex: currentQuestion,
            category: option.category
          }))}
          className={`px-4 py-3 text-left border rounded-lg transition-colors ${answers[currentQuestion] === option.category ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-blue-50 bg-white'}`}
          >{option.label}</button>
        ))}
      </div>
      <div className='flex justify-between mt-8'>
        <button
        onClick={() => dispatch(prevQuestion())}
        disabled = {currentQuestion === 0}
        className='px-4 py-2 text-gray-600 disabled:opacity-30'
        >Previous</button>

        <button
        onClick={handleFinish}
        disabled = {answers[currentQuestion]==="__EMPTY__"}
        className='px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50'
        >See Diagnosis</button>

        <button
        onClick={() => dispatch(nextQuestion())}
        disabled= {isLastQuestion}
        className='px-6 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50'
        >Next</button>
      </div>
    </div>
  )
}

export default QuizQuestions
