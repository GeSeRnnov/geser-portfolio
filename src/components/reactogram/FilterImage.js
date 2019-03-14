import React from 'react';
import PropTypes from 'prop-types';

export function getFilter({settings}) {
	let styleFilter = '';
	for(let setting in settings){
		styleFilter += setting === 'hue' ? `${setting}-rotate(${settings[setting]}deg)` : `${setting}(${settings[setting]}%)`;
	}
	return styleFilter;
}

export default function FilterImage({ settings, children, fName, fSettings, onClick = () =>{} }) {



let filtersStr = getFilter({settings});
let filteredStyle = {filter: filtersStr};

return(
	<div className="FilterImage" onClick={() => onClick(fName, settings)}>
		<div style={filteredStyle} >
			<div onClick={onClick} >
				{children}
			</div>
		</div>
	</div>
);
};

// 
FilterImage.propTypes = {
	settings: PropTypes.shape({
		brightness: PropTypes.number.isRequired,
		contrast: PropTypes.number.isRequired,
		saturate: PropTypes.number.isRequired,
		hue: PropTypes.number.isRequired,
		sepia: PropTypes.number.isRequired,
	}),
	children: PropTypes.object.isRequired
}