import React from 'react';
// import PropTypes from 'prop-types';



export default function FilterImage({ settings, children, fName, fSettings, onClick = () =>{} }) {

function getFilter({settings}) {
	let styleFilter = '';
	for(let setting in settings){
		styleFilter += setting === 'hue' ? `${setting}-rotate(${settings[setting]}deg)` : `${setting}(${settings[setting]}%)`;
	}
	return styleFilter;
}

let filtersStr = getFilter({settings});
let filteredStyle = {filter: filtersStr};

return(
	<div className="FilterImage" onClick={() => onClick(fName, settings)} >
		<div style={filteredStyle} >
			<div>
				{children}
			</div>
		</div>
	</div>
);
};
