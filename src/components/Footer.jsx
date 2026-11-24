import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  PhoneCall, 
  Smartphone, 
  Compass
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1d] text-white pt-10 pb-8 border-t border-slate-800 mt-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-200">100% Encrypted Transactions</h4>
              <p className="text-slate-400 mt-0.5 text-[11px]">PCI-DSS compliant bank gateway protocols.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-slate-300" />
            </div>
            <div>
              <h4 className="font-bold text-slate-200">Best Airfare Promise</h4>
              <p className="text-slate-400 mt-0.5 text-[11px]">Zero hidden markup on all airline direct fares.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-200">24×7 Concierge Support</h4>
              <p className="text-slate-400 mt-0.5 text-[11px]">Direct priority helpline for flight, train & cab status.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-200">Instant Digital Boarding Pass</h4>
              <p className="text-slate-400 mt-0.5 text-[11px]">Direct SMS & email issuance with gate barcode.</p>
            </div>
          </div>
        </div>

        {/* Corporate Sitemaps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] text-slate-400">
          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-2.5">IndiGo Flight Corridors</h5>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer transition">Delhi to Mumbai (DEL → BOM)</li>
              <li className="hover:text-white cursor-pointer transition">Bengaluru to Delhi (BLR → DEL)</li>
              <li className="hover:text-white cursor-pointer transition">Mumbai to Goa (BOM → GOI)</li>
              <li className="hover:text-white cursor-pointer transition">Hyderabad to Chennai (HYD → MAA)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-2.5">ConfirmTkt Railways</h5>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer transition">Vande Bharat Express (Mumbai - Goa)</li>
              <li className="hover:text-white cursor-pointer transition">Tejas Rajdhani Express (BOM - DEL)</li>
              <li className="hover:text-white cursor-pointer transition">Shatabdi Express (Mumbai - Ahmedabad)</li>
              <li className="hover:text-white cursor-pointer transition">IRCTC Waitlist Prediction Algorithm</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-2.5">Uber & AbhiBus Networks</h5>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer transition">Airport Cab Pickup Lanes (P3 / P4)</li>
              <li className="hover:text-white cursor-pointer transition">Uber Intercity Outstation Trips</li>
              <li className="hover:text-white cursor-pointer transition">Zingbus Volvo 9600 Multi-Axle</li>
              <li className="hover:text-white cursor-pointer transition">IntrCity SmartBus AC Sleeper Pods</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-2.5">TravelDeck Legal</h5>
            <ul className="space-y-1.5">
              <li className="hover:text-white cursor-pointer transition">About TravelDeck Technologies</li>
              <li className="hover:text-white cursor-pointer transition">Customer Terms of Carriage</li>
              <li className="hover:text-white cursor-pointer transition">Privacy & Data Security Policy</li>
              <li className="hover:text-white cursor-pointer transition">Airline Baggage Guidelines</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-2">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <p>© 2026 TravelDeck Technologies Private Limited. All rights reserved.</p>
          </div>
          <p className="mt-2 sm:mt-0 text-slate-400">
            Engineered with modern multi-modal travel APIs
          </p>
        </div>

      </div>
    </footer>
  );
}
