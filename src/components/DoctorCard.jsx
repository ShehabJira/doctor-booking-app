import { useAppointments } from "../context/AppointmentContext";

const DoctorCard = ({ doctor }) => {
	const { openBookingModal } = useAppointments();

	return (
		<div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:scale-[1.01] border border-gray-200">
			<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
				<img src={doctor.photo} alt={`Dr. ${doctor.name}`} className="w-24 h-24 rounded-full object-cover" loading="lazy" />
				<div className="flex-1 text-center md:text-left">
					<h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
					<p className="text-blue-600 font-medium">{doctor.specialty}</p>

					<div className="flex items-center justify-center md:justify-start mt-1">
						<span className="text-yellow-500 mr-1">★</span>
						<span className="text-gray-700">{doctor.rating}</span>
					</div>

					<p className="text-gray-600 mt-1">{doctor.location}</p>

					<div className="mt-2">
						<p className="text-sm text-gray-600">Available on: </p>
						<p className="text-sm font-medium">{doctor.availableDays.join(", ")}</p>
					</div>
				</div>
			</div>

			<button
				onClick={() => openBookingModal(doctor)}
				className="w-full mt-4 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
				aria-label={`Book appointment with ${doctor.name}`}
			>
				Book Appointment
			</button>
		</div>
	);
};

export default DoctorCard;
