export const PROMO_CODES = [
  {
    code: 'TDKDEAL',
    title: 'Flat 15% Instant Discount',
    desc: 'Valid on all domestic flights up to ₹1,500 with TravelDeck',
    discountPercent: 15,
    maxDiscount: 1500,
    minBooking: 3000,
    badge: 'Trending'
  },
  {
    code: 'TDKFLY',
    title: 'Flat ₹1,200 OFF on Round Trips',
    desc: 'Exclusive savings on return domestic & international airfares',
    flatDiscount: 1200,
    minBooking: 5000,
    badge: 'Roundtrip Special'
  },
  {
    code: 'HOTELSPECIAL',
    title: 'Up to ₹2,500 OFF on Luxury Hotels',
    desc: 'Flat 20% off on 4 & 5-star verified TravelDeck Luxe properties',
    discountPercent: 20,
    maxDiscount: 2500,
    minBooking: 4000,
    badge: 'Stays Exclusive'
  },
  {
    code: 'FIRSTTRIP',
    title: 'Flat ₹600 Welcome Gift',
    desc: 'Zero minimum booking requirement on your first journey with TravelDeck',
    flatDiscount: 600,
    minBooking: 0,
    badge: 'New User'
  }
];

export const HOLIDAY_PACKAGES = [
  {
    id: 'HOL-GOA',
    title: 'Scenic Goa Beach Escape with Watersports',
    destination: 'Goa',
    nights: 4,
    days: 5,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
    price: 18499,
    originalPrice: 24999,
    rating: 4.8,
    inclusions: ['4-Star Beach Resort', 'Scuba & Jet Ski Ride', 'Daily Buffet Breakfast', 'Airport Pick & Drop']
  },
  {
    id: 'HOL-KASHMIR',
    title: 'Heavenly Kashmir: Gulmarg & Dal Lake Houseboat',
    destination: 'Srinagar & Gulmarg',
    nights: 5,
    days: 6,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80',
    price: 24999,
    originalPrice: 32000,
    rating: 4.9,
    inclusions: ['Luxury Houseboat', 'Gondola Cable Car Pass', 'Private Chauffeur SUV', 'All Meals Included']
  },
  {
    id: 'HOL-DUBAI',
    title: 'Dazzling Dubai & Desert Safari Extravaganza',
    destination: 'Dubai, UAE',
    nights: 4,
    days: 5,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    price: 38999,
    originalPrice: 48000,
    rating: 4.9,
    inclusions: ['Burj Khalifa 124th Level', 'Dune Bashing & BBQ Safari', 'Marina Yacht Cruise', 'Tourist Visa Included']
  },
  {
    id: 'HOL-BALI',
    title: 'Romantic Bali: Ubud Swing & Nusa Penida Island',
    destination: 'Bali, Indonesia',
    nights: 6,
    days: 7,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    price: 44500,
    originalPrice: 56000,
    rating: 4.8,
    inclusions: ['Private Pool Villa', 'Speedboat to Nusa Penida', 'Balinese Spa Therapy', 'Floating Breakfast']
  }
];
