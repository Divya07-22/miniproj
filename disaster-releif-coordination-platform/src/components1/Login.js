import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'user@example.com' && password === 'password') {
            navigate('/dashboard');
        } else {
            alert('Invalid login credentials');
        }
    };

    // Inline CSS styles as a JavaScript object
    const styles = {
        loginContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5',
        },
        loginForm: {
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            marginBottom: '1.5rem',
            color: '#333',
        },
        input: {
            width: '100%',
            marginBottom: '1rem',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        button: {
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.loginContainer}>
            <form style={styles.loginForm} onSubmit={handleLogin}>
                <h2 style={styles.heading}>User Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default UserLogin;
