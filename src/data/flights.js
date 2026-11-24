export const FLIGHTS_DATABASE = [
  {
    id: 'FL-6E204',
    airline: 'IndiGo 6E',
    flightNumber: '6E 204',
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80',
    color: '#002e6e',
    from: 'DEL',
    to: 'BOM',
    departureTime: '06:00',
    arrivalTime: '08:15',
    duration: '2h 15m',
    durationMinutes: 135,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Airbus A321neo (Sharklets)',
    price: 4850,
    seatsLeft: 4,
    baggage: {
      cabin: '7 kg',
      checkin: '15 kg (1 piece standard)'
    },
    mealIncluded: false,
    refundable: true,
    punctuality: '98% Lean, Clean Flying Machine',
    tag: 'IndiGo Early Bird · 6E Direct',
    indigoPerks: {
      flex: 'Unlimited Free Date Changes with 6E Flex',
      eats: 'Pre-book 6E Junglee Sandwich & Cookie',
      seat: 'XL Legroom Seats Available in Rows 1, 12 & 13'
    }
  },
  {
    id: 'FL-6E5182',
    airline: 'IndiGo 6E',
    flightNumber: '6E 5182',
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80',
    color: '#002e6e',
    from: 'DEL',
    to: 'BOM',
    departureTime: '09:20',
    arrivalTime: '11:35',
    duration: '2h 15m',
    durationMinutes: 135,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Airbus A320neo',
    price: 5420,
    seatsLeft: 8,
    baggage: {
      cabin: '7 kg',
      checkin: '15 kg'
    },
    mealIncluded: true,
    refundable: true,
    punctuality: '97% On-Time Performance',
    tag: 'IndiGo 6E Prime Choice',
    indigoPerks: {
      flex: 'Complimentary Seat + 6E Snack Combo included',
      eats: 'Fresh Chef Veg Kathi Roll + Beverage',
      seat: 'Priority Baggage & Boarding Tag'
    }
  },
  {
    id: 'FL-6E2131',
    airline: 'IndiGo 6E',
    flightNumber: '6E 2131',
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80',
    color: '#002e6e',
    from: 'DEL',
    to: 'BOM',
    departureTime: '13:40',
    arrivalTime: '15:55',
    duration: '2h 15m',
    durationMinutes: 135,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Airbus A321neo',
    price: 4499,
    seatsLeft: 2,
    baggage: {
      cabin: '7 kg',
      checkin: '15 kg'
    },
    mealIncluded: false,
    refundable: false,
    punctuality: '99% On-Time Guaranteed',
    tag: 'Lowest 6E Saver Fare',
    indigoPerks: {
      flex: 'Standard Saver Baggage Allowance',
      eats: 'In-Flight 6E Eats Menu on Demand',
      seat: 'Web Check-in at 48 hours prior'
    }
  },
  {
    id: 'FL-6E6012',
    airline: 'IndiGo 6E',
    flightNumber: '6E 6012',
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80',
    color: '#002e6e',
    from: 'DEL',
    to: 'BOM',
    departureTime: '18:15',
    arrivalTime: '20:30',
    duration: '2h 15m',
    durationMinutes: 135,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Airbus A321neo',
    price: 5210,
    seatsLeft: 9,
    baggage: {
      cabin: '7 kg',
      checkin: '15 kg'
    },
    mealIncluded: true,
    refundable: true,
    punctuality: '96% Evening Corridor On-Time',
    tag: 'Popular Prime Evening Flight',
    indigoPerks: {
      flex: 'Fast Forward Check-in at Terminal 3',
      eats: 'Artisan Cashew Nuts Tin + Beverage',
      seat: 'Window / Aisle Choice'
    }
  },
  {
    id: 'FL-6E174',
    airline: 'IndiGo 6E',
    flightNumber: '6E 174',
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=80&q=80',
    color: '#002e6e',
    from: 'DEL',
    to: 'BOM',
    departureTime: '21:45',
    arrivalTime: '00:05',
    duration: '2h 20m',
    durationMinutes: 140,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Airbus A320neo',
    price: 4290,
    seatsLeft: 6,
    baggage: {
      cabin: '7 kg',
      checkin: '15 kg'
    },
    mealIncluded: false,
    refundable: true,
    punctuality: '95% On-Time Performance',
    tag: 'Late Night Red-Eye Saver',
    indigoPerks: {
      flex: 'Reduced Night Fare',
      eats: 'Warm Beverages available',
      seat: 'Quiet Flight Mode'
    }
  },
  // Vistara Partner
  {
    id: 'FL-UK955',
    airline: 'Vistara (Tata Partner)',
    flightNumber: 'UK 955',
    logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=80&q=80',
    color: '#49103c',
    from: 'DEL',
    to: 'BOM',
    departureTime: '07:30',
    arrivalTime: '09:45',
    duration: '2h 15m',
    durationMinutes: 135,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Boeing 787-9 Dreamliner',
    price: 5690,
    seatsLeft: 8,
    baggage: { cabin: '7 kg', checkin: '20 kg Premium Baggage' },
    mealIncluded: true,
    refundable: true,
    punctuality: '96% On Time',
    tag: 'Full Service · Hot Gourmet Meal',
    indigoPerks: {
      flex: 'Tata Neu Points Eligible',
      eats: 'Chef 3-Course Breakfast',
      seat: 'In-Seat Video Screen & USB'
    }
  },
  // Air India Partner
  {
    id: 'FL-AI806',
    airline: 'Air India',
    flightNumber: 'AI 806',
    logo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=80&q=80',
    color: '#d6001c',
    from: 'DEL',
    to: 'BOM',
    departureTime: '10:15',
    arrivalTime: '12:30',
    duration: '2h 15m',
    durationMinutes: 135,
    stops: 0,
    stopDetails: 'Non-stop',
    aircraft: 'Airbus A350-900',
    price: 5310,
    seatsLeft: 6,
    baggage: { cabin: '7 kg', checkin: '25 kg Generous Allowance' },
    mealIncluded: true,
    refundable: true,
    punctuality: '94% On Time',
    tag: 'Flagship A350 Experience',
    indigoPerks: {
      flex: 'Generous 25kg Check-in',
      eats: 'Full Hot Indian Thali',
      seat: 'High Resolution IFE Screens'
    }
  }
];
