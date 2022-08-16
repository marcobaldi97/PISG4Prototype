import React, { FC } from "react";

import { Spinner as SpinnerBS } from "react-bootstrap";

interface SpinnerProps {
	isLoading: boolean;
	children: any;
}

const Spinner: FC<SpinnerProps> = (props) => {
	const { isLoading, children } = props;

	if (isLoading) return <SpinnerBS animation="grow" />;
	else return children;
};

export default Spinner;
