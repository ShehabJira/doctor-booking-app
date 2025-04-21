const FilterComponent = ({ specialties, selectedSpecialty, onSpecialtyChange, selectedDay, onDayChange }) => {
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

	return (
		<div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
			<div className="flex-1">
				<label htmlFor="specialty-filter" className="block text-sm font-medium text-gray-700 mb-1">
					Filter by Specialty
				</label>
				<select
					id="specialty-filter"
					value={selectedSpecialty}
					onChange={(e) => onSpecialtyChange(e.target.value)}
					className="block w-full p-2 cursor-pointer border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
					aria-label="Filter doctors by specialty"
				>
					<option value="">All Specialties</option>
					{specialties.map((specialty) => (
						<option key={specialty} value={specialty}>
							{specialty}
						</option>
					))}
				</select>
			</div>

			<div className="flex-1">
				<label htmlFor="day-filter" className="block text-sm font-medium text-gray-700 mb-1">
					Filter by Available Day
				</label>
				<select
					id="day-filter"
					value={selectedDay}
					onChange={(e) => onDayChange(e.target.value)}
					className="block cursor-pointer w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
					aria-label="Filter doctors by available day"
				>
					<option value="">Any Day</option>
					{days.map((day) => (
						<option key={day} value={day}>
							{day}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default FilterComponent;
