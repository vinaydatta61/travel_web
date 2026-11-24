import React from 'react';
import { Calendar, TrendingDown } from 'lucide-react';

export default function FareCalendar({ selectedDate, onSelectDate }) {
  const fareDays = [
    { day: 'Mon', date: '23 Nov', fullDate: '2026-11-23', price: 4850 },
    { day: 'Tue', date: '24 Nov', fullDate: '2026-11-24', price: 4499, lowest: true },
    { day: 'Wed', date: '25 Nov', fullDate: '2026-11-25', price: 4620 },
    { day: 'Thu', date: '26 Nov', fullDate: '2026-11-26', price: 5120 },
    { day: 'Fri', date: '27 Nov', fullDate: '2026-11-27', price: 5890 },
    { day: 'Sat', date: '28 Nov', fullDate: '2026-11-28', price: 6250 },
    { day: 'Sun', date: '29 Nov', fullDate: '2026-11-29', price: 5410 },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-sm">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
        <div className="flex items-center space-x-1.5 font-bold text-slate-700">
          <Calendar className="w-3.5 h-3.5 text-blue-600" />
          <span>7-Day Lowest Fare Trend</span>
        </div>
        <span className="text-[11px] text-emerald-700 font-semibold flex items-center space-x-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
          <TrendingDown className="w-3 h-3" />
          <span>Save up to ₹1,750 on mid-week departures</span>
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {fareDays.map((item) => {
          const isSelected = selectedDate === item.fullDate;
          return (
            <button
              key={item.fullDate}
              type="button"
              onClick={() => onSelectDate(item.fullDate)}
              className={`p-2 rounded-lg text-center transition border ${
                isSelected
                  ? 'bg-blue-50/70 border-blue-600 text-blue-900 shadow-sm'
                  : 'bg-slate-50 border-slate-200/80 hover:border-slate-300 text-slate-700'
              }`}
            >
              <span className="text-[10px] text-slate-400 block font-medium">{item.day}, {item.date}</span>
              <span className="text-xs font-bold block mt-0.5">₹{item.price.toLocaleString('en-IN')}</span>
              {item.lowest && (
                <span className="inline-block text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded mt-0.5">
                  Lowest
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
