import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import TextareaField from '../components/ui/TextareaField';
import Button from '../components/ui/Button';
import Separator from '../components/ui/Separator';
import LibraryLink from '../components/ui/LibraryLink';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';

const Coach = () => {
    const { loading, username } = useAuth();
    const [answer, setAnswer] = useState('dfudsbavuisdblvur\neqrvre\nb\nvsfdbsfuvsd;');
    const [currentQuestion, setCurrentQuestion] = useState(
        'Tell me about a time you worked in a team to solve a problem.'
    );

    const libraryLinks = [
        { id: '1', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '2', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '3', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '4', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '5', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '6', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '7', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
        { id: '8', title: 'Notion test prep', url: 'https://notion.so/test-prep' },
    ];


    const handleAnalyseAnswer = () => {
        console.log('Analysing answer:', answer);
        // TODO: Implement AI analysis
    };

    const handleSkipQuestion = () => {
        console.log('Skipping question');
        // TODO: Get next question
        // setCurrentQuestion(nextQuestion);
    };

    if (loading) {
        return (
            <DashboardLayout
                username={username}
                sidebarItems={DEFAULT_SIDEBAR_ITEMS}
            >
                <div className="text-white font-pixel">Loading Coach...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout
            username={username}
            sidebarItems={DEFAULT_SIDEBAR_ITEMS}
        >
            <div className="max-w-4xl">
                {/* Coach Section */}
                <Section title="Coach" className="mb-8" titleClassName="text-4xl">
                    <Separator color="white" className="mb-4" />
                    <p className="text-white font-pixel">
                        Prepare for your oral interview via answering questions and getting feedback from AI. Also look through the links in library section.
                    </p>
                </Section>

                {/* Practice Section */}
                <Section title="Practice" className="mb-8" titleClassName="text-4xl">
                    <Separator color="white" className="mb-4" />

                    <div className="mb-6">
                        <h3 className="text-white text-xl font-pixel mb-4">Question:</h3>
                        <p className="text-white font-pixel text-lg mb-6">
                            {currentQuestion}
                        </p>
                    </div>

                    <TextareaField
                        name="answer"
                        label="Answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        rows={8}
                        containerClassName="mb-6"
                    />

                    <div className="flex gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleAnalyseAnswer}
                            className="flex-1"
                        >
                            Analyse answer
                        </Button>
                        <Button
                            variant="gray"
                            size="lg"
                            onClick={handleSkipQuestion}
                            className="flex-1"
                        >
                            Skip question
                        </Button>
                    </div>
                </Section>

                {/* Library Section */}
                <Section title="Library" titleClassName="text-4xl">
                    <Separator color="white" className="mb-4" />
                    <p className="text-white font-pixel mb-6">
                        Here is some useful info for job interview.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {libraryLinks.map((link) => (
                            <LibraryLink
                                key={link.id}
                                title={link.title}
                                url={link.url}
                            />
                        ))}
                    </div>
                </Section>
                </div>
        </DashboardLayout>
    );
};

export default Coach;

