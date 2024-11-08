import React, { useState } from 'react'

export default function GK() {




    const questions = [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "7", isCorrect: true },
            { answerText: "6", isCorrect: false },
          ],
        },
      
        {
          questionText:
            "If the radius of a circle is diminished by 10%, then its area is diminished by:",
      
          answerOptions: [
            { answerText: "10%", isCorrect: false },
            { answerText: "19%", isCorrect: true },
            { answerText: "20%", isCorrect: false },
            { answerText: "30%", isCorrect: false },
          ],
        },
        {
          questionText: "At what time after 4.00 p.m. is the minutes hand of a clock exactly aligned with the hour hand?",
          answerOptions: [
            { answerText: "4:21:49.5", isCorrect: true },
            { answerText: "4:27:49.5", isCorrect: false },
            { answerText: "3:21:49.5", isCorrect: false },
            { answerText: "4:21:44.5", isCorrect: false },
          ],
        },
        {
          questionText: "If (2x-y)=4 then (6x-3y)=?",
          answerOptions: [
            { answerText: "15", isCorrect: false },
            { answerText: "12", isCorrect: true },
            { answerText: "18", isCorrect: false },
            { answerText: "10", isCorrect: false },
          ],
        },
        {
          questionText: "What is the missing number in this series? 8 2 14 6 11 ? 14 6 18 12",
          answerOptions: [
            { answerText: "16", isCorrect: false },
            { answerText: "9", isCorrect: true },
            { answerText: "15", isCorrect: false },
            { answerText: "6", isCorrect: false },
          ],
        },
        {
          questionText: "The two colors seen at the extreme ends of the pH chart are",
          answerOptions: [
            { answerText: "Red and Blue", isCorrect: true },
            { answerText: "Red and Green", isCorrect: false },
            { answerText: "Green and Blue", isCorrect: false },
            { answerText: "Orange and Green", isCorrect: false },
          ],
        },
        {
          questionText: "Complete this Series:- 8 15 24 35 48 63 _?",
          answerOptions: [
            { answerText: "70", isCorrect: false },
            { answerText: "80", isCorrect: true },
            { answerText: "75", isCorrect: false },
            { answerText: "88", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "7", isCorrect: true },
            { answerText: "6", isCorrect: false },
          ],
        },
        {
          questionText: "2 numbers differ by 5.If their product is 336,then the sum of the 2 numbers is:",
          answerOptions: [
            { answerText: "21", isCorrect: false },
            { answerText: "51", isCorrect: false },
            { answerText: "28", isCorrect: false },
            { answerText: "37", isCorrect: true },
          ],
        },
        {
          questionText: "Which one among the following has the largest shipyard in India",
          answerOptions: [
            { answerText: `Kolkata`, isCorrect: false },
            { answerText: "Kochi", isCorrect: true },
            { answerText: "Mumbai", isCorrect: false},
            { answerText: "Visakhapatnam", isCorrect: false },
          ],
        },
        {
          questionText: " If x=y=2z and xyz=256 then what is the value of x?",
          answerOptions: [
            { answerText: "8", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "7", isCorrect: false },
            { answerText: "6", isCorrect: false },
          ],
        },
         
        {
          questionText: "x% of y is y% of ?",
          answerOptions: [
            { answerText: "x/y", isCorrect: false },
            { answerText: "2y", isCorrect: false },
            { answerText: "x", isCorrect: true },
            { answerText: "Can't be determind", isCorrect: false },
          ],
        },
      ];
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
    
      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
  return (
    <div>
      
    </div>
  )
}
