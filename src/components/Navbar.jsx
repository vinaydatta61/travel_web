import React from 'react';
import { 
  Plane, 
  Building2, 
  Train, 
  Bus, 
  Car, 
  Palmtree, 
  Luggage,
  ShieldCheck,
  User,
  LogIn,
  Compass
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  bookedTripsCount = 0, 
  onOpenMyTrips, 
  onOpenOffers,
  currentUser,
  onOpenAuth
}) {
  const navItems = [
    { id: 'flights', label: 'Flights', sub: 'IndiGo 6E', icon: Plane },
    { id: 'trains', label: 'Trains', sub: 'ConfirmTkt', icon: Train },
    { id: 'cabs', label: 'Cabs', sub: 'Uber', icon: Car },
    { id: 'buses', label: 'Buses', sub: 'AbhiBus', icon: Bus },
    { id: 'hotels', label: 'Hotels', sub: 'Luxe Stays', icon: Building2 },
    { id: 'holidays', label: 'Holidays', sub: 'Packages', icon: Palmtree },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1d] text-white border-b border-slate-800/80 shadow-sm backdrop-blur-md">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/50">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5 font-medium text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>TravelDeck Integrated Network · Direct API Connect</span>
          </span>
          <span className="hidden md:inline-flex items-center space-x-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Real-time seat & fare synchronization active</span>
          </span>
        </div>
        <div className="flex items-center space-x-5 text-slate-300">
          <span className="font-semibold text-slate-200">INR (₹)</span>
          <span className="h-3 w-px bg-slate-800"></span>
          <button 
            onClick={() => onOpenOffers(true)}
            className="hover:text-white font-medium transition"
          >
            Special Offers & Deals
          </button>
          <span className="h-3 w-px bg-slate-800"></span>
          <span className="text-slate-400">24×7 Hotline: 1800-419-7890</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('flights')} 
            className="flex items-center space-x-3 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:bg-blue-500 transition">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5 leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">TravelDeck</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/60 px-1.5 py-0.5 rounded">
                  Pro
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
                Multi-Modal Travel Infrastructure
              </p>
            </div>
          </div>

          {/* Navigation Pill Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span className="leading-none">{item.label}</span>
                  <span className={`text-[10px] font-normal px-1 rounded ${
                    isActive ? 'bg-blue-700/60 text-blue-100' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.sub}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right User Actions */}
          <div className="flex items-center space-x-3">
            {/* My Trips */}
            <button
              onClick={onOpenMyTrips}
              className="relative flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 hover:text-white transition"
            >
              <Luggage className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">My Trips</span>
              {bookedTripsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {bookedTripsCount}
                </span>
              )}
            </button>

            {/* Profile or Login */}
            {currentUser?.loggedIn ? (
              <button 
                onClick={onOpenAuth}
                className="flex items-center space-x-2.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentUser.firstName?.[0] || 'U'}
                </div>
                <div className="hidden sm:block text-left pr-1">
                  <p className="text-[11px] leading-tight font-bold text-slate-100">{currentUser.firstName}</p>
                  <p className="text-[10px] text-slate-400 font-medium">₹{currentUser.walletBalance?.toLocaleString('en-IN')}</p>
                </div>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Category Bar */}
      <div className="lg:hidden flex items-center justify-around py-2 px-2 bg-slate-950 border-t border-slate-800 text-xs overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-1.5 px-3 rounded-lg transition shrink-0 ${
                isActive ? 'text-white font-bold bg-blue-600' : 'text-slate-400'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[11px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
