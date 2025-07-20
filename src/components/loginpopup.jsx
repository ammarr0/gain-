import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const LoginModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch('https://gain-b7ea8e7de810.herokuapp.com/auth/log-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || response.statusText);
                });
            }
        })
        .then(data => {
            console.log('Login successful:', data);
            Cookies.set('access_token', data.access_token, { expires: 7 });
            setIsModalVisible(false);
            toast.success(data.message || 'Login successful!');
            if (data.user.role === 'COMPANY' || data.user.role === 'USER') {
                navigate("/consultingfirm/home/");
            } else if (data.user.role === 'CUSTOMER_SUPPORT') {
                navigate("/client/dashboard");
            } else if (data.user.role === 'INDIVIDUAL_TALENT') {
                navigate("/talent/home");
            }
        })
        .catch(error => {
            console.error('Login failed:', error.message);
            if (error.message.toLowerCase().includes('invalid credentials')) {
                toast.error('Invalid credentials! Please check your email and password.');
            } else {
                toast.error(error.message || 'Login failed! Please check your email and password.');
            }
        });
    };

    return (
        isModalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl w-full max-w-md py-7 text-center shadow-xl relative">
                    {/* Cross Icon at top right */}
                    <button
                        onClick={() => setIsModalVisible(false)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <h2 className="text-2xl font-semibold mb-1">Log In</h2>
                    <p className="text-sm text-blue-600 mb-6 cursor-pointer hover:underline">Log in with your account.</p>
                    <hr className="border-t-2 border-blue-600 mb-6" />

                    <div className="space-y-4 p-6">
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
                            />
                            <button onClick={handleLogin} className="w-full px-4 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Log In
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 px-10">
                        By signing up with us you are agreeing to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        )
    );
};

export default LoginModal;