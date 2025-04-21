export const specialties = ["General Practitioner", "Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Psychiatrist", "Orthopedic"];

export const doctors = [
	{
		id: 1,
		name: "Dr. Sarah Johnson",
		photo: "/woman-1.jpg",
		specialty: "Cardiologist",
		rating: 4.8,
		location: "Medical Center, NY",
		availableDays: ["Monday", "Wednesday", "Friday"],
	},
	{
		id: 2,
		name: "Dr. James Smith",
		photo: "/man-1.jpg",
		specialty: "General Practitioner",
		rating: 4.9,
		location: "City Hospital, NY",
		availableDays: ["Monday", "Tuesday", "Thursday"],
	},
	{
		id: 3,
		name: "Dr. Emily Davis",
		photo: "/woman-2.jpg",
		specialty: "Dermatologist",
		rating: 4.7,
		location: "Skin Care Clinic, NY",
		availableDays: ["Tuesday", "Wednesday", "Friday"],
	},
	{
		id: 4,
		name: "Dr. Michael Brown",
		photo: "/man-2.jpg",
		specialty: "Neurologist",
		rating: 4.9,
		location: "Neuro Center, NY",
		availableDays: ["Monday", "Thursday", "Friday"],
	},
	{
		id: 5,
		name: "Dr. Lisa Wilson",
		photo: "/woman-3.jpg",
		specialty: "Pediatrician",
		rating: 4.8,
		location: "Children's Hospital, NY",
		availableDays: ["Monday", "Tuesday", "Wednesday"],
	},
	{
		id: 6,
		name: "Dr. Robert Taylor",
		photo: "/man-3.jpg",
		specialty: "Psychiatrist",
		rating: 4.6,
		location: "Mental Health Center, NY",
		availableDays: ["Tuesday", "Thursday", "Friday"],
	},
	{
		id: 7,
		name: "Dr. Amanda Harris",
		photo: "/woman-4.jpg",
		specialty: "Orthopedic",
		rating: 4.7,
		location: "Sports Medicine Center, NY",
		availableDays: ["Monday", "Wednesday", "Thursday"],
	},
];

export const getTimeSlots = (doctorId) => {
	// Generate time slots based on doctor ID for consistency
	const baseHours = [9, 10, 11, 14, 15, 16];
	const today = new Date();

	// Create time slots for the next 5 days
	const timeSlots = [];
	for (let day = 0; day < 5; day++) {
		const date = new Date(today);
		date.setDate(today.getDate() + day);

		// Skip weekends for simplicity
		if (date.getDay() === 0 || date.getDay() === 6) continue;

		// Create 3-4 slots per day
		const daySlots = [];
		const slotsCount = 3 + (doctorId % 2); // 3 or 4 slots based on doctor ID

		for (let i = 0; i < slotsCount; i++) {
			// Use doctor ID to determine which hours are available
			const hourIndex = (i + doctorId) % baseHours.length;
			const hour = baseHours[hourIndex];

			daySlots.push({
				id: `${doctorId}-${date.toDateString()}-${hour}`,
				time: `${hour}:00`,
				date: date.toDateString(),
				available: true,
			});
		}

		timeSlots.push({
			date: date.toDateString(),
			slots: daySlots,
		});
	}

	return timeSlots;
};
