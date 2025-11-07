import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/ui/Button';
import ScoreBox from '../components/ui/ScoreBox';
import AnswerReview from '../components/ui/AnswerReview';
import Separator from '../components/ui/Separator';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';

interface QuestionResult {
    id: string;
    question: string;
    code?: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
}

const InterviewResults = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, username } = useAuth();
    const navigate = useNavigate();

    const [interviewTitle, setInterviewTitle] = useState('Interview #1');
    const [timeSpent, setTimeSpent] = useState(654); // 10:54 in seconds
    const [totalTime, setTotalTime] = useState(1800); // 30:00 in seconds
    const [correctAnswers, setCorrectAnswers] = useState(10);
    const [wrongAnswers, setWrongAnswers] = useState(10);
    const [totalQuestions, setTotalQuestions] = useState(20);
    const [questions, setQuestions] = useState<QuestionResult[]>([
        {
            id: '1',
            question: 'What will this code print?',
            code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
            userAnswer: '2024',
            correctAnswer: '2024',
            isCorrect: true,
        },
        // Add more questions as needed
    ]);



    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleBackToInterviews = () => {
        navigate('/interview');
    };

    if (loading) {
        return (
            <DashboardLayout
                username={username}
                sidebarItems={DEFAULT_SIDEBAR_ITEMS}
            >
                <div className="text-white font-pixel">Loading Results...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout
            username={username}
            sidebarItems={DEFAULT_SIDEBAR_ITEMS}
        >
            <div className="max-w-4xl">
                {/* Score Section */}
                <div className="mb-8">
                    <PageHeader title="Score" subtitle={interviewTitle} />
                    <p className="text-white font-pixel mb-6">
                        Completed in {formatTime(timeSpent)} minutes out of {formatTime(totalTime)}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <ScoreBox
                            label="Correct"
                            score={correctAnswers}
                            total={totalQuestions}
                            variant="correct"
                        />
                        <ScoreBox
                            label="Wrong"
                            score={wrongAnswers}
                            total={totalQuestions}
                            variant="wrong"
                        />
                    </div>
                </div>

                {/* Review Test Section */}
                <Section title="Review test" titleClassName="text-4xl">
                    <Separator color="white" className="mb-6" />

                    <div className="space-y-8">
                        {questions.map((question, index) => (
                            <div key={question.id} className="space-y-4">
                                <h3 className="text-white text-xl font-heading">
                                    {index + 1}. {question.question}
                                </h3>

                                {question.code && (
                                    <div className="bg-emerald-dark border border-white rounded p-4 shadow-emerald">
                                        <pre className="text-emerald-green font-pixel text-sm whitespace-pre-wrap">
                                            {question.code}
                                        </pre>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <AnswerReview
                                        label="Your answer"
                                        answer={question.userAnswer}
                                        isCorrect={question.isCorrect}
                                    />
                                    <AnswerReview
                                        label="Correct answer"
                                        answer={question.correctAnswer}
                                        isCorrect={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleBackToInterviews}
                            className="w-full"
                        >
                            Back to Interviews
                        </Button>
                    </div>
                </Section>
            </div>
        </DashboardLayout>
    );
};

export default InterviewResults;

