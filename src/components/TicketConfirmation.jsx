import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Plane, 
  Building2, 
  Train, 
  Car, 
  Bus, 
  Printer, 
  Download, 
  QrCode, 
  ShieldCheck, 
  Compass, 
  X,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

export default function TicketConfirmation({ booking, onClose, onViewMyTrips }) {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 }
    });
  }, []);

  const { item, fare, travellers, contact, id, itemType, travelDate, selectedSeat, paymentMethod } = booking;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200 text-slate-800">
        
        {/* Success Header with Partner Badge */}
        <div className={`text-white p-6 text-center relative ${
          itemType === 'flight' ? 'bg-gradient-to-r from-blue-900 to-indigo-950' :
          itemType === 'train' ? 'bg-gradient-to-r from-emerald-800 to-teal-950' :
          itemType === 'cab' ? 'bg-gradient-to-r from-black via-slate-900 to-zinc-900' :
          itemType === 'bus' ? 'bg-gradient-to-r from-rose-700 to-red-950' :
          'bg-gradient-to-r from-blue-800 to-slate-900'
        }`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm shadow-md">
            <CheckCircle2 className="w-9 h-9 text-white" />
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-xs uppercase font-black tracking-widest text-cyan-300 mb-1">
            {itemType === 'flight' && <span>✈️ IndiGo 6E Confirmed Digital Boarding Pass</span>}
            {itemType === 'train' && <span>🚆 ConfirmTkt IRCTC Electronic Reservation Slip (ERS)</span>}
            {itemType === 'cab' && <span>🚗 Uber Official Ride Booking & Trip Pass</span>}
            {itemType === 'bus' && <span>🚌 AbhiBus Assured M-Ticket</span>}
          </div>

          <h2 className="text-2xl font-black">Booking Confirmed!</h2>
          <p className="text-xs text-slate-200 mt-1">
            Your verified e-ticket has been issued & dispatched to <strong>{contact.email}</strong>
          </p>
          <div className="inline-block mt-3 bg-white/20 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-sm font-mono">
            PNR / Reference: {id}
          </div>
        </div>

        {/* E-Ticket / Receipt Layout */}
        <div className="p-6 space-y-6">
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl p-5 relative">
            
            {/* Header: Service Details */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black shadow-sm ${
                  itemType === 'flight' ? 'bg-blue-100 text-blue-900' :
                  itemType === 'train' ? 'bg-emerald-100 text-emerald-900' :
                  itemType === 'cab' ? 'bg-slate-900 text-white' :
                  'bg-rose-100 text-rose-900'
                }`}>
                  {itemType === 'flight' && <Plane className="w-6 h-6" />}
                  {itemType === 'train' && <Train className="w-6 h-6" />}
                  {itemType === 'cab' && <Car className="w-6 h-6" />}
                  {itemType === 'bus' && <Bus className="w-6 h-6" />}
                  {itemType === 'hotel' && <Building2 className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-black text-base text-slate-900">
                    {item.airline || item.trainName || item.operator || item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    {itemType === 'flight' && `${item.flightNumber} · ${item.aircraft}`}
                    {itemType === 'train' && `Train #${item.trainNumber} · ${item.classCode || 'CC'}`}
                    {itemType === 'cab' && `${item.carType || 'Sedan'} · Driver En Route`}
                    {itemType === 'bus' && `${item.busType}`}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Status: CONFIRMED
                </span>
                <p className="text-xs font-black text-blue-700 mt-1">
                  {itemType === 'flight' && `Seat: ${selectedSeat || '12A'}`}
                  {itemType === 'train' && `Berth: ${item.seatType || 'CNF C4-38'}`}
                  {itemType === 'cab' && `PIN: 4829`}
                  {itemType === 'bus' && `Berth: ${item.selectedBerths?.join(', ') || 'L4'}`}
                </p>
              </div>
            </div>

            {/* Travel Route & Timings */}
            <div className="py-4 grid grid-cols-3 gap-2 text-center items-center">
              <div className="text-left">
                <span className="text-2xl font-black text-slate-900">
                  {item.departureTime || '06:00'}
                </span>
                <p className="text-sm font-black text-slate-800">
                  {item.fromStation || item.from || 'Origin'}
                </p>
                <p className="text-[11px] text-slate-400 font-semibold">
                  {item.boardingPoint?.location || 'Departure Point'}
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-bold block">
                  {item.duration || 'Fastest Route'}
                </span>
                <div className="h-[2px] w-full bg-emerald-500 my-1"></div>
                <span className="text-[11px] text-emerald-600 font-black block">
                  {item.stopDetails || item.runningStatus || 'Non-stop'}
                </span>
              </div>

              <div className="text-right">
                <span className="text-2xl font-black text-slate-900">
                  {item.arrivalTime || '08:15'}
                </span>
                <p className="text-sm font-black text-slate-800">
                  {item.toStation || item.to || 'Destination'}
                </p>
                <p className="text-[11px] text-slate-400 font-semibold">
                  {item.droppingPoint?.location || 'Arrival Terminal'}
                </p>
              </div>
            </div>

            {/* Passenger Manifest & Total Paid */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Passenger</span>
                <p className="font-bold text-slate-900">{travellers[0].title} {travellers[0].firstName} {travellers[0].lastName}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Travel Date</span>
                <p className="font-bold text-slate-900">{travelDate}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Total Amount</span>
                <p className="font-black text-blue-700">₹{fare.total.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Payment Mode</span>
                <p className="font-bold text-slate-900 uppercase">{paymentMethod || 'UPI'}</p>
              </div>
            </div>

            {/* Security Barcode & QR Code */}
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <QrCode className="w-10 h-10 text-slate-900" />
                <div className="text-[10px] text-slate-500">
                  <p className="font-black text-slate-800">Scan at Security Kiosk or Bus Conductor</p>
                  <p>Official TravelDeck Digital Boarding Token</p>
                </div>
              </div>
              <span className="text-xs font-mono font-black tracking-widest text-slate-500">
                TDK-{id.replace('TDK-', '')}-GATE
              </span>
            </div>

          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 transition"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print Boarding Pass</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-blue-50 border border-blue-200 font-bold text-xs text-blue-700 hover:bg-blue-100 transition"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onViewMyTrips}
              className="col-span-2 sm:col-span-1 flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-black text-xs text-white hover:from-blue-700 hover:to-indigo-700 shadow transition"
            >
              <span>View in My Trips</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
