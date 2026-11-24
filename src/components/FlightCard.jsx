import React, { useState } from 'react';
import { 
  Luggage, 
  Utensils, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Check
} from 'lucide-react';

export default function FlightCard({ flight, onSelectFlight }) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedFareType, setSelectedFareType] = useState('saver');

  const flexiPrice = flight.price + 850;

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 overflow-hidden mb-3.5">
      {/* Top Tag Strip */}
      {flight.tag && (
        <div className="bg-slate-50 px-4 py-1.5 border-b border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="font-semibold text-slate-800">{flight.tag}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">{flight.punctuality}</span>
          </div>
          {flight.seatsLeft <= 4 && (
            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
              {flight.seatsLeft} seats left at this price
            </span>
          )}
        </div>
      )}

      {/* Main Flight Info Row */}
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Airline Logo & Name */}
          <div className="md:col-span-3 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden">
              <img 
                src={flight.logo} 
                alt={flight.airline} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80';
                }}
              />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm leading-tight">{flight.airline}</h4>
              <p className="text-xs text-slate-500 font-medium">{flight.flightNumber} · {flight.aircraft}</p>
            </div>
          </div>

          {/* Departure, Duration Line, Arrival */}
          <div className="md:col-span-5 flex items-center justify-between">
            {/* Departure */}
            <div className="text-left">
              <span className="text-xl font-extrabold text-slate-900">{flight.departureTime}</span>
              <p className="text-xs font-bold text-slate-700">{flight.from}</p>
              <p className="text-[10px] text-slate-400">Terminal 3</p>
            </div>

            {/* Trajectory */}
            <div className="flex-1 px-4 text-center">
              <span className="text-xs font-semibold text-slate-500 block mb-1">{flight.duration}</span>
              <div className="relative flex items-center justify-center">
                <div className="h-px w-full bg-slate-300"></div>
                <div className={`w-2 h-2 rounded-full border border-white ${flight.stops === 0 ? 'bg-emerald-600' : 'bg-amber-500'}`}></div>
              </div>
              <span className={`text-[10px] font-bold block mt-1 ${
                flight.stops === 0 ? 'text-emerald-700' : 'text-amber-700'
              }`}>
                {flight.stopDetails}
              </span>
            </div>

            {/* Arrival */}
            <div className="text-right">
              <span className="text-xl font-extrabold text-slate-900">{flight.arrivalTime}</span>
              <p className="text-xs font-bold text-slate-700">{flight.to}</p>
              <p className="text-[10px] text-slate-400">Terminal 2</p>
            </div>
          </div>

          {/* Price & Book CTA */}
          <div className="md:col-span-4 flex items-center justify-between md:justify-end md:space-x-4 border-t md:border-t-0 pt-3 md:pt-0">
            <div className="md:text-right">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                ₹{flight.price.toLocaleString('en-IN')}
              </span>
              <p className="text-[10px] text-slate-400 font-medium">per adult, all taxes included</p>
            </div>

            <button
              onClick={() => onSelectFlight({ ...flight, selectedFareType, currentPrice: selectedFareType === 'flexi' ? flexiPrice : flight.price })}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              BOOK NOW
            </button>
          </div>

        </div>

        {/* Perks & Fare Rules Expand Trigger */}
        <div className="flex flex-wrap items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center space-x-1">
              <Luggage className="w-3.5 h-3.5 text-slate-400" />
              <span>Check-in: <strong>{flight.baggage.checkin}</strong> · Cabin: <strong>{flight.baggage.cabin}</strong></span>
            </span>
            {flight.mealIncluded ? (
              <span className="flex items-center space-x-1 text-emerald-700 font-medium">
                <Utensils className="w-3.5 h-3.5" />
                <span>Complimentary Hot Meal</span>
              </span>
            ) : (
              <span className="text-slate-400">Meals on demand</span>
            )}
            {flight.refundable ? (
              <span className="text-slate-600 font-medium">Partially Refundable</span>
            ) : (
              <span className="text-slate-400">Non-Refundable</span>
            )}
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center space-x-1 text-blue-600 font-bold hover:text-blue-800 transition mt-1 sm:mt-0"
          >
            <span>{showDetails ? 'Hide Details' : 'View Fare Options & Rules'}</span>
            {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expandable Fare Comparison Box */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Saver */}
              <div 
                onClick={() => setSelectedFareType('saver')}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition ${
                  selectedFareType === 'saver'
                    ? 'border-blue-600 bg-blue-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedFareType === 'saver' ? 'border-blue-600' : 'border-slate-300'
                    }`}>
                      {selectedFareType === 'saver' && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                    </div>
                    <span className="font-bold text-xs text-slate-900">IndiGo 6E Saver</span>
                  </div>
                  <span className="font-bold text-xs text-slate-900">₹{flight.price.toLocaleString('en-IN')}</span>
                </div>
                <ul className="text-[11px] text-slate-600 mt-2 space-y-1 pl-6">
                  <li>• Standard 15kg check-in + 7kg cabin baggage</li>
                  <li>• Normal airline cancellation policies apply</li>
                </ul>
              </div>

              {/* Flexi Plus */}
              <div 
                onClick={() => setSelectedFareType('flexi')}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition ${
                  selectedFareType === 'flexi'
                    ? 'border-blue-600 bg-blue-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedFareType === 'flexi' ? 'border-blue-600' : 'border-slate-300'
                    }`}>
                      {selectedFareType === 'flexi' && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                    </div>
                    <span className="font-bold text-xs text-slate-900">IndiGo 6E Flexi Plus</span>
                  </div>
                  <span className="font-bold text-xs text-slate-900">₹{flexiPrice.toLocaleString('en-IN')}</span>
                </div>
                <ul className="text-[11px] text-slate-600 mt-2 space-y-1 pl-6">
                  <li className="text-emerald-700 font-semibold">• Free date change up to 2 hours before departure</li>
                  <li className="text-emerald-700 font-semibold">• Complimentary seat selection & 6E Eats snack combo</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
