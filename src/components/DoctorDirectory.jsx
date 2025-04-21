import { useState } from "react";
import DoctorCard from "./DoctorCard";
import FilterComponent from "./FilterComponent";
import { doctors, specialties } from "../data/mockData";

const DoctorDirectory = () => {
	const [selectedSpecialty, setSelectedSpecialty] = useState("");
	const [selectedDay, setSelectedDay] = useState("");

	const filteredDoctors = doctors.filter((doctor) => {
		const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
		const matchesDay = !selectedDay || doctor.availableDays.includes(selectedDay);
		return matchesSpecialty && matchesDay;
	});

	return (
		<section aria-labelledby="doctor-directory-heading" className="py-8">
			<h2 id="doctor-directory-heading" className="text-2xl font-bold mb-6 text-gray-800">
				Find a Doctor
			</h2>

			<FilterComponent
				specialties={specialties}
				selectedSpecialty={selectedSpecialty}
				onSpecialtyChange={setSelectedSpecialty}
				selectedDay={selectedDay}
				onDayChange={setSelectedDay}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite">
				{filteredDoctors.length > 0 ? (
					filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
				) : (
					<p className="col-span-full text-center py-8 text-gray-600">No doctors found matching your criteria. Please try different filters.</p>
				)}
			</div>
		</section>
	);
};

export default DoctorDirectory;
