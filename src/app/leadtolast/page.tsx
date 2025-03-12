"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadToLast() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sections = [
    { title: "Why do you become a Leader?", subQuestions: [
      "When you find a clear focused vision",
      "When you fit inside your industry's core vision",
      "When you drive the company's vision"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When you do business with a clear target mind",
      "When you do business with all your heart",
      "When you do business with values you hold"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When you take good decisions",
      "When all your bad decisions lead to a good decision",
      "When you can live in both decisions and own complete responsibility with dignity"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When you find the right mentor",
      "When you become a mentor",
      "When you turn failing roles to good year reviews—they seriously LEAD!"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When you have found the right talent",
      "When you can grow the whole team to great heights",
      "When the best talent in the world is ready to work with you"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When your first success is a massive success",
      "When you build a better class, entirely with all the learnings from strings of failures",
      "When you decide to stay relentlessly on the course with success and focus on your end-note"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When your business is a Culture",
      "When your business is a Calling"
    ]},
    { title: "Why do you become a Leader?", subQuestions: [
      "When you registered the name as Zillionite",
      "When you lead as a Leader Zillionite"
    ]}
  ];

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));

    setTimeout(() => {
      if (questionIndex < sections.length - 1) {
        setCurrentQuestion(questionIndex + 1);
      } else {
        setIsComplete(true);
        // Remove automatic email sending here
      }
    }, 500);
  };
  
  const sendCompletionEmail = async () => {
    if (!userEmail || !userEmail.includes('@') || !userEmail.includes('.')) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setEmailError("");
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          answers: selectedAnswers,
          email: userEmail 
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log("Email sent successfully:", data.message);
        setEmailSent(true);
      } else {
        console.error("Failed to send email:", data.message || response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const resetSurvey = () => {
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setIsComplete(false);
    setEmailSent(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 py-12 px-4 pattern-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-200">
          {!isComplete ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-[#663399]">
                  Leadership Assessment
                </h1>
                <span className="px-4 py-2 bg-purple-100 text-[#663399] rounded-lg font-medium">
                  {currentQuestion + 1} of {sections.length}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-10">
                <div 
                  className="bg-[#663399] h-2.5 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${((currentQuestion + 1) / sections.length) * 100}%` }}
                ></div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 border-l-4 border-[#663399] pl-4">
                    {sections[currentQuestion].title}
                  </h2>

                  <div className="space-y-4">
                    {sections[currentQuestion].subQuestions.map((question, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => handleAnswerSelect(currentQuestion, index)}
                        className={`p-6 rounded-xl cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                          selectedAnswers[currentQuestion] === index 
                            ? 'bg-gradient-to-r from-[#663399] to-purple-600 text-white shadow-lg transform scale-[1.02]' 
                            : 'bg-purple-50 text-gray-800 hover:bg-purple-100 hover:shadow-md'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 mt-1 border-2 ${
                          selectedAnswers[currentQuestion] === index 
                            ? 'border-white bg-white/30' 
                            : 'border-[#663399]'
                        }`}>
                          {selectedAnswers[currentQuestion] === index && (
                            <div className="w-3 h-3 bg-white rounded-full m-auto" />
                          )}
                        </div>
                        <p className="text-lg">{question}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="py-8"
            >
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#663399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#663399] mb-4">
                  Thank you for completing the survey!
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Your leadership profile has been recorded. Get detailed insights delivered to your inbox.
                </p>
              </div>
              
              {!emailSent ? (
                <div className="mb-12 bg-purple-50 p-8 rounded-xl border border-purple-100 shadow-sm">
                  <h2 className="text-2xl font-semibold text-[#663399] mb-6">Get Your Results by Email</h2>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#663399] shadow-sm"
                    />
                    <button
                      onClick={sendCompletionEmail}
                      className="px-6 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    >
                      Send Results
                    </button>
                  </div>
                  {emailError && <p className="mt-3 text-red-500 bg-red-50 p-3 rounded-lg">{emailError}</p>}
                </div>
              ) : (
                <div className="mb-12 p-6 bg-green-50 border border-green-200 rounded-xl text-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-green-700 text-lg font-medium">
                    Results have been sent to your email! Check your inbox.
                  </p>
                </div>
              )}
              
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-semibold text-[#663399] mb-6 border-b border-purple-100 pb-3">Your Answers:</h2>
                {Object.entries(selectedAnswers).map(([questionIndex, answerIndex]) => (
                  <div key={questionIndex} className="bg-purple-50 p-6 rounded-xl text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="font-medium text-[#663399] mb-2">
                      {sections[parseInt(questionIndex)].title}
                    </p>
                    <p className="mt-2 text-gray-700 border-l-2 border-purple-300 pl-4">
                      {sections[parseInt(questionIndex)].subQuestions[answerIndex]}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button 
                  onClick={resetSurvey} 
                  className="px-8 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105"
                >
                  Start Again
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
