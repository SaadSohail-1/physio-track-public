import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setResult } from '../features/quiz/quizSlice'; // Keep this for the result page
import { decisionTree } from '../data/decisionTree';

function QuizQuestions() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1.GET DATA
  // This looks up the body part in your new decisionTree.js file
  const data = decisionTree[id];

  // STATE MANAGEMENT
  const [selectedSubRegion, setSelectedSubRegion] = useState(null); // 'shoulder', 'elbow', etc.
  const [diseaseIndex, setDiseaseIndex] = useState(0); 
  const [questionIndex, setQuestionIndex] = useState(0);
  const [yesCount, setYesCount] = useState(0);

  // CASE 0: DATA MISSING (Safety Check)
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold text-gray-400">Content Not Ready</h2>
          <p className="text-gray-500 mb-6">We haven't added the clinical logic for <b>{id}</b> yet.</p>
          <button onClick={() => navigate('/quiz')} className="text-blue-600 underline">Go Back</button>
        </div>
      </div>
    );
  }

  // CASE 1: SUB-REGION SELECTION (The "Skip" Logic)
  // If the data is an object with "subRegions: true", and we haven't picked one yet...
  if (data.subRegions && !selectedSubRegion) {
    const regions = Object.keys(data.regions); // ["shoulder", "elbow", "wrist"]
    
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">Pinpoint Your Pain</h2>
          <p className="text-gray-500 mb-8">Select the specific area that hurts to skip unrelated questions.</p>
          
          <div className="grid grid-cols-1 gap-4">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedSubRegion(region)}
                className="p-5 bg-white text-blue-700 font-bold rounded-xl border-2 border-blue-50 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all capitalize shadow-sm"
              >
                {region}
              </button>
            ))}
          </div>
          
          <button onClick={() => navigate('/quiz')} className="mt-8 text-gray-400 text-sm hover:text-gray-600 underline">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // DETERMINE THE LIST OF DISEASES TO CHECK
  // If it has sub-regions, grab the specific array (e.g., regions.shoulder).
  // If it's a simple array (like Neck), just use 'data' directly.
  const currentPath = data.subRegions ? data.regions[selectedSubRegion] : data;

  // CASE 2: END OF QUIZ (No Diagnosis Found)
  if (!currentPath || diseaseIndex >= currentPath.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl text-center">
          <div className="text-5xl mb-4">🤔</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Complex Symptoms</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your answers didn't match a specific clinical pattern in our database. 
            We recommend starting with a general mobility routine.
          </p>
          <button 
            onClick={() => {
              dispatch(setResult("general_mobility")); 
              navigate("/results");
            }} 
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            View General Plan
          </button>
        </div>
      </div>
    );
  }

  // CASE 3: QUESTIONING LOGIC
  const currentDisease = currentPath[diseaseIndex];
  const currentQuestionText = currentDisease.questions[questionIndex];

  const handleAnswer = (isYes) => {
    let newYes = isYes ? yesCount + 1 : yesCount;
    setYesCount(newYes);

    const questionsAsked = questionIndex + 1;
    const questionsRemaining = currentDisease.questions.length - questionsAsked;

    // RULE 1: EARLY EXIT (Impossible to win)
    // If (current Yes + remaining questions) < threshold, we can't possibly reach the threshold.
    if (newYes + questionsRemaining < currentDisease.threshold) {
      nextDisease();
      return;
    }

    // RULE 2: FINISHED QUESTIONS FOR THIS DISEASE
    if (questionsRemaining === 0) {
      if (newYes >= currentDisease.threshold) {
        // SUCCESS: Diagnosis Found!
        dispatch(setResult(currentDisease.id));
        navigate(`/results`);
      } else {
        // FAIL: Move to next disease
        nextDisease();
      }
    } else {
      // RULE 3: NEXT QUESTION
      setQuestionIndex(questionIndex + 1);
    }
  };

  const nextDisease = () => {
    setDiseaseIndex(diseaseIndex + 1);
    setQuestionIndex(0);
    setYesCount(0);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-6 font-sans flex items-center justify-center'>
      <div className='max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative'>
        
        {/* Header */}
        <div className='mb-8 flex justify-between items-end border-b border-gray-100 pb-4'>
          <div>
            <span className='text-xs font-bold text-blue-500 uppercase tracking-widest'>Assessment</span>
            <h2 className='text-xl font-bold text-gray-900 capitalize'>
              {selectedSubRegion || id}
            </h2>
          </div>
          <div className="text-xs text-gray-400">
             Checking Condition {diseaseIndex + 1} of {currentPath.length}
          </div>
        </div>

        {/* Question Text */}
        <h3 className='text-xl md:text-2xl font-semibold text-gray-800 mb-10 leading-relaxed min-h-[80px]'>
          {currentQuestionText}
        </h3>

        {/* Yes/No Buttons */}
        <div className='grid grid-cols-2 gap-4'>
          <button
            onClick={() => handleAnswer(true)}
            className='py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-md hover:shadow-blue-200 transform active:scale-95 duration-100'
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className='py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition transform active:scale-95 duration-100'
          >
            No
          </button>
        </div>

        {/* Exit Link */}
        <div className="mt-8 text-center">
             <button onClick={() => navigate('/quiz')} className="text-gray-400 text-sm hover:underline">Exit Assessment</button>
        </div>

      </div>
    </div>
  );
}

export default QuizQuestions;