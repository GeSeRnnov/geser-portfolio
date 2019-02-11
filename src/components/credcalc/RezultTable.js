import React from 'react';
import { MDBDataTable } from 'mdbreact';

export default function RezultTable({ data }) {
	return(
		<MDBDataTable
			scrollY
			maxHeight="30vh"
			striped
			bordered
			small
			entries={100}
			searching={false}
			data={data}
		/>
	);
};