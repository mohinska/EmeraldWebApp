import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import AuthForm from '../components/auth/AuthForm';
import GoogleSignInButton from '../components/auth/GoogleSignInButton';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import AuthLink from '../components/auth/AuthLink';
import Separator from '../components/ui/Separator';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [errors, setErrors] = useState<{
        password?: string;
        repeatPassword?: string;
        email?: string;
    }>({});

    const validateForm = (): boolean => {
        const newErrors: typeof errors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (password && password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Repeat password validation
        if (repeatPassword && password !== repeatPassword) {
            newErrors.repeatPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Handle registration logic here
            console.log('Registration attempt:', {
                name,
                surname,
                email,
                password,
            });
            // TODO: Implement actual registration API call
            // await registerUser({ name, surname, email, password });
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        setIsGoogleLoading(true);
        // Redirect to Google OAuth
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        // Clear repeat password error when password changes
        if (errors.repeatPassword) {
            setErrors({ ...errors, repeatPassword: undefined });
        }
    };

    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
        // Clear error when user starts typing
        if (errors.repeatPassword) {
            setErrors({ ...errors, repeatPassword: undefined });
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        // Clear email error when user starts typing
        if (errors.email) {
            setErrors({ ...errors, email: undefined });
        }
    };

    return (
        <PageLayout>
            <AuthForm title="Register">
                <GoogleSignInButton
                    onSignIn={handleGoogleSignIn}
                    isLoading={isGoogleLoading}
                    className="mb-6"
                />

                <Separator color="white" className="mb-6" />

                <form onSubmit={handleSubmit}>
                    <FormField
                        name="name"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Test"
                        required
                        autoComplete="given-name"
                    />

                    <FormField
                        name="surname"
                        label="Surname"
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder="Test"
                        required
                        autoComplete="family-name"
                    />

                    <FormField
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@gmail.com"
                        required
                        autoComplete="email"
                        error={errors.email}
                    />

                    <FormField
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="12345"
                        required
                        autoComplete="new-password"
                        error={errors.password}
                    />

                    <FormField
                        name="repeatPassword"
                        label="Repeat password"
                        type="password"
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
                        placeholder="12345"
                        required
                        autoComplete="new-password"
                        error={errors.repeatPassword}
                        containerClassName="mb-6"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        isLoading={isLoading}
                        className="mb-4"
                    >
                        Create account
                    </Button>
                </form>

                <AuthLink
                    to="/login"
                    text="Already registered?"
                    linkText="Sign in"
                />
            </AuthForm>
        </PageLayout>
    );
};

export default Register;

