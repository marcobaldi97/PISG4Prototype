import React, { useState } from "react";
import { Badge, Button, Form, Table } from "react-bootstrap";

import { Subject, Teacher } from "../../types";
import TeachersTable from "../../components/TeachersTables/TeachersTable";
import CreateTeacher from "../../components/CreateTeacher/CreateTeacher";

function Teachers() {
	const [teachers, setTeachers] = useState<Teacher[]>([
		{
			ci: "1231234",
			firstName: "Mark",
			lastName: "Von Baldi",
			subjects: [{ name: "Math" }, { name: "IT" }],
		},
		{
			ci: "4321321",
			firstName: "Nacho",
			lastName: "Carmona",
			subjects: [{ name: "English" }],
		},
	]);

	return (
		<section>
			<h2>Teachers</h2>

			<TeachersTable teachers={teachers} />

			<CreateTeacher teachers={teachers} setTeachers={setTeachers} />
		</section>
	);
}

export default Teachers;
