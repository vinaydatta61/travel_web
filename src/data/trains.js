export const TRAINS_DATABASE = [
  {
    id: 'TR-20901',
    trainNumber: '20901',
    trainName: 'Vande Bharat Express',
    from: 'BOM',
    fromStation: 'Mumbai CSMT',
    to: 'GOI',
    toStation: 'Goa Madgaon (MAO)',
    departureTime: '05:25',
    arrivalTime: '13:10',
    duration: '7h 45m',
    runsOn: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
    runningStatus: 'On Time · Next Halt: Ratnagiri (Plat 2) at 09:40 AM',
    confirmProbability: '99% High Chance',
    probabilityScore: 99,
    classes: [
      { code: 'CC', name: 'AC Chair Car', price: 1665, available: 42, status: 'AVAILABLE 42', cnfStatus: 'CNF', probability: 'High' },
      { code: 'EC', name: 'Executive Chair Car', price: 3345, available: 8, status: 'AVAILABLE 8', cnfStatus: 'CNF', probability: 'High' }
    ],
    features: ['High Speed 160km/h', 'Panoramic Glass Windows', 'Chef Catering Included', 'Bio-Vacuum Toilets'],
    punctuality: '98%',
    alternateAvailable: 'Alternate: Tejas Superfast has 14 seats available tomorrow'
  },
  {
    id: 'TR-12951',
    trainNumber: '12951',
    trainName: 'Mumbai Tejas Rajdhani Express',
    from: 'BOM',
    fromStation: 'Mumbai Central (MMCT)',
    to: 'DEL',
    toStation: 'New Delhi (NDLS)',
    departureTime: '17:00',
    arrivalTime: '08:32',
    duration: '15h 32m',
    runsOn: ['Daily'],
    runningStatus: 'Running On Time · Platform 1 at Mumbai Central',
    confirmProbability: '92% Confirmation Chance',
    probabilityScore: 92,
    classes: [
      { code: '3A', name: 'AC 3 Tier', price: 2450, available: 16, status: 'AVAILABLE 16', cnfStatus: 'CNF', probability: 'High' },
      { code: '3E', name: 'AC 3 Economy', price: 2190, available: 28, status: 'AVAILABLE 28', cnfStatus: 'CNF', probability: 'High' },
      { code: '2A', name: 'AC 2 Tier', price: 3480, available: 9, status: 'AVAILABLE 9', cnfStatus: 'CNF', probability: 'High' },
      { code: '1A', name: 'AC 1st Class', price: 5490, available: 4, status: 'AVAILABLE 4', cnfStatus: 'CNF', probability: 'High' }
    ],
    features: ['Automatic Plug Doors', 'All 4 Meals Served', 'Fresh Bedroll Provided', 'Smart Sensor Toilets'],
    punctuality: '96%',
    alternateAvailable: 'Same Train 3E class has 28 seats confirmed'
  },
  {
    id: 'TR-12009',
    trainNumber: '12009',
    trainName: 'Shatabdi Express',
    from: 'BOM',
    fromStation: 'Mumbai Central',
    to: 'ADI',
    toStation: 'Ahmedabad Jn',
    departureTime: '06:20',
    arrivalTime: '12:45',
    duration: '6h 25m',
    runsOn: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    runningStatus: 'On Time · Departing Platform 4',
    confirmProbability: 'WL 4 -> 88% Prediction',
    probabilityScore: 88,
    classes: [
      { code: 'CC', name: 'Chair Car', price: 1120, available: 0, status: 'WL 4', cnfStatus: 'WL', probability: 'Medium' },
      { code: 'EC', name: 'Executive Class', price: 2280, available: 12, status: 'AVAILABLE 12', cnfStatus: 'CNF', probability: 'High' }
    ],
    features: ['Fast Breakfast Served', 'Newspaper & Water Bottle', 'Ergonomic Seats'],
    punctuality: '97%',
    alternateAvailable: 'ConfirmTkt Trip Assurance: 88% chance to get confirmed before chart preparation'
  }
];
