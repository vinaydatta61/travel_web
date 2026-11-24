import React from 'react';
import { Palmtree, Star, Check, Calendar, ArrowRight } from 'lucide-react';
import { HOLIDAY_PACKAGES } from '../data/promos';

export default function HolidaysSection({ onBookPackage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <span className="text-xs font-black text-blue-600 uppercase tracking-wider flex items-center space-x-1">
            <Palmtree className="w-4 h-4" />
            <span>Handpicked Vacation Packages</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
            Trending Holiday Getaways
          </h2>
        </div>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">
          Customizable itineraries with Flights, Hotels, Transfers & Sightseeing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOLIDAY_PACKAGES.map((pkg) => (
          <div 
            key={pkg.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="h-44 relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{pkg.rating}</span>
                </div>
                <div className="absolute bottom-2 left-2 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  {pkg.nights} Nights / {pkg.days} Days
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-black text-sm text-gray-900 leading-snug group-hover:text-blue-600 transition">
                  {pkg.title}
                </h3>

                <div className="space-y-1 pt-1">
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[11px] text-gray-600">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 line-through">
                  ₹{pkg.originalPrice.toLocaleString('en-IN')}
                </span>
                <div className="flex items-baseline space-x-0.5">
                  <span className="text-xs font-bold text-gray-500">₹</span>
                  <span className="text-xl font-black text-gray-900">
                    {pkg.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-gray-400">/ person</span>
                </div>
              </div>

              <button
                onClick={() => onBookPackage(pkg)}
                className="px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow transition"
              >
                Book Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
