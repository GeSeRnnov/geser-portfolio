import React from 'react';
import PropTypes from 'prop-types';



export default function Image(props) {

const { src, fStyle } = { ...props }
let image = {backgroundImage: `url(${src})`, minHeight: '35vh'};
let style = {...image, ...fStyle };

return(
	<div className="reactImage">
		<div style={style}   ></div>
	</div>
);
};


Image.propTypes = {
	src: PropTypes.string.isRequired,
	fStyle: PropTypes.any.isRequired,
}

