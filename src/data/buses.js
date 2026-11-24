export const ABHIBUS_DATABASE = [
  {
    id: 'bus-zing-1',
    operator: 'Zingbus Plus',
    busType: 'Volvo 9600 Multi-Axle AC Sleeper (2+1)',
    from: 'Delhi (Kashmiri Gate)',
    to: 'Jaipur (Sindhi Camp)',
    departureTime: '22:30',
    arrivalTime: '04:45',
    duration: '6h 15m',
    rating: 4.8,
    reviewsCount: 3840,
    price: 999,
    originalPrice: 1299,
    seatsAvailable: 8,
    singleBerthsLeft: 3,
    badges: ['AbhiBus Assured', 'Free Cancellation', 'Live GPS Tracking'],
    amenities: ['Charging Port', 'Fresh Blanket & Pillow', 'Reading Light', 'Emergency Exit', 'Free Water Bottle'],
    boardingPoints: [
      { location: 'Kashmiri Gate Metro Gate 1', time: '22:30' },
      { location: 'Dhaula Kuan Bus Stand', time: '23:15' },
      { location: 'IFFCO Chowk Gurgaon', time: '23:55' }
    ],
    droppingPoints: [
      { location: 'Transport Nagar Jaipur', time: '04:15' },
      { location: 'Sindhi Camp Metro Station', time: '04:45' }
    ]
  },
  {
    id: 'bus-intrcity-1',
    operator: 'IntrCity SmartBus',
    busType: 'BharatBenz AC Sleeper (2+1) with In-Bus Washroom',
    from: 'Mumbai (Borivali)',
    to: 'Goa (Panjim / Mapusa)',
    departureTime: '19:00',
    arrivalTime: '07:30',
    duration: '12h 30m',
    rating: 4.9,
    reviewsCount: 5210,
    price: 1450,
    originalPrice: 1850,
    seatsAvailable: 6,
    singleBerthsLeft: 2,
    badges: ['SmartBus Lounge Access', 'In-Bus Clean Washroom', 'Female Friendly'],
    amenities: ['In-Bus Washroom', 'Private Sleeper Pods', 'High Speed Wi-Fi', 'Complimentary Snack Box', 'Water Bottle'],
    boardingPoints: [
      { location: 'Borivali West (Gokul Hotel)', time: '19:00' },
      { location: 'Andheri East (Bisleri)', time: '19:45' },
      { location: 'Vashi Plaza (Highway)', time: '21:00' }
    ],
    droppingPoints: [
      { location: 'Mapusa Bus Stand', time: '06:45' },
      { location: 'Panjim Central Kadamba Stand', time: '07:30' }
    ]
  },
  {
    id: 'bus-orange-1',
    operator: 'Orange Tours and Travels',
    busType: 'Scania Multi-Axle AC Semi-Sleeper (2+2)',
    from: 'Bengaluru (Majestic)',
    to: 'Hyderabad (Ameerpet)',
    departureTime: '21:30',
    arrivalTime: '06:30',
    duration: '9h 00m',
    rating: 4.6,
    reviewsCount: 2940,
    price: 890,
    originalPrice: 1150,
    seatsAvailable: 14,
    singleBerthsLeft: 5,
    badges: ['Certified Sanitized', 'On-Time Guarantee', 'Live Tracking'],
    amenities: ['Reclining Push-Back Seats', 'USB Fast Charger', 'Personal Audio Jack', 'Fire Extinguisher'],
    boardingPoints: [
      { location: 'Majestic Anand Rao Circle', time: '21:30' },
      { location: 'Hebbal Flyover', time: '22:15' }
    ],
    droppingPoints: [
      { location: 'Shamshabad Airport Road', time: '05:45' },
      { location: 'Ameerpet Orange Office', time: '06:30' }
    ]
  },
  {
    id: 'bus-vrl-1',
    operator: 'VRL Travels',
    busType: 'Isuzu AC Sleeper Executive Class (2+1)',
    from: 'Pune (Swargate)',
    to: 'Goa (Madgaon)',
    departureTime: '20:30',
    arrivalTime: '06:00',
    duration: '9h 30m',
    rating: 4.7,
    reviewsCount: 4100,
    price: 1199,
    originalPrice: 1499,
    seatsAvailable: 9,
    singleBerthsLeft: 4,
    badges: ['VRL Assured Fleet', 'Zero Cancellation Fee', 'Luggage Tagging'],
    amenities: ['Individual AC Vents', 'Charging Sockets', 'Clean Bedsheet', 'Emergency Hammer'],
    boardingPoints: [
      { location: 'Swargate VRL Office', time: '20:30' },
      { location: 'Wakad Bridge Hinjewadi', time: '21:15' }
    ],
    droppingPoints: [
      { location: 'Madgaon KTC Bus Stand', time: '06:00' }
    ]
  }
];
