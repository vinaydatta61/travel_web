import React, { useState } from 'react';
import { 
  Plane, 
  Building2, 
  Train, 
  Bus,
  Car,
  Palmtree, 
  ArrowLeftRight, 
  Calendar, 
  Users, 
  Search, 
  Check,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { AIRPORTS } from '../data/airports';
import SpecialFares from './SpecialFares';

export default function HeroSearch({ 
  activeCategory, 
  setActiveCategory, 
  searchParams, 
  setSearchParams, 
  onSearch 
}) {
  const [tripType, setTripType] = useState('oneway');
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [showTravellerPicker, setShowTravellerPicker] = useState(false);
  const [selectedFare, setSelectedFare] = useState('regular');

  const fromAirport = AIRPORTS.find(a => a.code === searchParams.from) || AIRPORTS[0];
  const toAirport = AIRPORTS.find(a => a.code === searchParams.to) || AIRPORTS[1];

  const handleSwapAirports = () => {
    setSearchParams(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const handleTravellerChange = (key, delta) => {
    setSearchParams(prev => {
      const current = prev.travellers[key];
      const next = Math.max(key === 'adults' ? 1 : 0, current + delta);
      return {
        ...prev,
        travellers: {
          ...prev.travellers,
          [key]: next
        }
      };
    });
  };

  const totalTravellers = searchParams.travellers.adults + searchParams.travellers.children + searchParams.travellers.infants;

  return (
    <div className="relative pb-10 pt-4 bg-[#0a0f1d]">
      
      {/* Background Graphic Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white pb-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              All-In-One Indian Travel Platform
              <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 border border-slate-700/80 px-2 py-0.5 rounded-md">
                Official Travel Hub
              </span>
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Compare IndiGo 6E direct corridors, ConfirmTkt train prediction, Uber rides, and AbhiBus sleepers.
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-300 mt-2 sm:mt-0 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Booking Markup · Free Seat Guarantee with TDK Club</span>
          </div>
        </div>
      </div>

      {/* Main Elevated Search Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-950/20 border border-slate-200 overflow-hidden relative">
          
          {/* Top Category Tabs inside Card */}
          <div className="flex items-center justify-start sm:justify-start border-b border-slate-200/80 bg-slate-50/80 overflow-x-auto px-4 py-1.5 gap-1">
            {[
              { id: 'flights', label: 'Flights', sub: 'IndiGo 6E', icon: Plane },
              { id: 'trains', label: 'Trains', sub: 'ConfirmTkt', icon: Train },
              { id: 'cabs', label: 'Cabs', sub: 'Uber', icon: Car },
              { id: 'buses', label: 'Buses', sub: 'AbhiBus', icon: Bus },
              { id: 'hotels', label: 'Stays', sub: 'Luxe Hotels', icon: Building2 },
              { id: 'holidays', label: 'Holidays', sub: 'Packages', icon: Palmtree },
            ].map(tab => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/90'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="font-bold">{tab.label}</span>
                  <span className={`text-[10px] font-normal px-1 rounded ${
                    isSelected ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-400'
                  }`}>
                    {tab.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form Content */}
          <div className="p-5 sm:p-6">
            
            {/* === FLIGHTS TAB (IndiGo) === */}
            {activeCategory === 'flights' && (
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center space-x-5 font-semibold text-slate-700">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        checked={tripType === 'oneway'}
                        onChange={() => setTripType('oneway')}
                        className="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                      />
                      <span>One Way</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        checked={tripType === 'roundtrip'}
                        onChange={() => setTripType('roundtrip')}
                        className="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                      />
                      <span>Round Trip</span>
                    </label>
                  </div>
                  <span className="text-slate-500 hidden sm:inline-block font-medium">
                    IndiGo Direct Route Network · 15kg check-in + 7kg cabin standard
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 relative">
                  {/* FROM */}
                  <div className="md:col-span-3 relative">
                    <div 
                      onClick={() => { setShowFromPicker(!showFromPicker); setShowToPicker(false); setShowTravellerPicker(false); }}
                      className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Departure Airport</span>
                      <div className="flex items-baseline space-x-1.5 mt-0.5">
                        <span className="text-xl font-extrabold text-slate-900">{fromAirport.city}</span>
                        <span className="text-xs font-bold text-blue-600">({fromAirport.code})</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate font-medium">{fromAirport.name}</p>
                    </div>

                    {showFromPicker && (
                      <div className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-40 p-2.5 max-h-72 overflow-y-auto">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                          Select Origin Airport
                        </div>
                        {AIRPORTS.map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setSearchParams(prev => ({ ...prev, from: airport.code }));
                              setShowFromPicker(false);
                            }}
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition ${
                              airport.code === searchParams.from ? 'bg-blue-50 font-bold text-blue-700' : 'text-slate-700 font-medium'
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold">{airport.city} ({airport.code})</p>
                              <p className="text-[10px] text-slate-400 truncate max-w-[200px]">{airport.name}</p>
                            </div>
                            {airport.code === searchParams.from && <Check className="w-3.5 h-3.5 text-blue-600" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Swap Button */}
                  <div className="hidden md:flex absolute left-[24.5%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                    <button
                      type="button"
                      onClick={handleSwapAirports}
                      title="Swap departure and arrival"
                      className="w-7 h-7 rounded-full bg-white shadow border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 flex items-center justify-center transition"
                    >
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* TO */}
                  <div className="md:col-span-3 relative">
                    <div 
                      onClick={() => { setShowToPicker(!showToPicker); setShowFromPicker(false); setShowTravellerPicker(false); }}
                      className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Destination Airport</span>
                      <div className="flex items-baseline space-x-1.5 mt-0.5">
                        <span className="text-xl font-extrabold text-slate-900">{toAirport.city}</span>
                        <span className="text-xs font-bold text-blue-600">({toAirport.code})</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate font-medium">{toAirport.name}</p>
                    </div>

                    {showToPicker && (
                      <div className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-40 p-2.5 max-h-72 overflow-y-auto">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                          Select Destination Airport
                        </div>
                        {AIRPORTS.map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setSearchParams(prev => ({ ...prev, to: airport.code }));
                              setShowToPicker(false);
                            }}
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition ${
                              airport.code === searchParams.to ? 'bg-blue-50 font-bold text-blue-700' : 'text-slate-700 font-medium'
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold">{airport.city} ({airport.code})</p>
                              <p className="text-[10px] text-slate-400 truncate max-w-[200px]">{airport.name}</p>
                            </div>
                            {airport.code === searchParams.to && <Check className="w-3.5 h-3.5 text-blue-600" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* DEPARTURE */}
                  <div className="md:col-span-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 flex items-center space-x-1 uppercase tracking-wider">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>Departure Date</span>
                      </span>
                      <input 
                        type="date"
                        value={searchParams.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setSearchParams(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none mt-1 cursor-pointer"
                      />
                      <p className="text-[10px] text-slate-400 font-medium">Daily Direct Corridor</p>
                    </div>
                  </div>

                  {/* RETURN */}
                  <div className="md:col-span-2">
                    <div className={`p-3 rounded-xl border transition ${
                      tripType === 'roundtrip' 
                        ? 'bg-slate-50 border-slate-200' 
                        : 'bg-slate-50/50 border-dashed border-slate-200'
                    }`}>
                      <span className="text-[10px] font-bold text-slate-400 flex items-center space-x-1 uppercase tracking-wider">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>Return Date</span>
                      </span>
                      {tripType === 'roundtrip' ? (
                        <input 
                          type="date"
                          value={searchParams.returnDate || ''}
                          min={searchParams.date}
                          onChange={(e) => setSearchParams(prev => ({ ...prev, returnDate: e.target.value }))}
                          className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none mt-1 cursor-pointer"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setTripType('roundtrip')}
                          className="text-xs font-bold text-blue-600 hover:underline mt-1 block text-left"
                        >
                          + Add Return Flight
                        </button>
                      )}
                      <p className="text-[10px] text-slate-400">Save with TDKFLY</p>
                    </div>
                  </div>

                  {/* TRAVELLERS */}
                  <div className="md:col-span-2 relative">
                    <div 
                      onClick={() => { setShowTravellerPicker(!showTravellerPicker); setShowFromPicker(false); setShowToPicker(false); }}
                      className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-slate-400 flex items-center space-x-1 uppercase tracking-wider">
                        <Users className="w-3 h-3 text-slate-500" />
                        <span>Travellers & Class</span>
                      </span>
                      <div className="flex items-baseline space-x-1 mt-0.5">
                        <span className="text-base font-extrabold text-slate-900">{totalTravellers}</span>
                        <span className="text-xs font-semibold text-slate-600">Passenger(s)</span>
                      </div>
                      <p className="text-[11px] text-blue-600 font-bold capitalize">
                        {searchParams.cabinClass} Class
                      </p>
                    </div>

                    {showTravellerPicker && (
                      <div className="absolute top-full right-0 mt-1.5 w-72 bg-white rounded-xl shadow-xl border border-slate-200 z-40 p-4 space-y-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Select Passengers
                        </h4>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-slate-800">Adults</p>
                            <p className="text-[10px] text-slate-400">12+ years</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => handleTravellerChange('adults', -1)}
                              disabled={searchParams.travellers.adults <= 1}
                              className="w-6 h-6 rounded border border-slate-200 font-bold text-slate-600 disabled:opacity-40"
                            >
                              -
                            </button>
                            <span className="w-4 text-center font-bold text-xs">
                              {searchParams.travellers.adults}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleTravellerChange('adults', 1)}
                              className="w-6 h-6 rounded border border-slate-200 font-bold text-slate-600"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-slate-800">Children</p>
                            <p className="text-[10px] text-slate-400">2 - 12 years</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => handleTravellerChange('children', -1)}
                              disabled={searchParams.travellers.children <= 0}
                              className="w-6 h-6 rounded border border-slate-200 font-bold text-slate-600 disabled:opacity-40"
                            >
                              -
                            </button>
                            <span className="w-4 text-center font-bold text-xs">
                              {searchParams.travellers.children}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleTravellerChange('children', 1)}
                              className="w-6 h-6 rounded border border-slate-200 font-bold text-slate-600"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setShowTravellerPicker(false)}
                          className="w-full py-2 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-700 transition"
                        >
                          Confirm
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <SpecialFares selectedFare={selectedFare} onSelectFare={setSelectedFare} />
              </div>
            )}

            {/* === TRAINS TAB (ConfirmTkt) === */}
            {activeCategory === 'trains' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Origin Station</span>
                  <p className="text-lg font-bold text-slate-900 mt-0.5">Mumbai CSMT (BOM)</p>
                  <p className="text-xs text-slate-500">Chhatrapati Shivaji Maharaj Terminus</p>
                </div>
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Destination Station</span>
                  <p className="text-lg font-bold text-slate-900 mt-0.5">Goa Madgaon (MAO)</p>
                  <p className="text-xs text-slate-500">Vande Bharat & Tejas Rajdhani Express</p>
                </div>
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">ConfirmTkt Intelligence</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">AI Waitlist Confirmation Score</p>
                  <p className="text-xs text-slate-500">SafeTkt 100% Refund Protection included</p>
                </div>
              </div>
            )}

            {/* === CABS TAB (Uber) === */}
            {activeCategory === 'cabs' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Pickup Terminal</span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">Indira Gandhi Intl Airport, Terminal 3</p>
                  <p className="text-xs text-slate-500">Designated Uber Ride Pickup Area (P3)</p>
                </div>
                <div className="md:col-span-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Destination Address</span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">Connaught Place, Central Delhi</p>
                  <p className="text-xs text-slate-500">24.8 km · 35 min average travel time</p>
                </div>
                <div className="md:col-span-2 p-3.5 bg-slate-900 text-white rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Uber Fleet</span>
                  <p className="text-xs font-bold text-white mt-1">Uber Go · Premier · XL</p>
                  <p className="text-[10px] text-slate-400">Live GPS tracking</p>
                </div>
              </div>
            )}

            {/* === BUSES TAB (AbhiBus) === */}
            {activeCategory === 'buses' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">From City</span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">Delhi (Kashmiri Gate)</p>
                  <p className="text-xs text-slate-500">Pickups at Dhaula Kuan & Gurgaon</p>
                </div>
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">To Destination</span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">Jaipur (Sindhi Camp)</p>
                  <p className="text-xs text-slate-500">Volvo 9600 & AC Sleeper Coaches</p>
                </div>
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">AbhiBus Features</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Upper & Lower Deck Sleeper Berths</p>
                  <p className="text-xs text-slate-500">Single window pods and ladies reserved berths</p>
                </div>
              </div>
            )}

            {/* === HOTELS TAB === */}
            {activeCategory === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Destination City</span>
                  <select 
                    value={searchParams.hotelCity || 'GOI'}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, hotelCity: e.target.value }))}
                    className="w-full bg-transparent text-base font-bold text-slate-900 focus:outline-none mt-1 cursor-pointer"
                  >
                    <option value="GOI">Goa (Beaches & Luxury Resorts)</option>
                    <option value="BOM">Mumbai (South Bombay & Juhu)</option>
                    <option value="DEL">New Delhi & NCR</option>
                    <option value="BLR">Bengaluru (MG Road)</option>
                    <option value="JAI">Jaipur (Heritage Palaces)</option>
                  </select>
                </div>
                <div className="md:col-span-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Check-in</span>
                  <input 
                    type="date"
                    value={searchParams.date}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none mt-1"
                  />
                </div>
                <div className="md:col-span-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Check-out</span>
                  <input 
                    type="date"
                    value={searchParams.hotelCheckout || '2026-11-28'}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, hotelCheckout: e.target.value }))}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none mt-1"
                  />
                </div>
                <div className="md:col-span-2 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Guests</span>
                  <p className="text-sm font-bold text-slate-900 mt-1">1 Room, 2 Guests</p>
                </div>
              </div>
            )}

            {/* === HOLIDAYS TAB === */}
            {activeCategory === 'holidays' && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between">
                <div>
                  <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Curated TravelDeck Vacations
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">All-Inclusive Luxury & Honeymoon Packages</h3>
                  <p className="text-xs text-slate-500">Flights + 5-Star Resort + Sightseeing + Transfers included</p>
                </div>
                <span className="text-xs font-bold text-blue-700 mt-2 md:mt-0">Starting from ₹18,499 / person</span>
              </div>
            )}

          </div>

          {/* Clean Action Button */}
          <div className="px-6 pb-6 pt-1 flex justify-end border-t border-slate-100 bg-slate-50/50">
            <button
              onClick={onSearch}
              className="flex items-center space-x-2 px-8 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition uppercase tracking-wider"
            >
              <Search className="w-4 h-4" />
              <span>SEARCH {activeCategory.toUpperCase()}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
