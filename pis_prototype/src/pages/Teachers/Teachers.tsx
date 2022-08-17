import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { Teacher } from "../../types";
import TeachersTable from "../../components/TeachersTables/TeachersTable";
import CreateTeacher from "../../components/CreateTeacher/CreateTeacher";
import Spinner from "../../components/Spinner/Spinner";

import "./Teachers.scss";

function Teachers() {
	const { isLoading, error, data, refetch } = useQuery(
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

			<CreateTeacher refetchCallback={refetch} />
		</section>
	);
}

export default Teachers;
