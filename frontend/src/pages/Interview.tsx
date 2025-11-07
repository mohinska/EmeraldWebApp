import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import PageHeader from '../components/ui/PageHeader';

interface InterviewItem {
    id: string;
    community: string;
    title: string;
    duration: string;
    questionsCount: number;
}

const Interview = () => {
    const { loading, username } = useAuth();
    const navigate = useNavigate();

    const interviews: InterviewItem[] = [
        {
            id: '1',
            community: 'APPS UCU Community mock',
            title: 'Interview 1',
            duration: '1 hour',
            questionsCount: 30,
        },
        {
            id: '2',
            community: 'APPS UCU Community mock',
            title: 'Interview 1',
            duration: '1 hour',
            questionsCount: 30,
        },
        {
            id: '3',
            community: 'APPS UCU Community mock',
            title: 'Interview 1',
            duration: '1 hour',
            questionsCount: 30,
        },
        {
            id: '4',
            community: 'APPS UCU Community mock',
            title: 'Interview 1',
            duration: '1 hour',
            questionsCount: 30,
        },
    ];


    const handleInterviewClick = (interviewId: string) => {
        navigate(`/interview/${interviewId}`);
    };

    if (loading) {
        return (
            <DashboardLayout
                username={username}
                sidebarItems={DEFAULT_SIDEBAR_ITEMS}
            >
                <div className="text-white font-pixel">Loading Interviews...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout
            username={username}
            sidebarItems={DEFAULT_SIDEBAR_ITEMS}
        >
            <div className="max-w-4xl">
                <PageHeader title="Interviews" className="mb-8" />

                <div className="space-y-4">
                    {interviews.map((interview) => (
                        <div
                            key={interview.id}
                            onClick={() => handleInterviewClick(interview.id)}
                            className="border border-white rounded p-4 bg-emerald-gray cursor-pointer hover:bg-opacity-80 transition-colors shadow-emerald"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex-1">
                                    <p className="text-white text-sm font-pixel mb-1">
                                        {interview.community}
                                    </p>
                                    <h3 className="text-white text-xl font-bold font-pixel mb-1">
                                        {interview.title}
                                    </h3>
                                    <p className="text-white text-sm font-pixel">
                                        {interview.duration}
                                    </p>
                                </div>
                                <div className="text-white text-sm font-pixel">
                                    {interview.questionsCount} questions
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Interview;

