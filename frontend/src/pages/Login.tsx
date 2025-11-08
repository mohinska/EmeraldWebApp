import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import AuthForm from '../components/auth/AuthForm';
import GoogleSignInButton from '../components/auth/GoogleSignInButton';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import AuthLink from '../components/auth/AuthLink';
import Separator from '../components/ui/Separator';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Handle login logic here
            console.log('Login attempt:', { email, password });
            // TODO: Implement actual login API call
            // await loginUser(email, password);
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        setIsGoogleLoading(true);
        // Redirect to Google OAuth
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    return (
        <PageLayout>
            <AuthForm title="Sign in">
                <GoogleSignInButton
                    onSignIn={handleGoogleSignIn}
                    isLoading={isGoogleLoading}
                    className="mb-6"
                />

                {/* <Separator color="white" className="mb-6" />

                <form onSubmit={handleSubmit}>
                    <FormField
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        required
                        autoComplete="email"
                    />

                    <FormField
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="32bEaver3"
                        required
                        autoComplete="current-password"
                        containerClassName="mb-6"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        isLoading={isLoading}
                        className="mb-4"
                    >
                        Sign in
                    </Button>
                </form>

                <AuthLink
                    to="/register"
                    text="Don't have an account?"
                    linkText="Register"
                /> */}
            </AuthForm>
        </PageLayout>
    );
};

export default Login;
