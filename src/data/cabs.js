export const UBER_CABS_DATABASE = [
  {
    id: 'uber-go',
    name: 'Uber Go',
    tagline: 'Affordable, compact daily rides',
    capacity: 4,
    eta: '3 mins away',
    etaMinutes: 3,
    carType: 'Maruti Suzuki WagonR / Swift / Dzire',
    price: 245,
    originalPrice: 290,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80',
    features: ['Pocket friendly', 'Verified driver partner', 'AC enabled'],
    popular: true
  },
  {
    id: 'uber-premier',
    name: 'Uber Premier',
    tagline: 'Comfortable sedans with top-rated drivers',
    capacity: 4,
    eta: '4 mins away',
    etaMinutes: 4,
    carType: 'Honda City / Hyundai Verna / Ciaz',
    price: 365,
    originalPrice: 420,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=300&q=80',
    features: ['Spacious legroom', 'Top 5% rated drivers', 'Quiet ride mode'],
    popular: false
  },
  {
    id: 'uber-xl',
    name: 'UberXL',
    tagline: 'Spacious 6-seater SUVs for groups & luggage',
    capacity: 6,
    eta: '6 mins away',
    etaMinutes: 6,
    carType: 'Toyota Innova Crysta / Maruti Ertiga',
    price: 520,
    originalPrice: 590,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=300&q=80',
    features: ['Seats up to 6', 'Extra large luggage trunk', 'Airport favorite'],
    popular: false
  },
  {
    id: 'uber-auto',
    name: 'Uber Auto',
    tagline: 'Hassle-free 3-wheeler auto rickshaw at doorstep',
    capacity: 3,
    eta: '2 mins away',
    etaMinutes: 2,
    carType: 'Bajaj / TVS CNG Auto',
    price: 115,
    originalPrice: 135,
    rating: 4.75,
    image: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=300&q=80',
    features: ['Zero meter haggling', 'Direct doorstep pickup', 'Fastest in traffic'],
    popular: true
  },
  {
    id: 'uber-moto',
    name: 'Uber Moto',
    tagline: 'Fast and pocket-friendly bike taxi',
    capacity: 1,
    eta: '2 mins away',
    etaMinutes: 2,
    carType: 'Hero Splendor / Honda Shine (Helmet provided)',
    price: 65,
    originalPrice: 80,
    rating: 4.85,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80',
    features: ['Beat city congestion', 'Sanitized helmet provided', 'Lowest fare'],
    popular: false
  },
  {
    id: 'uber-intercity',
    name: 'Uber Intercity',
    tagline: 'Outstation trips with highway-trained chauffeurs',
    capacity: 4,
    eta: 'Scheduled in 15 mins',
    etaMinutes: 15,
    carType: 'Sedan / SUV for Intercity Travel',
    price: 2450,
    originalPrice: 2850,
    rating: 4.94,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=300&q=80',
    features: ['Toll & state tax included option', 'One-way & round trip', 'Highway safety kit'],
    popular: false
  }
];

export const MOCK_UBER_DRIVERS = [
  {
    name: 'Rajesh Kumar Verma',
    rating: '4.92 ★',
    trips: '8,420 trips',
    vehicle: 'Silver Maruti Suzuki Dzire',
    plate: 'MH 02 DX 7712',
    otp: '4829',
    phone: '+91 98210 54123'
  },
  {
    name: 'Suresh Patel',
    rating: '4.88 ★',
    trips: '5,140 trips',
    vehicle: 'White Maruti Suzuki Ertiga',
    plate: 'MH 01 BG 4421',
    otp: '6192',
    phone: '+91 98330 92811'
  },
  {
    name: 'Mohammad Farhan',
    rating: '4.96 ★',
    trips: '12,300 trips',
    vehicle: 'Dark Grey Honda City',
    plate: 'MH 04 ER 9081',
    otp: '3350',
    phone: '+91 97690 11440'
  }
];
