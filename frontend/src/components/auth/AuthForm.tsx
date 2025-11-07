import React from 'react';
import Card from '../ui/Card';
import Separator from '../ui/Separator';

export interface AuthFormProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    children,
    className = '',
}) => {
    return (
        <Card className={className}>
            <h1 className="text-white text-3xl font-bold text-center mb-4 font-heading">
                {title}
            </h1>
            <Separator className="mb-6" />
            {children}
        </Card>
    );
};

export default AuthForm;

