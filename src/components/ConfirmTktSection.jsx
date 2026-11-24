import React, { useState } from 'react';
import { 
  Train, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  TrendingUp,
  Navigation
} from 'lucide-react';
import { TRAINS_DATABASE } from '../data/trains';

export default function ConfirmTktSection({ onBookTrain }) {
  const [selectedQuota, setSelectedQuota] = useState('general');
  const [freeCancellation, setFreeCancellation] = useState(true);
  const [activeTab, setActiveTab] = useState('trains');
  const [pnrInput, setPnrInput] = useState('4829104812');
  const [pnrResult, setPnrResult] = useState(null);

  const handleCheckPnr = (e) => {
    e.preventDefault();
    setPnrResult({
      pnr: pnrInput,
      train: '20901 · Vande Bharat Express',
      route: 'Mumbai CSMT → Goa Madgaon',
      date: '25 Nov 2026',
      status: 'CNF (Confirmed)',
      coach: 'C4',
      berth: '38 (Window / Chair Car)',
      charting: 'Chart Not Prepared · 99% Confirm Probability'
    });
  };

  return (
    <div className="space-y-4">
      
      {/* Clean ConfirmTkt Header Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>ConfirmTkt Engine · IRCTC Authorized Partner</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Train Seat Availability & Confirmation Prediction
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time confirmation chances, alternate train options, and SafeTkt full refund guarantee.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('trains')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'trains' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Train Schedules
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'status' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Live PNR Status
          </button>
        </div>
      </div>

      {/* Quota Strip */}
      {activeTab === 'trains' && (
        <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 font-bold uppercase text-[10px]">Quota:</span>
            {[
              { id: 'general', label: 'General (GN)' },
              { id: 'tatkal', label: 'Tatkal (CK)' },
              { id: 'ladies', label: 'Ladies (LD)' }
            ].map(q => (
              <button
                key={q.id}
                onClick={() => setSelectedQuota(q.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  selectedQuota === q.id 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>

          <label className="flex items-center space-x-2 cursor-pointer text-slate-700">
            <input 
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
            />
            <span className="font-semibold text-xs">
              ConfirmTkt SafeTkt: 100% Full Refund Guarantee
            </span>
          </label>
        </div>
      )}

      {/* Live PNR Screen */}
      {activeTab === 'status' && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 flex items-center space-x-2">
            <Navigation className="w-4 h-4 text-emerald-600" />
            <span>Check Live IRCTC PNR Status</span>
          </h3>
          <form onSubmit={handleCheckPnr} className="flex gap-2 max-w-md">
            <input 
              type="text"
              maxLength={10}
              value={pnrInput}
              onChange={(e) => setPnrInput(e.target.value)}
              placeholder="Enter 10-digit PNR"
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono font-bold focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition"
            >
              Get Status
            </button>
          </form>

          {pnrResult && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900">PNR: {pnrResult.pnr}</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2 py-0.5 rounded">
                  {pnrResult.status}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Train</span>
                  <p className="font-bold text-slate-800">{pnrResult.train}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Route</span>
                  <p className="font-bold text-slate-800">{pnrResult.route}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Coach & Berth</span>
                  <p className="font-bold text-emerald-700">{pnrResult.coach} · {pnrResult.berth}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Charting</span>
                  <p className="font-bold text-slate-800">{pnrResult.charting}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Train Cards Listing */}
      <div className="space-y-3.5">
        {TRAINS_DATABASE.map(train => (
          <div 
            key={train.id}
            className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 p-5 space-y-4"
          >
            {/* Header: Name, Running Days, Running Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                  <Train className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-sm text-slate-900">{train.trainName}</h3>
                    <span className="text-xs font-mono font-medium text-slate-400">#{train.trainNumber}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Runs on: <strong className="text-slate-700">{train.runsOn.join(', ')}</strong> · Punctuality: {train.punctuality}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-xs">
                <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{train.runningStatus}</span>
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="grid grid-cols-3 gap-2 text-center items-center py-1">
              <div className="text-left">
                <span className="text-xl font-extrabold text-slate-900">{train.departureTime}</span>
                <p className="text-xs font-bold text-slate-800">{train.fromStation || train.from}</p>
              </div>

              <div>
                <span className="text-xs text-slate-500 font-medium block">{train.duration}</span>
                <div className="h-px w-full bg-slate-200 my-1"></div>
                <span className="text-[10px] text-emerald-700 font-bold block">
                  {train.confirmProbability}
                </span>
              </div>

              <div className="text-right">
                <span className="text-xl font-extrabold text-slate-900">{train.arrivalTime}</span>
                <p className="text-xs font-bold text-slate-800">{train.toStation || train.to}</p>
              </div>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {train.classes.map(cls => {
                const isAvailable = cls.available > 0;
                return (
                  <div 
                    key={cls.code}
                    className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-slate-900">{cls.name} ({cls.code})</span>
                        <span className="font-bold text-xs text-slate-900">₹{cls.price}</span>
                      </div>

                      <div className="mt-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded inline-flex items-center space-x-1 ${
                          isAvailable 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{cls.status}</span>
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onBookTrain({
                        ...train,
                        name: `${train.trainName} (${cls.name})`,
                        price: cls.price,
                        classCode: cls.code,
                        seatType: cls.status
                      })}
                      className="mt-3 w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition"
                    >
                      Book {cls.code}
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
