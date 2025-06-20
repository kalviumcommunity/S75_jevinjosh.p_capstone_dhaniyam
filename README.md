# Dhaniyam – Ration Stock & Appointment Manager

##  Project Overview
**Dhaniyam** is a web-based platform designed to improve the public ration distribution system. It enables families to efficiently track stock availability, book appointments, and manage ration collection without standing in long queues. The system is tailored for accessibility and ease of use, especially in urban and semi-urban areas.

##  Tech Stack

### 🔹 Frontend
- React.js (JSX)
- Tailwind CSS
- React Router DOM
- Day.js / React-Date-Picker

###  Backend
- Node.js with Express.js
- JWT Authentication
- OTP Verification via Aadhar and Phone

###  Database
- MongoDB Atlas

###  Other Integrations
- Google Maps / OpenStreetMap API
- Firebase Cloud Messaging *(optional)*
- LocalStorage for offline access

##  Development Schedule (7-Day Plan)
| Day | Task |
|-----|------|
| 1 | Setup project structure, GitHub repo, and initial design planning |
| 2 | Build Login & Signup Pages with Aadhar and OTP support |
| 3 | Create Stock Page with item listing and filters |
| 4 | Implement Appointment Booking UI with date, time, and center selection |
| 5 | Develop Location Page with manual address input and map support |
| 6 | Design Profile, Timings Page, and History section |
| 7 | Finalize UI polish, test features, and fix bugs |

##  Key Features
- OTP Login using Aadhar and Phone Number
- Stock Availability Dashboard
- Appointment Booking with Date, Time Slot, and Center selection
- Live Queue Tracking
- Ration Center Locator (manual input + map view)
- User Profile with Appointment History
- Ration Collection Timings
- Express Queue for elderly or differently-abled users
- Mobile-Responsive UI
- Multi-language Support
- Offline Access for Past Records *(optional)*
- Notifications for Appointment Reminders *(optional)*

##  Deployment
- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway
- **Database**: MongoDB Atlas
- **Domain**: Custom via Vercel/Netlify (optional)

---

 *Note: Address input for appointments is manual. Users must enter their ration address to see relevant nearby centers instead of random suggestions.*