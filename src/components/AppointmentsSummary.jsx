import { useAppointments } from "../context/AppointmentContext";

const AppointmentsSummary = () => {
	const { appointments } = useAppointments();

	return (
		<section aria-labelledby="appointments-heading" className="py-8">
			<h2 id="appointments-heading" className="text-2xl font-bold mb-6 text-gray-800">
				My Appointments
			</h2>

			{appointments.length === 0 ? (
				<div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
					<p className="text-gray-600">You don't have any appointments yet.</p>
					<p className="mt-2 text-gray-600">Book an appointment with a doctor to get started.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{appointments.map((appointment) => (
						<div key={appointment.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-transform hover:shadow-md">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="font-bold text-gray-800">{appointment.doctorName}</h3>
									<p className="text-blue-600">{appointment.doctorSpecialty}</p>
								</div>
								<div className="text-right">
									<p className="font-medium">
										{new Date(appointment.date).toLocaleDateString("en-US", {
											weekday: "short",
											month: "short",
											day: "numeric",
										})}
									</p>
									<p className="text-gray-600">{appointment.time}</p>
								</div>
							</div>

							<p className="mt-2 text-gray-600">{appointment.doctorLocation}</p>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default AppointmentsSummary;
