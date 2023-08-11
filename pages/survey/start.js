import React from 'react';
import Question1 from '@/components/question1.js';
import Question2 from '@/components/question2.js';
import Question3 from '@/components/question3.js';
import Question4 from '@/components/question4.js';
import Question5 from '@/components/question5.js';
import Question6 from '@/components/question6.js';
import Question7 from '@/components/question7.js';
import Question8 from '@/components/question8.js';
import Question9 from '@/components/question9.js';

export default function StartPage() {
    const questions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9];
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const CurrentComponent = questions[currentQuestion];
    
    return (
        <>
            <CurrentComponent />
            <button onClick={() => {setCurrentQuestion(currentQuestion + 1)}}>Next Question</button>
        </>
    );
}
