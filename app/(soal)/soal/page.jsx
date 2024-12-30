'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(() => import('@/components/MainpageStuff/ProgressBar'), {});
const CardJawaban = dynamic(() => import('@/components/MainpageStuff/CardJawaban'), {});

const SoalPage = () => {
  const searchParams = useSearchParams();
  const levelNumber = searchParams.get('level');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progressVal, setProgressVal] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Tracks selected answers

  useEffect(() => {
    if (levelNumber) {
      fetch(`/api/questions?level=${levelNumber}`)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data);
          setCurrentQuestionIndex(0);
          setProgressVal(0); // Reset progress
        });
    }
  }, [levelNumber]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    // Store the selected answer in the local state
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer.id,
    }));

    // Update progress bar
    const nextProgress = ((currentQuestionIndex + 1) / questions.length) * 100;
    setProgressVal(nextProgress);

    // Store the selected answer in the database
    fetch(`/api/answers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionId: currentQuestion.id,
        answerId: answer.id,
        isCorrect: answer.isCorrect,
      }),
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col w-full lg:w-full h-full justify-between space-y-6 py-10">
      {/* Progress Bar */}
      <div className="flex flex-row">
        <ProgressBar progressVal={progressVal} />
      </div>

      {/* Render Current Question */}
      {currentQuestion && (
        <div className="flex flex-col mt-8 gap-3 w-full text-center">
          {/* Question Section */}
          <div className="flex mx-auto flex-row w-[85%] lg:w-[1000px]">
            <h2 className="text-[#414040] text-sm lg:text-2xl mr-auto font-bold subpixel-antialiased capitalize">
              Soal
            </h2>
          </div>
          <div className="flex flex-col mx-auto w-[85%] lg:w-[1000px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
            <div className="ml-1 mt-1 p-4">
              <h2 className="text-[#020202] leading-loose text-xs lg:text-xl font-normal subpixel-antialiased">
                {currentQuestion.content}
              </h2>
            </div>
          </div>

          {/* Answer Section */}
          <div className="flex mx-auto mt-5 flex-row w-[85%] lg:w-[1000px]">
            <h2 className="text-[#414040] text-sm lg:text-2xl mr-auto font-bold subpixel-antialiased capitalize">
              Pilihan Jawaban
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row mx-auto gap-4 p-4 w-[85%] lg:w-[1000px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
            {currentQuestion.answers.map((answer) => (
              <button
                key={answer.id}
                className={`px-4 py-2 rounded-lg font-semibold text-white ${
                  selectedAnswers[currentQuestion.id] === answer.id
                    ? answer.isCorrect
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-[#8B6B61] hover:bg-[#d6aa9d]'
                }`}
                onClick={() => handleAnswerSelection(answer)}
              >
                {answer.content}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex w-full lg:w-[1000px] mx-auto flex-row py-2 lg:py-6 border-t-[1px] mt-3 border-[#7a7777]">
        <div className="w-full flex justify-start">
          <button
            className="flex w-[150px] mx-auto lg:w-[200px] transition-all duration-150 bg-[#8B6B61] hover:bg-[#d6aa9d] px-1 lg:px-2 py-2 lg:py-3 justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl"
            onClick={handleBack}
          >
            <p className="text-[13px] lg:text-[15px] font-bold text-white uppercase">
              Back
            </p>
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="flex w-[150px] mx-auto lg:w-[200px] transition-all duration-150 bg-[#8B6B61] hover:bg-[#d6aa9d] px-1 lg:px-2 py-2 lg:py-3 justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl"
            onClick={handleNext}
          >
            <p className="text-[13px] lg:text-[15px] font-bold text-white uppercase">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoalPage;
