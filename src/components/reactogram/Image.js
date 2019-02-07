import React from 'react';
// import PropTypes from 'prop-types';



export default function Image({ src, fName, fStyle }) {

let image = {backgroundImage: `url(${src})`, minHeight: '35vh'};
const title = fName ? fName : '';
// const imageStyle={style}
// const style2 = {minHeight: '35vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionY: 'center' };
let style = {...image, ...fStyle };
// console.log('fStyle', fStyle);

return(
	<div className="reactImage">
		<div style={style} title={title}  ></div>
	</div>
);
};


			// <img src={require(`${props.src}`)} alt="reactogram image"/>

		// <img src={require('../yoda.jpg')} />


