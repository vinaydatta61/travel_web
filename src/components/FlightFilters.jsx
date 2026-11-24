import React from 'react';
import { Filter, RotateCcw, Clock, ShieldCheck } from 'lucide-react';

export default function FlightFilters({ 
  filters, 
  setFilters, 
  onResetFilters 
}) {
  const airlinesList = ['IndiGo', 'Vistara', 'Air India', 'Akasa Air', 'SpiceJet'];

  const handleAirlineToggle = (airline) => {
    setFilters(prev => {
      const exists = prev.airlines.includes(airline);
      return {
        ...prev,
        airlines: exists 
          ? prev.airlines.filter(a => a !== airline) 
          : [...prev.airlines, airline]
      };
    });
  };

  const handleStopsToggle = (stopVal) => {
    setFilters(prev => {
      const exists = prev.stops.includes(stopVal);
      return {
        ...prev,
        stops: exists 
          ? prev.stops.filter(s => s !== stopVal) 
          : [...prev.stops, stopVal]
      };
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-blue-600" />
          <h3 className="font-black text-slate-900 text-sm">Filters</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="flex items-center space-x-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Stops */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
          Stops
        </h4>
        <div className="space-y-2">
          {[
            { val: 0, label: 'Non-stop', sub: 'Fastest' },
            { val: 1, label: '1 Stop', sub: 'Short layover' },
          ].map(s => {
            const isChecked = filters.stops.includes(s.val);
            return (
              <label 
                key={s.val}
                className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleStopsToggle(s.val)}
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className="font-bold">{s.label}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">{s.sub}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Airlines */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
          Airlines
        </h4>
        <div className="space-y-2">
          {airlinesList.map(airline => {
            const isChecked = filters.airlines.includes(airline);
            return (
              <label 
                key={airline}
                className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleAirlineToggle(airline)}
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className="font-bold">{airline}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Max Price Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
            Max Price
          </h4>
          <span className="text-xs font-black text-blue-600">
            ₹{filters.maxPrice.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="4000"
          max="15000"
          step="500"
          value={filters.maxPrice}
          onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
          <span>₹4,000</span>
          <span>₹15,000</span>
        </div>
      </div>

      {/* Refundable Toggle */}
      <div className="pt-2 border-t border-slate-100">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-xs font-bold text-slate-700">Refundable Fares Only</span>
          <input
            type="checkbox"
            checked={filters.refundableOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, refundableOnly: e.target.checked }))}
            className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
          />
        </label>
      </div>

      {/* TravelDeck FareLock Trust Note */}
      <div className="bg-blue-50/80 rounded-2xl p-3 border border-blue-100 text-xs text-blue-900 flex items-start space-x-2">
        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed">
          <strong>TravelDeck FareLock:</strong> Lock this flight fare now for 7 days at just ₹199!
        </p>
      </div>
    </div>
  );
}
