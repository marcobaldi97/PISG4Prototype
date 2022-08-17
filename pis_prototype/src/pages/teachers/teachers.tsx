import React, { useState } from "react";
import axios from "axios";

import { Teacher } from "../../types";
import TeachersTable from "../../components/TeachersTables/TeachersTable";
import CreateTeacher from "../../components/CreateTeacher/CreateTeacher";
import Spinner from "../../components/Spinner/Spinner";

import "./Teachers.scss";
import { useQuery } from "react-query";

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

	const { isLoading, error, data } = useQuery(
		["teachersFetch"],
		async (): Promise<Teacher[]> => {
			const response = await axios.get("http://localhost:3000/teachers");

			return response.data;
		}
	);

	if (isLoading || error || !data) return <Spinner isLoading />;

	return (
		<section className="teachers">
			<h2>Teachers</h2>

			<TeachersTable teachers={data} />

			<CreateTeacher teachers={teachers} setTeachers={setTeachers} />
		</section>
	);
}

export default Teachers;
