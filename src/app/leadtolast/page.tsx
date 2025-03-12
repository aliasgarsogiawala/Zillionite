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
      "When you lead as a Leader @ Zillionite"
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
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {!isComplete ? (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                <div 
                  className="bg-[#663399] h-2.5 rounded-full transition-all duration-500"
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
                >
                  <h1 className="text-2xl md:text-3xl font-bold text-[#663399] mb-2">
                    Question {currentQuestion + 1} of {sections.length}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
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
                        className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                          selectedAnswers[currentQuestion] === index 
                            ? 'bg-[#663399] text-white shadow-lg' 
                            : 'bg-purple-50 text-gray-800 hover:bg-purple-100'
                        }`}
                      >
                        <p className="text-lg">{question}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#663399] mb-6 text-center">
                Thank you for completing the survey!
              </h1>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Your leadership profile has been recorded.
              </p>
              
              {!emailSent ? (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#663399] mb-4">Get Your Results by Email</h2>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#663399]"
                    />
                    <button
                      onClick={sendCompletionEmail}
                      className="px-6 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Send Results
                    </button>
                  </div>
                  {emailError && <p className="mt-2 text-red-500">{emailError}</p>}
                </div>
              ) : (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-green-700">
                    Results have been sent to your email! Check your inbox.
                  </p>
                </div>
              )}
              
              <div className="space-y-6 mb-8">
                <h2 className="text-2xl font-semibold text-[#663399]">Your Answers:</h2>
                {Object.entries(selectedAnswers).map(([questionIndex, answerIndex]) => (
                  <div key={questionIndex} className="bg-purple-50 p-4 rounded-lg text-left">
                    <p className="font-medium text-[#663399]">
                      {sections[parseInt(questionIndex)].title}
                    </p>
                    <p className="mt-2">
                      {sections[parseInt(questionIndex)].subQuestions[answerIndex]}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button 
                  onClick={resetSurvey} 
                  className="px-8 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
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
