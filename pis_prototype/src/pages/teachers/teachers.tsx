import React, { useState } from "react";

import { Teacher } from "../../types";
import TeachersTable from "../../components/TeachersTables/TeachersTable";
import CreateTeacher from "../../components/CreateTeacher/CreateTeacher";
import Spinner from "../../components/Spinner/Spinner";

import "./Teachers.scss";

function Teachers() {
	const [teachers, setTeachers] = useState<Teacher[]>([
		{
			ci: "1231234",
			firstName: "Mark",
			lastName: "Von Baldi",
			subjects: [{ name: "Maths" }, { name: "IT" }],
		},
		{
			ci: "4321321",
			firstName: "Nacho",
			lastName: "Carmona",
			subjects: [{ name: "English" }],
		},
	]);
	const [loading, setLoading] = useState(false);

	return (
		<section className="teachers">
			<h2>Teachers</h2>

			<Spinner isLoading={loading}>
				<TeachersTable teachers={teachers} />

				<CreateTeacher teachers={teachers} setTeachers={setTeachers} />
			</Spinner>
		</section>
	);
}

export default Teachers;
