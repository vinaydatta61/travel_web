import React, { useState } from 'react';
import { Check, Copy, Percent, Sparkles } from 'lucide-react';
import { PROMO_CODES } from '../data/promos';

export default function OffersSection({ onSelectPromo }) {
  const [copiedCode, setCopiedCode] = useState('');

  const handleCopy = (code) => {
    setCopiedCode(code);
    navigator.clipboard?.writeText(code);
    setTimeout(() => setCopiedCode(''), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Percent className="w-3.5 h-3.5" />
              <span>Verified Promotional Discounts</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Exclusive Member Coupons & Airfare Credits
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Active travel coupons applied directly at checkout
          </span>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
          {PROMO_CODES.map((promo) => (
            <div 
              key={promo.code}
              className="bg-slate-50/60 rounded-xl p-4 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                    {promo.badge}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">{promo.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{promo.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="font-mono font-bold text-xs text-slate-800 bg-white px-2 py-1 rounded border border-slate-200">
                  {promo.code}
                </div>
                <button
                  onClick={() => handleCopy(promo.code)}
                  className={`flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-lg transition ${
                    copiedCode === promo.code
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {copiedCode === promo.code ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
