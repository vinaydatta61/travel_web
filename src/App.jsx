import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import FlightCard from './components/FlightCard';
import FlightFilters from './components/FlightFilters';
import FareCalendar from './components/FareCalendar';
import ConfirmTktSection from './components/ConfirmTktSection';
import UberCabsSection from './components/UberCabsSection';
import AbhibusSection from './components/AbhibusSection';
import HotelCard from './components/HotelCard';
import OffersSection from './components/OffersSection';
import HolidaysSection from './components/HolidaysSection';
import BookingModal from './components/BookingModal';
import TicketConfirmation from './components/TicketConfirmation';
import MyTripsModal from './components/MyTripsModal';
import AuthModal from './components/AuthModal';
import LiveBookingToast from './components/LiveBookingToast';
import Footer from './components/Footer';

import { FLIGHTS_DATABASE } from './data/flights';
import { HOTELS_DATABASE } from './data/hotels';
import { AIRPORTS } from './data/airports';
import { Plane, Building2, Train, Car, Bus, ArrowUpDown, CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('flights'); // 'flights' | 'trains' | 'cabs' | 'buses' | 'hotels' | 'holidays'
  
  // User Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('traveldeck_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      name: 'Rahul Sharma',
      firstName: 'Rahul',
      lastName: 'Sharma',
      email: 'rahul.sharma@traveldeck.com',
      phone: '+91 98765 43210',
      tier: 'TravelDeck Club Elite',
      walletBalance: 2450,
      miles: 3820,
      loggedIn: true
    };
  });

  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    localStorage.setItem('traveldeck_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    const guestUser = { loggedIn: false };
    setCurrentUser(guestUser);
    localStorage.removeItem('traveldeck_user');
  };

  // Search parameters
  const [searchParams, setSearchParams] = useState({
    from: 'DEL',
    to: 'BOM',
    date: '2026-11-25',
    returnDate: '',
    travellers: { adults: 1, children: 0, infants: 0 },
    cabinClass: 'economy',
    hotelCity: 'GOI',
    hotelCheckout: '2026-11-28'
  });

  // Filters & Sorting for Flights
  const [flightFilters, setFlightFilters] = useState({
    stops: [],
    airlines: [],
    maxPrice: 15000,
    refundableOnly: false
  });
  const [sortBy, setSortBy] = useState('cheapest');

  // Hotel filters
  const [hotelMaxPrice, setHotelMaxPrice] = useState(35000);

  // Booking & Modal State
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);
  const [bookingItemType, setBookingItemType] = useState('flight'); // 'flight' | 'train' | 'cab' | 'bus' | 'hotel' | 'package'
  
  // Confirmed booking state (for e-ticket popup)
  const [activeConfirmedBooking, setActiveConfirmedBooking] = useState(null);
  
  // My Trips Modal
  const [showMyTrips, setShowMyTrips] = useState(false);
  const [bookedTrips, setBookedTrips] = useState([
    {
      id: 'TDK-8241902',
      itemType: 'flight',
      item: FLIGHTS_DATABASE[0],
      travellers: [{ title: 'Mr', firstName: 'Rahul', lastName: 'Sharma', gender: 'male', age: '28' }],
      contact: { email: 'rahul.sharma@traveldeck.com', phone: '9876543210' },
      selectedSeat: '12A',
      bookingDate: '2026-11-20T10:30:00Z',
      travelDate: '2026-11-27',
      fare: { base: 4850, taxes: 582, additions: 199, discount: 500, total: 5131 },
      paymentMethod: 'UPI',
      status: 'CONFIRMED'
    }
  ]);

  // Scroll smoothly to results
  const handleSearch = () => {
    const el = document.getElementById('search-results-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered & Sorted Flights
  const filteredFlights = useMemo(() => {
    return FLIGHTS_DATABASE.filter(flight => {
      const matchesRoute = (flight.from === searchParams.from && flight.to === searchParams.to) ||
        (flight.from === 'DEL' && flight.to === 'BOM');

      if (flightFilters.stops.length > 0 && !flightFilters.stops.includes(flight.stops)) {
        return false;
      }

      if (flightFilters.airlines.length > 0 && !flightFilters.airlines.includes(flight.airline)) {
        return false;
      }

      if (flight.price > flightFilters.maxPrice) {
        return false;
      }

      if (flightFilters.refundableOnly && !flight.refundable) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'cheapest') return a.price - b.price;
      if (sortBy === 'fastest') return a.durationMinutes - b.durationMinutes;
      if (sortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
      return 0;
    });
  }, [searchParams, flightFilters, sortBy]);

  // Filtered Hotels
  const filteredHotels = useMemo(() => {
    return HOTELS_DATABASE.filter(hotel => {
      if (searchParams.hotelCity && hotel.city !== searchParams.hotelCity) {
        return hotel.city === searchParams.hotelCity;
      }
      return hotel.pricePerNight <= hotelMaxPrice;
    });
  }, [searchParams.hotelCity, hotelMaxPrice]);

  // Booking handlers
  const handleSelectFlight = (flight) => {
    setSelectedBookingItem(flight);
    setBookingItemType('flight');
  };

  const handleBookTrain = (train) => {
    setSelectedBookingItem(train);
    setBookingItemType('train');
  };

  const handleBookCab = (cab) => {
    setSelectedBookingItem(cab);
    setBookingItemType('cab');
  };

  const handleBookBus = (bus) => {
    setSelectedBookingItem(bus);
    setBookingItemType('bus');
  };

  const handleBookHotel = (hotel) => {
    setSelectedBookingItem(hotel);
    setBookingItemType('hotel');
  };

  const handleBookHoliday = (pkg) => {
    setSelectedBookingItem(pkg);
    setBookingItemType('package');
  };

  const handleConfirmBooking = (newBooking) => {
    setBookedTrips(prev => [newBooking, ...prev]);
    setSelectedBookingItem(null);
    setActiveConfirmedBooking(newBooking);
  };

  const handleCancelTrip = (tripId) => {
    setBookedTrips(prev => prev.map(t => t.id === tripId ? { ...t, status: 'CANCELLED' } : t));
  };

  const resetFilters = () => {
    setFlightFilters({
      stops: [],
      airlines: [],
      maxPrice: 15000,
      refundableOnly: false
    });
  };

  const fromCityName = AIRPORTS.find(a => a.code === searchParams.from)?.city || searchParams.from;
  const toCityName = AIRPORTS.find(a => a.code === searchParams.to)?.city || searchParams.to;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Navbar with TravelDeck branding & Category tabs */}
      <Navbar
        activeTab={activeCategory}
        setActiveTab={setActiveCategory}
        bookedTripsCount={bookedTrips.filter(t => t.status === 'CONFIRMED').length}
        onOpenMyTrips={() => setShowMyTrips(true)}
        onOpenOffers={() => {
          const el = document.getElementById('offers-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        currentUser={currentUser}
        onOpenAuth={() => setShowAuthModal(true)}
      />

      {/* Hero & Unified Search Engine */}
      <HeroSearch
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        onSearch={handleSearch}
      />

      {/* Main Dynamic View Based on Chosen Real-World Engine */}
      <main id="search-results-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 w-full">
        
        {/* ===================== 1. INDIGO FLIGHTS ENGINE ===================== */}
        {activeCategory === 'flights' && (
          <div>
            {/* Search Header Strip */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center font-black">
                  <Plane className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    IndiGo 6E Corridor: {fromCityName} ({searchParams.from}) → {toCityName} ({searchParams.to})
                    <span className="text-[10px] bg-blue-600 text-white font-extrabold px-2 py-0.5 rounded-full">
                      6E Network
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold">
                    Departure: {searchParams.date} • {searchParams.travellers.adults} Adult(s) • {searchParams.cabinClass.toUpperCase()} CLASS
                  </p>
                </div>
              </div>

              {/* Quick Sort Options */}
              <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-2xl text-xs font-black text-slate-600">
                <span className="px-2 text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <ArrowUpDown className="w-3 h-3" />
                  Sort:
                </span>
                {[
                  { id: 'cheapest', label: 'Cheapest' },
                  { id: 'fastest', label: 'Fastest' },
                  { id: 'departure', label: 'Earliest' }
                ].map(sortOption => (
                  <button
                    key={sortOption.id}
                    onClick={() => setSortBy(sortOption.id)}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      sortBy === sortOption.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    {sortOption.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 7-Day Fare Trend Calendar */}
            <FareCalendar
              selectedDate={searchParams.date}
              onSelectDate={(date) => setSearchParams(prev => ({ ...prev, date }))}
            />

            {/* Results Grid: Filters & IndiGo Flight Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              <div className="lg:col-span-4 sticky top-20">
                <FlightFilters
                  filters={flightFilters}
                  setFilters={setFlightFilters}
                  onResetFilters={resetFilters}
                />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-black text-slate-500 mb-1 px-1">
                  <span>Showing {filteredFlights.length} IndiGo & Partner Flights</span>
                  <span className="text-emerald-600 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    IndiGo On-Time Guarantee
                  </span>
                </div>

                {filteredFlights.length > 0 ? (
                  filteredFlights.map((flight) => (
                    <FlightCard
                      key={flight.id}
                      flight={flight}
                      onSelectFlight={handleSelectFlight}
                    />
                  ))
                ) : (
                  <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
                    <p className="font-bold text-slate-700">No flights matched your filter criteria.</p>
                    <button
                      onClick={resetFilters}
                      className="mt-4 px-5 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ===================== 2. CONFIRMTKT TRAINS ENGINE ===================== */}
        {activeCategory === 'trains' && (
          <ConfirmTktSection onBookTrain={handleBookTrain} />
        )}

        {/* ===================== 3. UBER CABS ENGINE ===================== */}
        {activeCategory === 'cabs' && (
          <UberCabsSection onBookRide={handleBookCab} />
        )}

        {/* ===================== 4. ABHIBUS BUSES ENGINE ===================== */}
        {activeCategory === 'buses' && (
          <AbhibusSection onBookBus={handleBookBus} />
        )}

        {/* ===================== 5. LUXE HOTELS VIEW ===================== */}
        {activeCategory === 'hotels' && (
          <div>
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    TravelDeck Verified Luxury Stays in {searchParams.hotelCity === 'GOI' ? 'Goa' : searchParams.hotelCity}
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold">
                    Check-in: {searchParams.date} • Check-out: {searchParams.hotelCheckout} • 1 Room, 2 Guests
                  </p>
                </div>
              </div>
              <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200">
                100% Sanitized & Assured Stays
              </div>
            </div>

            <div className="space-y-4">
              {filteredHotels.map(hotel => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onBookHotel={handleBookHotel}
                />
              ))}
            </div>
          </div>
        )}

        {/* ===================== 6. HOLIDAYS VIEW ===================== */}
        {activeCategory === 'holidays' && (
          <HolidaysSection onBookPackage={handleBookHoliday} />
        )}

      </main>

      {/* Super Offers Section */}
      <section id="offers-section">
        <OffersSection onSelectPromo={() => {}} />
      </section>

      {/* Curated Holidays Spotlight */}
      {activeCategory !== 'holidays' && (
        <HolidaysSection onBookPackage={handleBookHoliday} />
      )}

      {/* Multi-modal Booking Modal */}
      {selectedBookingItem && (
        <BookingModal
          bookingItem={selectedBookingItem}
          itemType={bookingItemType}
          travellerCount={searchParams.travellers.adults}
          currentUser={currentUser}
          onClose={() => setSelectedBookingItem(null)}
          onConfirmBooking={handleConfirmBooking}
        />
      )}

      {/* E-Ticket Confirmation Modal */}
      {activeConfirmedBooking && (
        <TicketConfirmation
          booking={activeConfirmedBooking}
          onClose={() => setActiveConfirmedBooking(null)}
          onViewMyTrips={() => {
            setActiveConfirmedBooking(null);
            setShowMyTrips(true);
          }}
        />
      )}

      {/* My Trips History Modal */}
      {showMyTrips && (
        <MyTripsModal
          trips={bookedTrips}
          onClose={() => setShowMyTrips(false)}
          onSelectTripToView={(trip) => {
            setShowMyTrips(false);
            setActiveConfirmedBooking(trip);
          }}
          onCancelTrip={handleCancelTrip}
        />
      )}

      {/* Login & Sign Up Modal */}
      <AuthModal
        isOpen={showAuthModal}
        currentUser={currentUser}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />

      {/* Real-time Social Proof Booking Toast */}
      <LiveBookingToast />

      {/* Footer */}
      <Footer />

    </div>
  );
}
