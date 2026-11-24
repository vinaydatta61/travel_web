import React from 'react';
import { Sparkles, GraduationCap, HeartHandshake, Shield, UserCheck } from 'lucide-react';

export const SPECIAL_FARES = [
  {
    id: 'regular',
    name: 'Regular Fares',
    description: 'Standard adult flight fares with flexible luggage',
    icon: Sparkles,
    badge: 'Popular'
  },
  {
    id: 'student',
    name: 'Student Fares',
    description: 'Extra 10kg check-in baggage + special discount for valid ID',
    icon: GraduationCap,
    badge: 'Extra 10kg Baggage'
  },
  {
    id: 'senior',
    name: 'Senior Citizen',
    description: 'Up to ₹600 off for travellers aged 60 and above',
    icon: UserCheck,
    badge: 'Up to ₹600 OFF'
  },
  {
    id: 'armed_forces',
    name: 'Armed Forces',
    description: 'Exclusive government & defense concession fares',
    icon: Shield,
    badge: 'Govt Special'
  },
  {
    id: 'doctor',
    name: 'Doctors & Nurses',
    description: 'Honoring frontline healthcare heroes with up to 10% off',
    icon: HeartHandshake,
    badge: '10% OFF'
  }
];

export default function SpecialFares({ selectedFare, onSelectFare }) {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">
          Special Fares:
        </span>
        {SPECIAL_FARES.map((fare) => {
          const isSelected = selectedFare === fare.id;
          const Icon = fare.icon;
          return (
            <button
              key={fare.id}
              type="button"
              onClick={() => onSelectFare(fare.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
                isSelected
                  ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              }`}
              title={fare.description}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
              <span>{fare.name}</span>
              {fare.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1 ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {fare.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
