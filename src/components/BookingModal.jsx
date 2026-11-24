import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Plane, 
  Building2, 
  Train, 
  Car,
  Bus,
  Tag, 
  CreditCard, 
  QrCode, 
  Lock, 
  ArrowRight,
  Armchair
} from 'lucide-react';
import { PROMO_CODES } from '../data/promos';
import SeatSelectionModal from './SeatSelectionModal';

export default function BookingModal({ 
  bookingItem, 
  itemType, 
  travellerCount = 1,
  currentUser,
  onClose, 
  onConfirmBooking 
}) {
  const [travellers, setTravellers] = useState([
    { 
      title: 'Mr', 
      firstName: currentUser?.firstName || 'Rahul', 
      lastName: currentUser?.lastName || 'Sharma', 
      gender: 'male', 
      age: '28' 
    }
  ]);
  const [contact, setContact] = useState({
    email: currentUser?.email || 'rahul.sharma@traveldeck.com',
    phone: currentUser?.phone ? currentUser.phone.replace('+91 ', '') : '9876543210'
  });

  const [selectedSeat, setSelectedSeat] = useState('12A');
  const [seatFee, setSeatFee] = useState(0);
  const [showSeatModal, setShowSeatModal] = useState(false);

  const [insurance, setInsurance] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState('veg');
  const [extraBaggage, setExtraBaggage] = useState('none');

  const [promoInput, setPromoInput] = useState('TDKDEAL');
  const [appliedPromo, setAppliedPromo] = useState(PROMO_CODES[0]);
  const [promoError, setPromoError] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('traveler@oksbi');
  const [cardDetails, setCardDetails] = useState({ number: '4111 •••• •••• 9283', expiry: '08/29', cvv: '•••' });
  const [isProcessing, setIsProcessing] = useState(false);

  const basePrice = (bookingItem.currentPrice || bookingItem.price || bookingItem.pricePerNight || 4500) * travellerCount;
  const taxes = Math.round(basePrice * 0.12);
  const insuranceFee = insurance ? 199 * travellerCount : 0;
  const mealFee = selectedMeal === 'veg' ? 350 * travellerCount : selectedMeal === 'sandwich' ? 250 * travellerCount : 0;
  const baggageFee = extraBaggage === '5kg' ? 1200 : 0;

  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.flatDiscount) {
      discount = appliedPromo.flatDiscount;
    } else if (appliedPromo.discountPercent) {
      discount = Math.min(appliedPromo.maxDiscount, Math.round((basePrice * appliedPromo.discountPercent) / 100));
    }
  }

  const netPayable = Math.max(500, basePrice + taxes + insuranceFee + mealFee + baggageFee + seatFee - discount);

  const handleApplyPromo = () => {
    setPromoError('');
    const found = PROMO_CODES.find(p => p.code.toUpperCase() === promoInput.trim().toUpperCase());
    if (found) {
      setAppliedPromo(found);
    } else {
      setPromoError('Invalid coupon. Try TDKDEAL or TDKFLY');
    }
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const bookingRecord = {
        id: `TDK-${Math.floor(1000000 + Math.random() * 9000000)}`,
        itemType,
        item: bookingItem,
        travellers,
        contact,
        selectedSeat,
        bookingDate: new Date().toISOString(),
        travelDate: bookingItem.date || '2026-11-25',
        fare: {
          base: basePrice,
          taxes,
          additions: insuranceFee + mealFee + baggageFee + seatFee,
          discount,
          total: netPayable
        },
        paymentMethod,
        status: 'CONFIRMED'
      };
      onConfirmBooking(bookingRecord);
    }, 1200);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto text-slate-800 border border-slate-200">
          
          {/* Header */}
          <div className="bg-[#0a0f1d] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center">
                {itemType === 'flight' && <Plane className="w-5 h-5 text-blue-400" />}
                {itemType === 'train' && <Train className="w-5 h-5 text-emerald-400" />}
                {itemType === 'cab' && <Car className="w-5 h-5 text-cyan-400" />}
                {itemType === 'bus' && <Bus className="w-5 h-5 text-rose-400" />}
                {itemType === 'hotel' && <Building2 className="w-5 h-5 text-amber-400" />}
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Review & Confirm Booking</h2>
                <p className="text-xs text-slate-400">
                  {bookingItem.airline || bookingItem.trainName || bookingItem.operator || bookingItem.name}
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Trip Itinerary Card */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>Selected Itinerary</span>
                    <span className="text-blue-700 font-bold">TravelDeck Verified</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    <p className="text-sm">{bookingItem.airline || bookingItem.trainName || bookingItem.operator || bookingItem.name}</p>
                    <p className="text-slate-500 font-normal mt-0.5">
                      Departure: {bookingItem.departureTime || '06:00'} · {bookingItem.from || 'Origin'} → {bookingItem.to || 'Destination'}
                    </p>
                  </div>
                </div>

                {/* Seat Assignment (for Flights) */}
                {itemType === 'flight' && (
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                        <Armchair className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Assigned Seat</span>
                        <p className="text-xs font-bold text-blue-600">
                          Seat {selectedSeat} <span className="text-slate-400 font-normal">({seatFee > 0 ? `+ ₹${seatFee}` : 'Complimentary'})</span>
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowSeatModal(true)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition"
                    >
                      Change Seat
                    </button>
                  </div>
                )}

                {/* Passenger Form */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Primary Passenger Details
                  </h4>
                  
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3">
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Title</label>
                      <select 
                        value={travellers[0].title}
                        onChange={(e) => {
                          const copy = [...travellers];
                          copy[0].title = e.target.value;
                          setTravellers(copy);
                        }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-bold"
                      >
                        <option>Mr</option>
                        <option>Ms</option>
                        <option>Mrs</option>
                      </select>
                    </div>
                    <div className="col-span-5">
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">First Name</label>
                      <input 
                        type="text"
                        value={travellers[0].firstName}
                        onChange={(e) => {
                          const copy = [...travellers];
                          copy[0].firstName = e.target.value;
                          setTravellers(copy);
                        }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-bold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div className="col-span-4">
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Last Name</label>
                      <input 
                        type="text"
                        value={travellers[0].lastName}
                        onChange={(e) => {
                          const copy = [...travellers];
                          copy[0].lastName = e.target.value;
                          setTravellers(copy);
                        }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-bold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Email ID</label>
                      <input 
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Mobile Number</label>
                      <input 
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-bold"
                      />
                    </div>
                  </div>
                </div>

                {/* Add-on Protection */}
                <div className="bg-white rounded-xl p-3.5 border border-slate-200">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={insurance}
                      onChange={(e) => setInsurance(e.target.checked)}
                      className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        TravelDeck Care Protection (₹199 / passenger)
                      </span>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Covers travel delays up to ₹10,000, emergency medical & baggage loss.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Payment Selection */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Payment Method
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'upi', label: 'UPI / QR' },
                      { id: 'card', label: 'Card' },
                      { id: 'netbanking', label: 'Net Banking' }
                    ].map(method => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-2 rounded-lg border text-center transition text-xs font-bold ${
                          paymentMethod === method.id
                            ? 'border-blue-600 bg-blue-50/50 text-blue-900'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {method.label}
                      </button>
                    ))}
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex space-x-2">
                      <input 
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okaxis"
                        className="flex-1 bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs font-bold"
                      />
                      <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-1.5 rounded font-bold">
                        Verified
                      </span>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Invoice & Coupons */}
              <div className="lg:col-span-5 space-y-3.5">
                
                {/* Coupon Box */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Promo Code</span>
                  <div className="flex space-x-2">
                    <input 
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="e.g. TDKDEAL"
                      className="flex-1 bg-white border border-slate-300 uppercase font-bold text-xs px-2.5 py-1.5 rounded-lg focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition"
                    >
                      Apply
                    </button>
                  </div>

                  {appliedPromo && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-2 rounded-lg text-xs flex items-center justify-between">
                      <span className="font-bold">{appliedPromo.code} applied (-₹{discount})</span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown Bill */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2.5 text-xs text-slate-600">
                  <h4 className="font-bold text-slate-900 pb-1.5 border-b border-slate-100">Fare Summary</h4>
                  <div className="flex justify-between">
                    <span>Base Fare ({travellerCount} pax)</span>
                    <span className="font-bold text-slate-800">₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Surcharges</span>
                    <span className="font-bold text-slate-800">₹{taxes.toLocaleString('en-IN')}</span>
                  </div>
                  {insurance && (
                    <div className="flex justify-between text-blue-700">
                      <span>TravelDeck Care Insurance</span>
                      <span className="font-bold">₹{insuranceFee}</span>
                    </div>
                  )}
                  {seatFee > 0 && (
                    <div className="flex justify-between text-blue-700">
                      <span>Seat Selection ({selectedSeat})</span>
                      <span className="font-bold">₹{seatFee}</span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Coupon Discount</span>
                      <span>- ₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase">Total Payable</span>
                    <span className="text-xl font-extrabold text-slate-900">₹{netPayable.toLocaleString('en-IN')}</span>
                  </div>

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handlePay}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center space-x-1.5 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>Processing Payment...</span>
                    ) : (
                      <>
                        <span>PAY ₹{netPayable.toLocaleString('en-IN')} & BOOK</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {showSeatModal && (
        <SeatSelectionModal
          flight={bookingItem}
          currentSeat={selectedSeat}
          onClose={() => setShowSeatModal(false)}
          onSelectSeat={(seatId, fee) => {
            setSelectedSeat(seatId);
            setSeatFee(fee);
          }}
        />
      )}
    </>
  );
}
