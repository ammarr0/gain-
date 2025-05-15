import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginModal = () => {
    const [showEmailLogin, setShowEmailLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);
    const navigate = useNavigate();

    const handleEmailLoginClick = () => setShowEmailLogin(true);

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5200/auth/log-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                toast.success(data.message || 'Login successful!');
                setIsModalVisible(false);
                if (data.user.role === 'COMPANY') navigate("/consultingfirm/home/");
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message || response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        isModalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl w-full max-w-md py-7 text-center shadow-xl">
                    <h2 className="text-2xl font-semibold mb-1">Log In</h2>
                    <p className="text-sm text-blue-600 mb-6 cursor-pointer hover:underline">Log in with your account.</p>
                    <hr className="border-t-2 border-blue-600 mb-6" />

                    <div className="space-y-4 p-6">
                        {!showEmailLogin ? (
                            <>
                                {['Google', 'LinkedIn', 'Apple', 'Email'].map((provider, index) => (
                                    <button
                                        key={provider}
                                        onClick={provider === 'Email' ? handleEmailLoginClick : undefined}
                                        className="flex items-center justify-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100"
                                    >
                                        <img
                                            src={`https://www.svgrepo.com/show/${index === 0 ? '475656/google-color' : index === 1 ? '448234/linkedin' : index === 2 ? '303128/apple' : '303161/email'}.svg`}
                                            alt={provider}
                                            className="w-5 h-5 mr-3"
                                        />
                                        Log In with {provider}
                                    </button>
                                ))}
                            </>
                        ) : (
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                                <button onClick={handleLogin} className="w-full px-4 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                    Log In
                                </button>
                            </div>
                        )}
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