import React from 'react';
import { 
  X, 
  Luggage, 
  Plane, 
  Building2, 
  Download
} from 'lucide-react';

export default function MyTripsModal({ 
  trips, 
  onClose, 
  onSelectTripToView, 
  onCancelTrip 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 text-slate-800">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Luggage className="w-5 h-5 text-cyan-300" />
            <h2 className="text-lg font-black text-white">My TravelDeck Trips & Bookings</h2>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold ml-2">
              {trips.length} Bookings
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* List of trips */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {trips.length === 0 ? (
            <div className="text-center py-12">
              <Luggage className="w-16 h-16 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No Trips Booked Yet</h3>
              <p className="text-xs text-slate-400 mt-1">
                Your flight, hotel, and holiday reservations will appear here.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow hover:bg-blue-700 transition"
              >
                Search Flights & Stays
              </button>
            </div>
          ) : (
            trips.map((trip) => {
              const isFlight = trip.itemType === 'flight';
              const isConfirmed = trip.status === 'CONFIRMED';
              return (
                <div 
                  key={trip.id}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-4 shadow-sm hover:shadow transition space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                      <span>Booking ID: <strong className="text-slate-900">{trip.id}</strong></span>
                      <span>•</span>
                      <span>Booked on {new Date(trip.bookingDate).toLocaleDateString('en-IN')}</span>
                    </div>
                    <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                      isConfirmed 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-red-50 text-red-600 border border-red-200'
                    }`}>
                      {trip.status}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black">
                        {isFlight ? <Plane className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm">
                          {isFlight ? `${trip.item.airline} (${trip.item.from} → ${trip.item.to})` : trip.item.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {isFlight ? `Departure: ${trip.item.departureTime} • Travel Date: ${trip.travelDate} • Seat: ${trip.selectedSeat || '12A'}` : trip.item.location}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-black text-slate-900">
                        ₹{trip.fare.total.toLocaleString('en-IN')}
                      </span>
                      <p className="text-[10px] text-slate-400">Paid via {trip.paymentMethod}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100 text-xs">
                    <button
                      onClick={() => onSelectTripToView(trip)}
                      className="px-3.5 py-1.5 bg-blue-50 text-blue-700 font-extrabold rounded-xl hover:bg-blue-100 transition flex items-center space-x-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>View Boarding Pass</span>
                    </button>
                    {isConfirmed && (
                      <button
                        onClick={() => onCancelTrip(trip.id)}
                        className="px-3.5 py-1.5 text-red-600 hover:bg-red-50 font-bold rounded-xl transition"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
