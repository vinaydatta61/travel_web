import React, { useState } from 'react';
import { X, Check, ShieldAlert, Sparkles, Armchair } from 'lucide-react';

export default function SeatSelectionModal({ 
  flight, 
  onClose, 
  onSelectSeat, 
  currentSeat 
}) {
  const [selectedSeat, setSelectedSeat] = useState(currentSeat || '12A');

  // Rows 1 to 18
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18];
  const occupiedSeats = ['1B', '1C', '2D', '3A', '4F', '5B', '6C', '7A', '10D', '11C', '14E', '16B'];

  const getSeatInfo = (row, col) => {
    const seatId = `${row}${col}`;
    const isOccupied = occupiedSeats.includes(seatId);
    let type = 'Standard';
    let price = 250;

    if (row <= 2) {
      type = 'Premium Front & Legroom';
      price = 750;
    } else if (row === 11 || row === 12) {
      type = 'Emergency Exit (Extra Legroom)';
      price = 550;
    } else if (col === 'B' || col === 'E') {
      type = 'Standard Middle';
      price = 0; // Free
    } else if (col === 'A' || col === 'F') {
      type = 'Window Seat';
      price = 300;
    } else {
      type = 'Aisle Seat';
      price = 250;
    }

    return { seatId, isOccupied, type, price };
  };

  const handleSeatClick = (info) => {
    if (info.isOccupied) return;
    setSelectedSeat(info.seatId);
  };

  const currentInfo = (() => {
    const match = selectedSeat.match(/(\d+)([A-F])/);
    if (!match) return { seatId: '12A', price: 550, type: 'Emergency Exit' };
    return getSeatInfo(Number(match[1]), match[2]);
  })();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="font-black text-lg">Interactive Airplane Seat Selection</h3>
            <p className="text-xs text-blue-200">
              {flight.airline} • {flight.flightNumber} • {flight.aircraft || 'Airbus A320neo'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center space-x-1.5">
            <div className="w-4 h-4 rounded bg-white border border-slate-300"></div>
            <span>Standard (₹0 - ₹300)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-4 h-4 rounded bg-amber-100 border border-amber-400"></div>
            <span>Extra Legroom (₹550 - ₹750)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-4 h-4 rounded bg-blue-600"></div>
            <span className="font-bold text-blue-600">Selected</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-4 h-4 rounded bg-slate-300"></div>
            <span>Occupied</span>
          </div>
        </div>

        {/* Scrollable Cabin Aircraft Grid */}
        <div className="p-6 overflow-y-auto flex-1 max-h-96">
          <div className="max-w-md mx-auto bg-slate-100 rounded-3xl p-5 border-2 border-dashed border-slate-300 relative">
            
            {/* Plane Nose Indicator */}
            <div className="text-center pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center space-x-2">
              <span>Cockpit / Front of Aircraft</span>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-7 gap-1 text-center font-black text-xs text-slate-400 pb-2">
              <span>A</span>
              <span>B</span>
              <span>C</span>
              <span className="text-[10px] text-slate-300 uppercase">Aisle</span>
              <span>D</span>
              <span>E</span>
              <span>F</span>
            </div>

            {/* Seat Rows */}
            <div className="space-y-1.5">
              {rows.map((row) => {
                const isExitRow = row === 11 || row === 12;
                return (
                  <div key={row} className="relative">
                    {isExitRow && row === 11 && (
                      <div className="text-center py-1 text-[10px] font-bold text-amber-700 bg-amber-50 rounded mb-1">
                        ⚡ EMERGENCY EXIT ROWS (Extra Legroom)
                      </div>
                    )}
                    <div className="grid grid-cols-7 gap-1 items-center">
                      {['A', 'B', 'C'].map(col => {
                        const info = getSeatInfo(row, col);
                        const isSelected = selectedSeat === info.seatId;
                        return (
                          <button
                            key={info.seatId}
                            type="button"
                            disabled={info.isOccupied}
                            onClick={() => handleSeatClick(info)}
                            className={`h-8 rounded-lg text-[11px] font-bold transition flex items-center justify-center ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-md scale-105 ring-2 ring-blue-300'
                                : info.isOccupied
                                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                : row <= 2 || isExitRow
                                ? 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400'
                            }`}
                          >
                            {isSelected ? '✓' : col}
                          </button>
                        );
                      })}

                      {/* Row Number in Aisle */}
                      <span className="text-center text-xs font-bold text-slate-400">
                        {row}
                      </span>

                      {['D', 'E', 'F'].map(col => {
                        const info = getSeatInfo(row, col);
                        const isSelected = selectedSeat === info.seatId;
                        return (
                          <button
                            key={info.seatId}
                            type="button"
                            disabled={info.isOccupied}
                            onClick={() => handleSeatClick(info)}
                            className={`h-8 rounded-lg text-[11px] font-bold transition flex items-center justify-center ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-md scale-105 ring-2 ring-blue-300'
                                : info.isOccupied
                                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                : row <= 2 || isExitRow
                                ? 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400'
                            }`}
                          >
                            {isSelected ? '✓' : col}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Bar: Selected Seat Summary & Confirm */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-400 uppercase font-bold block">Selected Seat</span>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-slate-900">{currentInfo.seatId}</span>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                {currentInfo.type}
              </span>
              <span className="text-sm font-black text-slate-800">
                {currentInfo.price === 0 ? 'FREE' : `+ ₹${currentInfo.price}`}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onSelectSeat(currentInfo.seatId, currentInfo.price);
              onClose();
            }}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow transition"
          >
            CONFIRM SEAT
          </button>
        </div>

      </div>
    </div>
  );
}
