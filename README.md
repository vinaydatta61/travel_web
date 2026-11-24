# TravelDeck — Smart Multi-Modal Travel Booking Platform

<p align="center">
  <strong>Unified Indian Travel Engine uniting IndiGo Flights, ConfirmTkt Trains, Uber Cabs, and AbhiBus Sleeper Coaches.</strong>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#key-integrations">Real-World Integrations</a> •
  <a href="#design-system">UI/UX Design System</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a>
</p>

---

## ✈️ Overview

**TravelDeck** is a modern, full-featured multi-modal travel booking web application designed to eliminate fragmented booking experiences. Instead of switching across five separate apps, TravelDeck combines real-world travel pillars into a single high-performance portal with authentic industry-standard UX patterns, transparent upfront pricing, and zero markups.

---

## 🌟 Real-World Integrations

### 1. ✈️ IndiGo 6E Flight Corridor
*Inspired by IndiGo Airlines (`goindigo.in`)*
- **6E Flight Schedules**: Real-time flight tracking across major Indian corridors (DEL, BOM, BLR, GOI, HYD, MAA, CCU) with Airbus A321neo aircraft specs.
- **On-Time Performance**: Verified on-time departure badges (*"98% Lean, Clean Flying Machine"*).
- **Fare Bundles**:
  - `6E Saver`: Standard 15kg check-in + 7kg cabin baggage.
  - `6E Flexi Plus`: Free date change, complimentary seat choice, and in-flight snack combo.
- **6E Eats**: Pre-book chef-curated meals (*Junglee Paneer Sandwich*, *Chicken Kathi Roll*, *Cashew Nuts & Cookies*).
- **Interactive Airplane Seat Map**: Realistic fuselage layout (Rows 1–18, columns A–C | Aisle | D–F) with XL extra legroom seats in Rows 1, 11 & 12, real-time occupancy, and pricing.
- **7-Day Lowest Fare Trend Calendar**: Interactive mid-week savings bar chart highlighting the cheapest day to fly.

### 2. 🚆 ConfirmTkt Railway Intelligence
*Inspired by ConfirmTkt (`confirmtkt.com`)*
- **AI Waitlist Confirmation Prediction**: Real-time probability percentage scores directly on coach cards (*e.g., "99% High Chance of Confirmation"*, *"WL 4 → 88% Prediction"*).
- **Authentic Coach Classes**: Support for Indian Railways classes: `1A` (First AC), `2A` (2-Tier AC), `3A` (3-Tier AC), `3E` (AC 3 Economy), `SL` (Sleeper), `CC` (AC Chair Car), `EC` (Executive Chair Car).
- **ConfirmTkt SafeTkt**: Integrated **100% Full Refund Guarantee** covering cancellation fees and Tatkal charges.
- **Live Running Status & PNR Tracker**: Direct PNR lookup providing coach number, berth allocation (*e.g., "C4 · Berth 38 Window"*), and live train GPS delay status.

### 3. 🚗 Uber On-Demand Cabs
*Inspired by Uber (`uber.com`)*
- **Fleet Categories**:
  - `Uber Go`: Affordable daily compact rides (WagonR, Swift).
  - `Uber Premier`: Comfortable sedans with top 5% rated chauffeurs (City, Ciaz, Verna).
  - `UberXL`: Spacious 6-seater SUVs for groups and airport luggage (Innova Crysta, Ertiga).
  - `Uber Auto` & `Uber Moto`: Quick city commute options.
  - `Uber Intercity`: Outstation highway travel.
- **Upfront Guaranteed Fares**: Clear trip pricing with zero meter haggling.
- **Route Path Visualizer**: Dark-mode route card showing pickup waypoint (*Airport Terminal 3 Dedicated Lane*), destination, distance (`24.8 km`), and duration (`35 mins`).
- **Simulated Driver Matching**: Real-time driver pairing animation displaying driver name, vehicle registration plate (*e.g., `MH 02 DX 7712`*), driver rating (*4.92 ★*), and 4-digit **Trip Start PIN (`4829`)**.

### 4. 🚌 AbhiBus Assured Sleeper Network
*Inspired by AbhiBus (`abhibus.com`)*
- **Verified Fleet Operators**: Real schedules from **Zingbus Plus** (Volvo 9600), **IntrCity SmartBus** (with in-bus washroom), and **Orange Tours**.
- **Interactive Deck Sleeper Seat Map**:
  - Switch between **Lower Deck** (`L1–L12`) and **Upper Deck** (`U1–U12`).
  - **Single Window Sleeper Pods** vs **Double Berths for Couples**.
  - **Ladies-Reserved Berths** styled with clean pink indicators.
- **Boarding Points Selector**: Select exact boarding locations and timetable stops (*Kashmiri Gate*, *Dhaula Kuan*, *Gurgaon IFFCO Chowk*).

### 5. 🏨 Luxe Stays & Curated Holidays
- Handpicked 4-star and 5-star verified properties (*Taj Exotica Resort Goa*, *JW Marriott Juhu Mumbai*, *The Leela Palace Delhi*, *Rambagh Palace Jaipur*).
- All-inclusive vacation packages with hotel stays, sightseeing passes, and airport transfers.

---

## 🎨 UI/UX Design System

TravelDeck uses a clean, modern design system replacing arbitrary AI gradients with intentional typography, elevation, and purposeful semantics:

- **Color Palette**:
  - Canvas: Pristine Slate 50 (`#f8fafc`)
  - Primary Headers & Accents: Obsidian Midnight (`#0a0f1d`) and Brand Cobalt (`#2563eb`)
  - Semantic Status: Soft Emerald (`#059669`) strictly for confirmations, Warm Amber (`#d97706`) for ratings/alerts.
- **Typography**: Clean geometric sans-serif (**Plus Jakarta Sans**) with strict optical hierarchy.
- **Elevation**: Refined hairline borders (`border-slate-200`) and subtle box-shadows.

---

## 🔐 Authentication & Profile System

- **Sign In with Mobile OTP**: Enter any 10-digit mobile number with simulated instant 6-digit auto-fill (`492018`).
- **Email & Password & Social Login**: Quick sign-in with Google and Apple integrations.
- **TravelDeck Club Wallet**: **₹600 Instant Welcome Bonus** credited upon registration, reward miles balance, and saved booking history.
- **Session Persistence**: Local state and session persistence across browser reloads.

---

## 💻 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vinaydatta61/travel_web.git
   cd travel_web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
travel-booking-app/
├── index.html                  # HTML entry point with Plus Jakarta Sans
├── package.json                # Dependencies and project scripts
├── vite.config.js              # Vite configuration (port 3000, 0.0.0.0 host)
├── tailwind.config.js          # Tailwind custom palette & tokens
├── postcss.config.js           # PostCSS configuration
└── src/
    ├── main.jsx                # Application root mount
    ├── index.css               # Design system rules, custom scrollbars
    ├── App.jsx                 # Main state orchestrator & view controller
    ├── data/
    │   ├── airports.js         # Domestic & international airport codes
    │   ├── flights.js          # IndiGo 6E schedules, aircraft, & fare rules
    │   ├── trains.js           # ConfirmTkt schedules & prediction scores
    │   ├── cabs.js             # Uber Go/Premier/XL categories & drivers
    │   ├── buses.js            # AbhiBus Zingbus/IntrCity coaches & berths
    │   ├── hotels.js           # Verified luxury hotel properties
    │   └── promos.js           # Discount coupons & holiday packages
    └── components/
        ├── Navbar.jsx          # Header with logo, category pills, & auth
        ├── HeroSearch.jsx      # Multi-modal search card & airport pickers
        ├── SpecialFares.jsx    # Student, Senior Citizen, Armed Forces chips
        ├── FlightCard.jsx      # IndiGo 6E cards with Saver vs Flexi Plus
        ├── FlightFilters.jsx   # Non-stop, airline, and max price filters
        ├── FareCalendar.jsx    # 7-day lowest airfare trend strip
        ├── ConfirmTktSection.jsx # ConfirmTkt waitlist prediction & PNR
        ├── UberCabsSection.jsx # Uber ride options, route map, & driver PIN
        ├── AbhibusSection.jsx  # AbhiBus upper/lower sleeper deck seat map
        ├── HotelCard.jsx       # 4/5-star verified stay listing
        ├── SeatSelectionModal.jsx # Fuselage aircraft seat selector
        ├── BookingModal.jsx    # Unified multi-step checkout & payment
        ├── TicketConfirmation.jsx # Printable boarding pass & QR code
        ├── MyTripsModal.jsx    # Booked itinerary tracker & cancellation
        ├── AuthModal.jsx       # Mobile OTP & Sign in / Sign up system
        ├── LiveBookingToast.jsx # Real-time social proof booking notification
        ├── OffersSection.jsx   # Promotional coupon codes & copy tool
        ├── HolidaysSection.jsx # Curated vacation packages
        └── Footer.jsx          # Official travel disclaimers & links
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
