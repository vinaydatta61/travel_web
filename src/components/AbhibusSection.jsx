import React, { useState } from 'react';
import { 
  Bus, 
  Clock, 
  Star, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck
} from 'lucide-react';
import { ABHIBUS_DATABASE } from '../data/buses';

export default function AbhibusSection({ onBookBus }) {
  const [selectedBusId, setSelectedBusId] = useState(null);
  const [deck, setDeck] = useState('lower');
  const [selectedBerths, setSelectedBerths] = useState(['L4']);
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState(0);
  const [selectedDroppingPoint, setSelectedDroppingPoint] = useState(0);

  const handleToggleBerth = (berthId) => {
    setSelectedBerths(prev => 
      prev.includes(berthId) ? prev.filter(b => b !== berthId) : [...prev, berthId]
    );
  };

  return (
    <div className="space-y-4">
      
      {/* AbhiBus Header Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            <span>AbhiBus Official Network · Verified Intercity Fleets</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Volvo Multi-Axle & Luxury AC Sleeper Buses
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Single window sleeper berths, live bus GPS, and 100% money back on bus cancellations.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-rose-600" />
          <span className="font-semibold">AbhiBus Zero Cancellation Policy</span>
        </div>
      </div>

      {/* Bus Listing */}
      <div className="space-y-3.5">
        {ABHIBUS_DATABASE.map(bus => {
          const isExpanded = selectedBusId === bus.id;
          return (
            <div 
              key={bus.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="p-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                      <Bus className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-sm text-slate-900">{bus.operator}</h3>
                        <span className="bg-slate-100 text-slate-800 text-[11px] font-bold px-1.5 py-0.2 rounded flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>{bus.rating}</span>
                        </span>
                        <span className="text-xs text-slate-400">({bus.reviewsCount} reviews)</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{bus.busType}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {bus.badges.map((b, idx) => (
                      <span key={idx} className="bg-slate-50 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded border border-slate-200">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timings */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-3">
                  <div className="md:col-span-8 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-slate-900">{bus.departureTime}</span>
                      <p className="text-xs font-bold text-slate-700">{bus.from}</p>
                    </div>

                    <div className="px-4 text-center">
                      <span className="text-xs text-slate-500 font-medium block">{bus.duration}</span>
                      <div className="h-px w-24 bg-slate-200 mx-auto my-1"></div>
                      <span className="text-[10px] text-slate-400 block">Live Tracking</span>
                    </div>

                    <div className="text-right">
                      <span className="text-xl font-extrabold text-slate-900">{bus.arrivalTime}</span>
                      <p className="text-xs font-bold text-slate-700">{bus.to}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 flex items-center justify-between md:justify-end md:space-x-4 border-t md:border-t-0 pt-3 md:pt-0">
                    <div className="md:text-right">
                      <span className="text-xl font-extrabold text-slate-900">₹{bus.price}</span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        {bus.seatsAvailable} Berths Available
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedBusId(isExpanded ? null : bus.id)}
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center space-x-1"
                    >
                      <span>{isExpanded ? 'Hide Berths' : 'Select Berths'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sleeper Berth Seat Map */}
              {isExpanded && (
                <div className="bg-slate-50 border-t border-slate-200 p-5 space-y-4">
                  
                  {/* Deck Selection & Legend */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 font-bold uppercase text-[10px]">Deck:</span>
                      <div className="flex bg-slate-200 p-0.5 rounded-lg font-bold">
                        <button
                          onClick={() => setDeck('lower')}
                          className={`px-3 py-1 rounded transition text-xs ${
                            deck === 'lower' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                          }`}
                        >
                          Lower Deck
                        </button>
                        <button
                          onClick={() => setDeck('upper')}
                          className={`px-3 py-1 rounded transition text-xs ${
                            deck === 'upper' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                          }`}
                        >
                          Upper Deck
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-slate-600 text-[11px]">
                      <span className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded bg-white border border-slate-300"></div>
                        <span>Available</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded bg-rose-50 border border-rose-300"></div>
                        <span className="text-rose-700 font-semibold">Ladies</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded bg-blue-600"></div>
                        <span className="font-semibold text-blue-600">Selected</span>
                      </span>
                    </div>
                  </div>

                  {/* Berth Grid */}
                  <div className="max-w-lg mx-auto bg-white rounded-xl p-4 border border-slate-200 space-y-2.5">
                    {[1, 2, 3, 4].map(row => {
                      const prefix = deck === 'lower' ? 'L' : 'U';
                      const singleBerth = `${prefix}${row}`;
                      const doubleBerth1 = `${prefix}${row + 4}`;
                      const doubleBerth2 = `${prefix}${row + 8}`;
                      const isLadies = row === 2;

                      return (
                        <div key={row} className="flex items-center justify-between gap-3">
                          <button
                            onClick={() => handleToggleBerth(singleBerth)}
                            className={`w-20 h-10 rounded-lg border font-bold text-xs transition flex flex-col items-center justify-center ${
                              selectedBerths.includes(singleBerth)
                                ? 'bg-blue-600 text-white border-blue-600'
                                : isLadies
                                ? 'bg-rose-50 border-rose-200 text-rose-800'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span>{singleBerth}</span>
                            <span className="text-[9px] font-normal">Single</span>
                          </button>

                          <span className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold">Aisle</span>

                          <div className="flex space-x-1.5">
                            {[doubleBerth1, doubleBerth2].map(bId => (
                              <button
                                key={bId}
                                onClick={() => handleToggleBerth(bId)}
                                className={`w-20 h-10 rounded-lg border font-bold text-xs transition flex flex-col items-center justify-center ${
                                  selectedBerths.includes(bId)
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                }`}
                              >
                                <span>{bId}</span>
                                <span className="text-[9px] font-normal">Sleeper</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer Action */}
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <div>
                      <span className="text-slate-400 font-bold block">Selected Berths:</span>
                      <p className="font-bold text-slate-900">{selectedBerths.join(', ')} · Total: ₹{(bus.price * selectedBerths.length).toLocaleString('en-IN')}</p>
                    </div>

                    <button
                      onClick={() => onBookBus({
                        ...bus,
                        name: `${bus.operator} · ${bus.busType}`,
                        price: bus.price * selectedBerths.length,
                        selectedBerths
                      })}
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm transition"
                    >
                      Confirm Berths
                    </button>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
