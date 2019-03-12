import React from 'react';
import PropTypes from 'prop-types';
import { MDBDataTable } from 'mdbreact';

export default function ResultTable({ data }) {
	return(
		<MDBDataTable
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
			
ResultTable.propTypes ={
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			field: PropTypes.string,
			sort: PropTypes.string,
		})
	),
	rows: PropTypes.arrayOf(
		PropTypes.shape({
			month: PropTypes.string,
			payment: PropTypes.string,
			principal: PropTypes.string,
			interest: PropTypes.string,
			totalInterest: PropTypes.string,
		})
	),
}
