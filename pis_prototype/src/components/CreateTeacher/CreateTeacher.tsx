import React from "react";
import { Button, Form } from "react-bootstrap";

import { Subject, Teacher } from "../../types";

import "./CreateTeacher.scss";

interface CreateTeacherProps {
	teachers: Teacher[];
	setTeachers: (teachers: Teacher[]) => void;
}

export default function CreateTeacher(props: CreateTeacherProps) {
	const { teachers, setTeachers } = props;

	const handleSubmit = (event: any) => {
		event.preventDefault();

		const { target } = event;

		const ci: string = target.ci.value;
		const firstName: string = target.firstName.value;
		const lastName: string = target.lastName.value;
		const subjects: Subject[] = (target.subjects.value as string)
			.split(",")
			.map((subject) => ({
				name: subject.trim(),
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

		target.ci.value = '';
		target.firstName.value = '';
		target.lastName.value = '';
		target.subjects.value = '';
	};

	return (
		<Form className="create-teacher" onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="ci">
				<Form.Label>CI</Form.Label>
				<Form.Control size="sm" type="text" placeholder="x.xxx.xxx-x" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="firstName">
				<Form.Label>First Name</Form.Label>
				<Form.Control size="sm" type="text" placeholder="First Name" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="lastName">
				<Form.Label>Last Name</Form.Label>
				<Form.Control size="sm" type="text" placeholder="Last Name" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="subjects">
				<Form.Label>Subjects</Form.Label>

				<Form.Control
					size="sm"
					type="text"
					placeholder="Math, IT, History..."
				/>
			</Form.Group>

			<Button
				className="submit-button"
				variant="success"
				size="sm"
				type="submit">
				Submit New Teacher
			</Button>
		</Form>
	);
}
