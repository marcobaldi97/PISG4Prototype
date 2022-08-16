import React from "react";
import { Badge, Button, Table } from "react-bootstrap";

import { Teacher } from "../../types";

import "./TeachersTable.scss";

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
					<th></th>
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
								<Badge className="badge" bg="success">
									{subject.name}
								</Badge>
							))}
						</td>
						<td>
							<Button size="sm" variant="danger">
								Delete
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
