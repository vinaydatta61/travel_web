import React, { useState, useEffect } from 'react';
import { Plane, Building2, Sparkles, X } from 'lucide-react';

const RECENT_BOOKINGS = [
  { traveler: 'Aarav M.', from: 'Bengaluru', to: 'Goa', type: 'flight', time: 'Just now' },
  { traveler: 'Pooja S.', from: 'Delhi', to: 'Mumbai', type: 'flight', time: '2m ago' },
  { traveler: 'Rohan K.', hotel: 'Taj Exotica Resort & Spa', city: 'Goa', type: 'hotel', time: '4m ago' },
  { traveler: 'Ananya D.', from: 'Mumbai', to: 'Dubai', type: 'flight', time: '6m ago' },
];

export default function LiveBookingToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_BOOKINGS.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const booking = RECENT_BOOKINGS[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-xs bg-white rounded-2xl shadow-xl border border-slate-200 p-3 flex items-center space-x-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        {booking.type === 'flight' ? <Plane className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
      </div>
      <div className="flex-1 text-xs">
        <p className="font-extrabold text-slate-800 leading-tight">
          {booking.traveler} booked a {booking.type}
        </p>
        <p className="text-[11px] text-slate-500">
          {booking.type === 'flight' ? `${booking.from} → ${booking.to}` : booking.hotel} • {booking.time}
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="text-slate-400 hover:text-slate-600 p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
