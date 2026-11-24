import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { UBER_CABS_DATABASE, MOCK_UBER_DRIVERS } from '../data/cabs';

export default function UberCabsSection({ onBookRide }) {
  const [selectedRideId, setSelectedRideId] = useState('uber-go');
  const [pickup, setPickup] = useState('Indira Gandhi Intl Airport, Terminal 3');
  const [dropoff, setDropoff] = useState('Connaught Place, Central Delhi');
  const [rideType, setRideType] = useState('now');
  const [paymentMethod, setPaymentMethod] = useState('gpay');

  const [matchingState, setMatchingState] = useState('idle');
  const [matchedDriver, setMatchedDriver] = useState(null);

  const selectedRide = UBER_CABS_DATABASE.find(r => r.id === selectedRideId) || UBER_CABS_DATABASE[0];

  const handleRequestUber = () => {
    setMatchingState('searching');
    setTimeout(() => {
      setMatchedDriver(MOCK_UBER_DRIVERS[0]);
      setMatchingState('matched');
    }, 1500);
  };

  const handleCancelRide = () => {
    setMatchingState('idle');
    setMatchedDriver(null);
  };

  return (
    <div className="space-y-4">
      
      {/* Uber Clean Header Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span>Uber Official Integration · On-Demand City & Airport Transfers</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Reliable Airport & City Cabs with Upfront Guaranteed Pricing
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Top-rated drivers, dedicated airport pickup lanes, and live GPS journey monitoring.
          </p>
        </div>

        <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setRideType('now')}
            className={`px-3 py-1.5 rounded-lg transition ${
              rideType === 'now' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ride Now
          </button>
          <button
            onClick={() => setRideType('reserve')}
            className={`px-3 py-1.5 rounded-lg transition ${
              rideType === 'reserve' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reserve Ahead
          </button>
        </div>
      </div>

      {/* Main Grid: Left Ride Options & Right Route Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Left Column: Form & Cabs List */}
        <div className="lg:col-span-7 space-y-3.5">
          
          {/* Pickup and Drop Inputs */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-2.5">
            <div className="flex items-center space-x-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Pickup Location</span>
                <input 
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-transparent font-bold text-xs text-slate-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-900 shrink-0"></div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Drop-off Destination</span>
                <input 
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-transparent font-bold text-xs text-slate-900 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Uber Options */}
          <div className="space-y-2">
            {UBER_CABS_DATABASE.map(ride => {
              const isSelected = selectedRideId === ride.id;
              return (
                <div
                  key={ride.id}
                  onClick={() => setSelectedRideId(ride.id)}
                  className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-slate-900 bg-slate-50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200 flex items-center justify-center">
                      <Car className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-xs text-slate-900">{ride.name}</h4>
                        <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                          {ride.capacity} seats
                        </span>
                        {ride.popular && (
                          <span className="text-[9px] font-bold uppercase text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                            Fastest
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {ride.tagline} · <strong className="text-slate-800">{ride.eta}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-base font-extrabold text-slate-900">₹{ride.price}</span>
                    <span className="text-[10px] text-slate-400 block font-medium">Upfront Fare</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment & Request Action */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-bold text-slate-600">Pay via:</span>
              <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-1 rounded">Google Pay / UPI</span>
            </div>

            <button
              onClick={handleRequestUber}
              disabled={matchingState === 'searching'}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition flex items-center space-x-1.5 disabled:opacity-50"
            >
              <span>Request {selectedRide.name} (₹{selectedRide.price})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Right Column: Clean Map Preview & Live Driver Card */}
        <div className="lg:col-span-5 space-y-3 sticky top-20">
          
          {/* Stylized Clean Route Map */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 p-4 text-white h-64 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="text-slate-300 font-medium">Fastest Route: 24.8 km</span>
              <span className="font-bold text-white">35 mins via Expressway</span>
            </div>

            <div className="flex flex-col space-y-4 my-auto px-4 text-xs">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></div>
                <p className="font-semibold text-slate-200 truncate">{pickup}</p>
              </div>
              <div className="h-6 w-px bg-slate-700 ml-1.5"></div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-sm bg-white shrink-0"></div>
                <p className="font-semibold text-slate-200 truncate">{dropoff}</p>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
              <span>Uber RideCheck Enabled</span>
              <span>Smooth Traffic</span>
            </div>
          </div>

          {/* Matching Status */}
          {matchingState === 'searching' && (
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-center space-y-2">
              <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <h4 className="font-bold text-xs text-slate-900">Finding Nearest Driver...</h4>
              <p className="text-[11px] text-slate-500">Connecting with partner drivers near {pickup}.</p>
            </div>
          )}

          {matchingState === 'matched' && matchedDriver && (
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-xs text-emerald-700">Driver En Route · 3 mins away</span>
                <span className="font-mono text-xs font-bold text-slate-800">PIN: {matchedDriver.otp}</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{matchedDriver.name}</h4>
                  <p className="text-[11px] text-slate-500">{matchedDriver.rating} · {matchedDriver.vehicle}</p>
                  <p className="font-mono text-xs font-bold text-slate-700">{matchedDriver.plate}</p>
                </div>
              </div>

              <div className="flex space-x-2 pt-1">
                <button
                  onClick={() => alert(`Calling driver at ${matchedDriver.phone}`)}
                  className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-lg transition"
                >
                  Call Driver
                </button>
                <button
                  onClick={handleCancelRide}
                  className="py-1.5 px-3 text-red-600 hover:bg-red-50 font-bold text-xs rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
