import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from "react-query";

import { Subject, Teacher } from "../../types";
import Spinner from "../Spinner/Spinner";

import "./CreateTeacher.scss";

interface CreateTeacherProps {
	refetchCallback: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<Teacher[], unknown>>
}

export default function CreateTeacher(props: CreateTeacherProps) {
	const { refetchCallback } = props

	const {isLoading, mutate} = useMutation((newTeacher: Teacher) => {
		return axios.post('http://localhost:3000/teachers', newTeacher)
	})

	const handleSubmit = (event: any) => {
		const { target } = event;

		event.preventDefault();

		const ci: string = target.ci.value;
		const firstName: string = target.firstName.value;
		const lastName: string = target.lastName.value;
		const subjects: Subject[] = (target.subjects.value as string)
			.split(",")
			.map((subject) => ({
				name: subject.trim(),
			}));

		mutate({ci,firstName,lastName,subjects})
		refetchCallback()

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
					<Spinner isLoading={isLoading}>
						Submit New Teacher
					</Spinner>
			</Button>
		</Form>
	);
}
