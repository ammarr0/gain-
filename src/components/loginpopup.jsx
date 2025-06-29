import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const LoginModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/auth/log-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                toast.success(data.message || 'Login successful!');
                Cookies.set('access_token', data.access_token, { expires: 7 });
                setIsModalVisible(false);
                if (data.user.role === 'COMPANY' || data.user.role === 'USER') {
                    navigate("/consultingfirm/home/");
                } else if (data.user.role === 'CUSTOMER_SUPPORT') {
                    navigate("/client/dashboard");
                } else if (data.user.role === 'INDIVIDUAL_TALENT') {
                    navigate("/talent/home");
                }
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message || response.statusText);
                toast.error(errorData.message || 'Login successful!');
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