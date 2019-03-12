import React from 'react';
import PropTypes from 'prop-types';
import MySlider from './MySlider'
import { MDBBtn } from "mdbreact";


export default function ReactoSettings(props) {
	const { settings, handleChange, handleReset } = {...props}
	return(
		<aside className="reactoSettings">
			<MySlider className="reactoSlider" name='brightness' value={settings['brightness']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='contrast' value={settings['contrast']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='saturate' value={settings['saturate']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='hue' value={settings['hue']} min={-360} max={360} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='sepia' value={settings['sepia']} min={0} max={100} step={0.1}  handleChange={handleChange}  />
			<MDBBtn  onClick={handleReset} >Reset</MDBBtn>			
		</aside>
	);
};

ReactoSettings.propTypes = {
	settings: PropTypes.shape({
		brightness: PropTypes.number.isRequired,
		contrast: PropTypes.number.isRequired,
		saturate: PropTypes.number.isRequired,
		hue: PropTypes.number.isRequired,
		sepia: PropTypes.number.isRequired,
	}),
	handleChange: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
}
