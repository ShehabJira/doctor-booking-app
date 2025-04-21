import { useState } from "react";
import { AppointmentProvider } from "./context/AppointmentContext";
import DoctorDirectory from "./components/DoctorDirectory";
import BookingModal from "./components/BookingModal";
import AppointmentsSummary from "./components/AppointmentsSummary";

function App() {
	const [activeTab, setActiveTab] = useState("doctors");

	return (
		<AppointmentProvider>
			<div className="min-h-screen bg-gray-100 text-gray-900">
				<header className="bg-white shadow-sm">
					<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-blue-700">MediBook</h1>
						<p className="text-gray-600">Find and book appointments with top doctors</p>
					</div>
				</header>

				<main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<div className="mb-6 border-b border-gray-200">
						<nav className="flex space-x-8" aria-label="Tabs">
							<button
								onClick={() => setActiveTab("doctors")}
								className={`py-4 px-1 cursor-pointer border-b-2 font-medium text-lg ${
									activeTab === "doctors" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
								}`}
								aria-current={activeTab === "doctors" ? "page" : undefined}
							>
								Find Doctors
							</button>
							<button
								onClick={() => setActiveTab("appointments")}
								className={`py-4 px-1 cursor-pointer border-b-2 font-medium text-lg ${
									activeTab === "appointments" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
								}`}
								aria-current={activeTab === "appointments" ? "page" : undefined}
							>
								My Appointments
							</button>
						</nav>
					</div>

					{activeTab === "doctors" ? <DoctorDirectory /> : <AppointmentsSummary />}

					<BookingModal />
				</main>

				<footer className="bg-white shadow-inner mt-12">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<p className="text-center text-gray-500">&copy; 2025 MediBook - Find and book medical appointments easily.</p>
					</div>
				</footer>
			</div>
		</AppointmentProvider>
	);
}

export default App;
