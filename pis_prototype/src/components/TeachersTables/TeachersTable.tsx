import React from "react";
import { Badge, Table } from "react-bootstrap";

import { Teacher } from "../../types";

interface TeachersTableProps {
	teachers: Teacher[];
}

export default function TeachersTable(props: TeachersTableProps) {
	const { teachers } = props;

	return (
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th>CI</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Subjects</th>
				</tr>
			</thead>
			<tbody>
				{teachers.map((teacher) => (
					<tr>
						<td>{teacher.ci}</td>
						<td>{teacher.firstName}</td>
						<td>{teacher.lastName}</td>
						<td>
							{teacher.subjects.map((subject) => (
								<Badge bg="success">{subject.name}</Badge>
							))}
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
