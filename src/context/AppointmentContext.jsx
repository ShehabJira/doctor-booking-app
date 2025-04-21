import { createContext, useState, useContext } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
	const [appointments, setAppointments] = useState([]);
	const [selectedDoctor, setSelectedDoctor] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const bookAppointment = (doctor, timeSlot) => {
		const newAppointment = {
			id: `appointment-${Date.now()}`,
			doctorId: doctor.id,
			doctorName: doctor.name,
			doctorSpecialty: doctor.specialty,
			doctorLocation: doctor.location,
			date: timeSlot.date,
			time: timeSlot.time,
		};

		setAppointments([...appointments, newAppointment]);
	};

	const openBookingModal = (doctor) => {
		setSelectedDoctor(doctor);
		setIsModalOpen(true);
	};

	const closeBookingModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppointmentContext.Provider
			value={{
				appointments,
				selectedDoctor,
				isModalOpen,
				bookAppointment,
				openBookingModal,
				closeBookingModal,
			}}
		>
			{children}
		</AppointmentContext.Provider>
	);
};

export const useAppointments = () => useContext(AppointmentContext);
