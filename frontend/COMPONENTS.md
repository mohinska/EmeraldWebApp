# Компоненти - Структура та використання

## Структура компонентів

```
src/components/
├── ui/                    # Базові UI компоненти
│   ├── Button.tsx        # Універсальна кнопка
│   ├── Input.tsx         # Поле вводу
│   ├── FormField.tsx     # Поле форми (label + input)
│   ├── Card.tsx          # Контейнер-картка
│   ├── Separator.tsx     # Роздільник (лінія)
│   └── index.ts          # Barrel export
│
├── auth/                  # Компоненти автентифікації
│   ├── GoogleSignInButton.tsx  # Кнопка входу через Google
│   ├── AuthLink.tsx            # Посилання в формах автентифікації
│   ├── AuthForm.tsx            # Контейнер форми автентифікації
│   └── index.ts                # Barrel export
│
├── layout/                # Компоненти layout
│   ├── PageLayout.tsx    # Базовий layout сторінки
│   └── index.ts          # Barrel export
│
└── Header.tsx            # Заголовок сторінки
```

## UI Компоненти

### Button
Універсальна кнопка з варіантами стилізації.

```tsx
import { Button } from '../components/ui';

<Button
  variant="primary" | "secondary" | "outline"
  size="sm" | "md" | "lg"
  fullWidth={boolean}
  isLoading={boolean}
  onClick={handleClick}
>
  Click me
</Button>
```

### Input
Поле вводу з підтримкою label, error та helper text.

```tsx
import { Input } from '../components/ui';

<Input
  label="Email"
  type="email"
  placeholder="example@gmail.com"
  error="Error message"
  helperText="Helper text"
  required
/>
```

### FormField
Поле форми, яке об'єднує label та input.

```tsx
import { FormField } from '../components/ui';

<FormField
  name="email"
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  containerClassName="mb-6"  // Для кастомних відступів
/>
```

### Card
Контейнер-картка для контенту.

```tsx
import { Card } from '../components/ui';

<Card padding="sm" | "md" | "lg">
  Content here
</Card>
```

### Separator
Роздільник (горизонтальна або вертикальна лінія).

```tsx
import { Separator } from '../components/ui';

<Separator
  variant="horizontal" | "vertical"
  color="green" | "gray"
/>
```

## Auth Компоненти

### GoogleSignInButton
Кнопка для входу через Google OAuth.

```tsx
import { GoogleSignInButton } from '../components/auth';

<GoogleSignInButton
  onSignIn={handleGoogleSignIn}
  isLoading={isLoading}
/>
```

### AuthLink
Посилання для навігації в формах автентифікації.

```tsx
import { AuthLink } from '../components/auth';

<AuthLink
  to="/register"
  text="Don't have an account?"
  linkText="Register"
/>
```

### AuthForm
Контейнер для форми автентифікації з заголовком та роздільником.

```tsx
import { AuthForm } from '../components/auth';

<AuthForm title="Sign in">
  {/* Form content */}
</AuthForm>
```

## Layout Компоненти

### PageLayout
Базовий layout для сторінок з header та центрованим контентом.

```tsx
import { PageLayout } from '../components/layout';

<PageLayout showHeader={true}>
  {/* Page content */}
</PageLayout>
```

## Приклад використання

### Login сторінка

```tsx
import React, { useState } from 'react';
import { PageLayout } from '../components/layout';
import { AuthForm, GoogleSignInButton, AuthLink } from '../components/auth';
import { FormField, Button } from '../components/ui';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageLayout>
      <AuthForm title="Sign in">
        <GoogleSignInButton onSignIn={handleGoogleSignIn} />

        <form onSubmit={handleSubmit}>
          <FormField
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormField
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            containerClassName="mb-6"
          />

          <Button type="submit" variant="primary" fullWidth>
            Sign in
          </Button>
        </form>

        <AuthLink
          to="/register"
          text="Don't have an account?"
          linkText="Register"
        />
      </AuthForm>
    </PageLayout>
  );
};
```

## Best Practices

1. **Використовуйте TypeScript** - всі компоненти типізовані
2. **Перевикористання** - використовуйте базові компоненти для створення складніших
3. **Accessibility** - компоненти підтримують ARIA атрибути
4. **Консистентність** - використовуйте однакові стилі через компоненти
5. **Композиція** - компонуйте прості компоненти в складні

## Додавання нових компонентів

1. Створіть файл компонента в відповідній папці (`ui/`, `auth/`, `layout/`)
2. Додайте TypeScript інтерфейси для props
3. Експортуйте компонент та його типи
4. Додайте export в `index.ts` для barrel export
5. Додайте документацію в цей файл

