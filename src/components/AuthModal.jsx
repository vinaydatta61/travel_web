import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  Phone, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onLoginSuccess, 
  onLogout 
}) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup' | 'otp'
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' | 'email'

  // Form states
  const [phone, setPhone] = useState('9876543210');
  const [email, setEmail] = useState('rahul.sharma@traveldeck.com');
  const [password, setPassword] = useState('••••••••');
  const [firstName, setFirstName] = useState('Rahul');
  const [lastName, setLastName] = useState('Sharma');
  const [otp, setOtp] = useState(['4', '9', '2', '0', '1', '8']);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  // Handle phone OTP submission
  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthMode('otp');
    }, 600);
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const userObj = {
        name: firstName ? `${firstName} ${lastName}` : 'Traveler',
        firstName: firstName || 'Rahul',
        lastName: lastName || 'Sharma',
        email: email || 'user@traveldeck.com',
        phone: `+91 ${phone}`,
        tier: 'TravelDeck Club Elite',
        walletBalance: 2450,
        miles: 3820,
        loggedIn: true
      };
      onLoginSuccess(userObj);
      onClose();
    }, 700);
  };

  // Email login
  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please fill in both email and password');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const userObj = {
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: `+91 ${phone}`,
        tier: 'TravelDeck Club Elite',
        walletBalance: 2450,
        miles: 3820,
        loggedIn: true
      };
      onLoginSuccess(userObj);
      onClose();
    }, 700);
  };

  // Sign up submission
  const handleSignup = (e) => {
    e.preventDefault();
    if (!firstName || !email || !phone) {
      setErrorMsg('Please complete all required fields');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const newUser = {
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        email,
        phone: `+91 ${phone}`,
        tier: 'TravelDeck Explorer',
        walletBalance: 600, // Welcome gift
        miles: 500,
        loggedIn: true
      };
      onLoginSuccess(newUser);
      onClose();
    }, 800);
  };

  // Social login (Google / Apple)
  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const socialUser = {
        name: provider === 'Google' ? 'Rahul Sharma' : 'Apple Traveler',
        firstName: 'Rahul',
        lastName: 'Sharma',
        email: `rahul.${provider.toLowerCase()}@traveldeck.com`,
        phone: '+91 98765 43210',
        tier: 'TravelDeck Club Elite',
        walletBalance: 2450,
        miles: 3820,
        loggedIn: true
      };
      onLoginSuccess(socialUser);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200 text-slate-800">
        
        {/* Modal Top Header with TravelDeck Branding */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-base shadow">
              TD
            </div>
            <span className="text-xl font-black tracking-tight">Travel<span className="text-blue-400">Deck</span></span>
          </div>

          <h3 className="text-lg font-black mt-3">
            {currentUser?.loggedIn 
              ? 'TravelDeck Account & Rewards' 
              : authMode === 'signup' 
                ? 'Create Your TravelDeck Account' 
                : 'Welcome Back to TravelDeck'}
          </h3>
          <p className="text-xs text-blue-200 mt-0.5">
            {currentUser?.loggedIn 
              ? 'Manage personal profile, rewards & verified travel perks' 
              : 'Unlock exclusive member fares, free baggage & instant booking'}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          
          {/* If already logged in: View profile card and logout option */}
          {currentUser?.loggedIn ? (
            <div className="space-y-5">
              <div className="flex items-center space-x-4 p-4 bg-blue-50/70 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-xl flex items-center justify-center shadow-md">
                  {currentUser.firstName?.[0]}{currentUser.lastName?.[0]}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-extrabold text-base text-slate-900">{currentUser.name}</h4>
                    <span className="text-[10px] bg-blue-600 text-white font-black px-1.5 py-0.5 rounded-full">
                      PRO
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{currentUser.email}</p>
                  <p className="text-xs text-slate-500">{currentUser.phone}</p>
                </div>
              </div>

              {/* Wallet & Rewards summary */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                    TravelDeck Wallet
                  </span>
                  <p className="text-2xl font-black text-amber-900 mt-0.5">
                    ₹{currentUser.walletBalance?.toLocaleString('en-IN') || '2,450'}
                  </p>
                  <span className="text-[10px] text-amber-600">Usable on all flights</span>
                </div>
                <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-200">
                  <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider">
                    Club Miles
                  </span>
                  <p className="text-2xl font-black text-indigo-900 mt-0.5">
                    {currentUser.miles?.toLocaleString('en-IN') || '3,820'}
                  </p>
                  <span className="text-[10px] text-indigo-600">Tier: Elite Member</span>
                </div>
              </div>

              {/* Account Benefits */}
              <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Seat Selection on all domestic flights</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero convenience fee on TravelDeck Luxe stays</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Priority 24x7 travel concierge hotline</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition"
                >
                  Continue Browsing
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    setAuthMode('login');
                  }}
                  className="py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-bold text-xs rounded-xl transition"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Tab Selector: Login vs Sign Up */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl mb-5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
                  className={`flex-1 py-2 rounded-lg transition ${
                    authMode !== 'signup' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                  className={`flex-1 py-2 rounded-lg transition ${
                    authMode === 'signup' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {errorMsg && (
                <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* === SIGN IN MODE === */}
              {authMode === 'login' && (
                <div className="space-y-4">
                  {/* Phone vs Email Switcher */}
                  <div className="flex items-center justify-between text-xs pb-1">
                    <span className="font-bold text-slate-500">Sign in using:</span>
                    <div className="space-x-3">
                      <button
                        type="button"
                        onClick={() => setLoginMethod('phone')}
                        className={`font-bold transition ${loginMethod === 'phone' ? 'text-blue-600 underline' : 'text-slate-400'}`}
                      >
                        Mobile OTP
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        type="button"
                        onClick={() => setLoginMethod('email')}
                        className={`font-bold transition ${loginMethod === 'email' ? 'text-blue-600 underline' : 'text-slate-400'}`}
                      >
                        Email & Password
                      </button>
                    </div>
                  </div>

                  {loginMethod === 'phone' ? (
                    <form onSubmit={handleRequestOtp} className="space-y-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                          Mobile Number
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-600 text-xs font-bold">
                            +91
                          </span>
                          <input
                            type="tel"
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter 10-digit number"
                            className="flex-1 rounded-r-xl border border-slate-300 px-3 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-600"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-1"
                      >
                        {isLoading ? 'Sending OTP...' : 'CONTINUE WITH OTP'}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleEmailLogin} className="space-y-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
                      >
                        {isLoading ? 'Signing In...' : 'LOG IN'}
                      </button>
                    </form>
                  )}

                  {/* Social Logins */}
                  <div className="pt-2">
                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-slate-200"></div>
                      <span className="flex-shrink mx-2 text-[10px] text-slate-400 uppercase font-bold">Or continue with</span>
                      <div className="flex-grow border-t border-slate-200"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => handleSocialLogin('Google')}
                        className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center justify-center space-x-2 transition"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span>Google</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSocialLogin('Apple')}
                        className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center justify-center space-x-2 transition"
                      >
                        <svg className="w-4 h-4 fill-slate-900" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.07-1.85.95-2.94-.94.04-2.07.63-2.73 1.41-.58.67-1.1 1.76-.96 2.83 1.05.08 2.11-.53 2.74-1.3"/>
                        </svg>
                        <span>Apple</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* === OTP VERIFICATION SCREEN === */}
              {authMode === 'otp' && (
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900">Enter Verification Code</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      We sent a 6-digit OTP to <strong>+91 {phone}</strong>
                    </p>
                  </div>

                  <div className="flex justify-center space-x-2 my-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength={1}
                        value={digit}
                        readOnly
                        className="w-10 h-12 text-center text-lg font-black bg-slate-50 border-2 border-blue-500 rounded-xl focus:outline-none"
                      />
                    ))}
                  </div>

                  <p className="text-[11px] text-emerald-600 font-semibold">
                    ✓ Simulated SMS OTP auto-filled: 492018
                  </p>

                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={isLoading}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-md transition"
                  >
                    {isLoading ? 'Verifying...' : 'VERIFY & PROCEED'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-xs text-blue-600 hover:underline font-bold"
                  >
                    Change Mobile Number
                  </button>
                </div>
              )}

              {/* === SIGN UP MODE === */}
              {authMode === 'signup' && (
                <form onSubmit={handleSignup} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Rahul"
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Sharma"
                        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Mobile Number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-600 text-xs font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 rounded-r-xl border border-slate-300 px-3 py-2 text-xs font-semibold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Create Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="p-2.5 bg-blue-50/60 rounded-xl border border-blue-100 text-[11px] text-blue-900 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Bonus:</strong> Receive ₹600 Welcome credits instantly!</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md transition"
                  >
                    {isLoading ? 'Creating Account...' : 'REGISTER ON TRAVELDECK'}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
