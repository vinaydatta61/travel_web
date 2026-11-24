import React from 'react';
import { Star, MapPin, Sparkles } from 'lucide-react';

export default function HotelCard({ hotel, onBookHotel }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden mb-5 flex flex-col md:flex-row group">
      
      {/* Hotel Image Gallery */}
      <div className="md:w-5/12 h-56 md:h-auto relative overflow-hidden shrink-0">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {hotel.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
            <Sparkles className="w-3 h-3" />
            <span>{hotel.badge.replace('MMT Luxe', 'TravelDeck Luxe')}</span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-semibold">
          {hotel.starRating} Star Luxury
        </div>
      </div>

      {/* Hotel Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Location */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center space-x-1">
              {[...Array(hotel.starRating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="flex items-center space-x-1.5 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
              <span className="text-xs font-black text-emerald-800">{hotel.rating} / 5</span>
              <span className="text-[10px] text-emerald-600 font-bold">({hotel.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Hotel Name */}
          <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition">
            {hotel.name}
          </h3>

          <p className="text-xs text-slate-500 flex items-center space-x-1 mt-1 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{hotel.location}</span>
          </p>

          <p className="text-xs font-bold text-blue-700 mt-2">
            Room: {hotel.roomType}
          </p>

          {/* Amenities Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {hotel.amenities.map((item, idx) => (
              <span 
                key={idx}
                className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-lg border border-slate-200 font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing and Book Button Row */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 line-through">
                ₹{hotel.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">
                {hotel.discount}
              </span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-xs font-bold text-slate-500">₹</span>
              <span className="text-2xl font-black text-slate-900">
                {hotel.pricePerNight.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 font-semibold">/ night</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">+ ₹950 taxes & fees</p>
          </div>

          <button
            onClick={() => onBookHotel(hotel)}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            BOOK ROOM
          </button>
        </div>

      </div>

    </div>
  );
}
