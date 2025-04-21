# Doctor Booking UI Module

A responsive and accessible appointment booking UI for a healthcare platform built with Vite and React.

## Table of Contents

- [Features](#features)
- [Accessibility Features](#accessibility-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Setup Instructions](#setup-instructions)
- [How AI Tools Were Used](#how-ai-tools-were-used)
- [Development Notes](#development-notes)

## Features

- **Doctor Directory View**: Browse and filter doctors by specialty and availability
- **Booking Modal**: Select time slots and book appointments with doctors
- **Appointments Summary**: View all your booked appointments

## Accessibility Features

- Keyboard navigable components
- ARIA attributes for screen readers
- Responsive design (mobile, tablet, desktop)
- Focus management and visible focus styles
- Semantic HTML structure

## Tech Stack

- **Framework**: React + Vite
- **Styling**: TailwindCSS
- **State Management**: React Context API

## Project Structure

```
doctor-booking-app/
├── src/
│ ├── components/
│ │ ├── DoctorCard.jsx
│ │ ├── DoctorDirectory.jsx
│ │ ├── BookingModal.jsx
│ │ ├── AppointmentsSummary.jsx
│ │ └── FilterComponent.jsx
│ ├── context/
│ │ └── AppointmentContext.jsx
│ ├── data/
│ │ └── mockData.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
├── README.md
└── vite.config.js
```

## Live Demo

Check out the live version here: [Doctor Booking App](https://doctor-booking-app-shehab.netlify.app)

## Setup Instructions

1. Clone this repository:

```bash
git clone https://github.com/ShehabJira/doctor-booking-app.git
cd doctor-booking-app
```

2. Install dependencies:

```bash
   npm install
```

3. Run the development server:

```bash
   npm run dev
```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

## How AI Tools Were Used

- **Component Structure**: AI was used to scaffold the initial component structure and relationships

- **Mock Data Generation**: AI generated realistic mock data for doctors and appointments

- **Accessibility Enhancement**: AI helped implement ARIA attributes and keyboard navigation

- **Responsive Design**: AI assisted with creating responsive layouts across various screen sizes

## Development Notes

- All data is mocked and stored in memory - no backend connection

- Context API is used for state management instead of Zustand

- TailwindCSS is used for styling all components
