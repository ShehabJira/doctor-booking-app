import { useState } from "react";
import { useAppointments } from "../context/AppointmentContext";
import { getTimeSlots } from "../data/mockData";

const BookingModal = () => {
	const { selectedDoctor, isModalOpen, closeBookingModal, bookAppointment } = useAppointments();
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
	const [activeDate, setActiveDate] = useState(null);

	if (!isModalOpen || !selectedDoctor) return null;

	const timeSlots = getTimeSlots(selectedDoctor.id);

	// Set the first date as active if none is selected
	if (!activeDate && timeSlots.length > 0) {
		setActiveDate(timeSlots[0].date);
	}

	const handleConfirm = () => {
		if (!selectedTimeSlot) return;

		bookAppointment(selectedDoctor, selectedTimeSlot);
		closeBookingModal();
		// Show success feedback
		alert(`Appointment booked with ${selectedDoctor.name} on ${selectedTimeSlot.date} at ${selectedTimeSlot.time}`);
	};

	return (
		<div
			className="fixed inset-0 bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4 z-50"
			onClick={closeBookingModal}
			role="dialog"
			aria-modal="true"
			aria-labelledby="booking-modal-title"
		>
			<div className="bg-[#f9fafb] rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
				<div className="p-6">
					<h3 id="booking-modal-title" className="text-xl font-bold mb-4 text-gray-800">
						Book an Appointment with {selectedDoctor.name}
					</h3>

					<div className="flex items-center gap-4 mb-6">
						<img src={selectedDoctor.photo} alt={selectedDoctor.name} className="w-16 h-16 rounded-full object-cover" />
						<div>
							<p className="font-medium text-blue-600">{selectedDoctor.specialty}</p>
							<p className="text-sm text-gray-600">{selectedDoctor.location}</p>
						</div>
					</div>

					<div>
						<h4 className="font-medium mb-3 text-gray-700">Select Date</h4>
						<div className="flex gap-2 overflow-x-auto pb-2">
							{timeSlots.map((dateSlot) => (
								<button
									key={dateSlot.date}
									className={`px-4 py-2 rounded-md cursor-pointer shrink-0 border ${
										activeDate === dateSlot.date ? "bg-blue-100 border-blue-500 text-blue-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
									}`}
									onClick={() => setActiveDate(dateSlot.date)}
									aria-pressed={activeDate === dateSlot.date}
								>
									{new Date(dateSlot.date).toLocaleDateString("en-US", {
										weekday: "short",
										month: "short",
										day: "numeric",
									})}
								</button>
							))}
						</div>
					</div>

					<div className="mt-6">
						<h4 className="font-medium mb-3 text-gray-700">Available Time Slots</h4>
						<div className="grid grid-cols-3 gap-2">
							{timeSlots
								.find((dateSlot) => dateSlot.date === activeDate)
								?.slots.map((slot) => (
									<button
										key={slot.id}
										className={`py-2 rounded-md border cursor-pointer ${
											selectedTimeSlot?.id === slot.id ? "bg-blue-600 text-white border-blue-700" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
										}`}
										onClick={() => setSelectedTimeSlot(slot)}
										disabled={!slot.available}
										aria-pressed={selectedTimeSlot?.id === slot.id}
									>
										{slot.time}
									</button>
								))}
						</div>
					</div>

					<div className="mt-8 flex gap-4">
						<button className="flex-1 py-2 border cursor-pointer border-gray-300 rounded-md hover:bg-gray-50 text-gray-700" onClick={closeBookingModal}>
							Cancel
						</button>
						<button
							className={`flex-1 py-2 rounded-md cursor-pointer ${
								!selectedTimeSlot ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
							}`}
							onClick={handleConfirm}
							disabled={!selectedTimeSlot}
							aria-label="Confirm appointment booking"
						>
							Confirm Booking
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
