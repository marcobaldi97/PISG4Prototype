import React, { useState } from "react";
import { Badge, Button, Form, Table } from "react-bootstrap";

interface Subject {
	name: string;
}

interface Teacher {
	ci: string;
	firstName: string;
	lastName: string;
	subjects: Subject[];
}

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

	const handleSubmit = (event: any) => {
		event.preventDefault();

		alert("assd");

		const { target } = event;

		const ci: string = target.ci.value;
		const firstName: string = target.firstName.value;
		const lastName: string = target.lastName.value;
		const subjects: Subject[] = (target.subjects.value as string)
			.replaceAll(" ", "")
			.split(",")
			.map((subject) => ({
				name: subject,
			}));

		setTeachers([
			...teachers,
			{
				ci,
				firstName,
				lastName,
				subjects,
			},
		]);
	};

	return (
		<section>
			<h2>Teachers</h2>

			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>ci</th>
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

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="ci">
					<Form.Label>CI</Form.Label>
					<Form.Control type="text" placeholder="x.xxx.xxx-x" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="First Name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" placeholder="Last Name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="subjects">
					<Form.Label>Subjects</Form.Label>
					<Form.Control
						type="text"
						placeholder="Math, IT, History..."
					/>
				</Form.Group>

				<Button variant="success" type="submit">
					Submit New Teacher
				</Button>
			</Form>
		</section>
	);
}

export default Teachers;
