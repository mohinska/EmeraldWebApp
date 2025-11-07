import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/ui/Button';
import RadioButton from '../components/ui/RadioButton';
import ProgressBar from '../components/ui/ProgressBar';
import Separator from '../components/ui/Separator';

interface Question {
    id: string;
    question: string;
    code?: string;
    options: string[];
    correctAnswer?: number;
}

const InterviewDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, username } = useAuth();
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [timeLeft, setTimeLeft] = useState(654); // 10:54 in seconds
    const [interviewTitle, setInterviewTitle] = useState('Interview #1');

    const questions: Question[] = [
        {
            id: '1',
            question: 'What will this code print?',
            code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
            options: ['2024', '2024', '2024', '2024'],
        },
        // Add more questions as needed
    ];

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // TODO: Handle time up
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswerChange = (value: string) => {
        setSelectedAnswer(value);
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer('');
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer('');
        } else {
            // Navigate to results page
            navigate(`/interview/${id}/results`);
        }
    };

    if (loading) {
        return (
            <DashboardLayout
                username={username}
                sidebarItems={DEFAULT_SIDEBAR_ITEMS}
            >
                <div className="text-white font-pixel">Loading Interview...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout
            username={username}
            sidebarItems={DEFAULT_SIDEBAR_ITEMS}
        >
            <div className="max-w-4xl">
                {/* Header with title, timer, and progress */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-white text-4xl font-heading">{interviewTitle}</h1>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-emerald-green"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-white font-pixel">{formatTime(timeLeft)} left</span>
                        </div>
                        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
                    </div>
                </div>

                <Separator color="white" className="mb-4" />

                <p className="text-white font-pixel mb-8">
                    Prepare for your interview via answering technical questions.
                </p>

                {/* Question */}
                <div className="mb-6">
                    <h2 className="text-white text-2xl font-heading mb-4">
                        {currentQuestion.question}
                    </h2>

                    {currentQuestion.code && (
                        <div className="bg-emerald-dark border border-white rounded p-4 mb-6 shadow-emerald">
                            <pre className="text-emerald-green font-pixel text-sm whitespace-pre-wrap">
                                {currentQuestion.code}
                            </pre>
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-white font-pixel mb-4">Answer</label>
                        <div className="grid grid-cols-2 gap-4">
                            {currentQuestion.options.map((option, index) => (
                                <RadioButton
                                    key={index}
                                    label={option}
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-4 mt-8">
                    <Button
                        variant="gray"
                        size="lg"
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className="flex-1"
                    >
                        Previous
                    </Button>
                    <Button
                        variant="gray"
                        size="lg"
                        onClick={handleNext}
                        className="flex-1"
                    >
                        {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default InterviewDetail;

