import React from 'react';
import PropTypes from 'prop-types';
import MySlider from './MySlider'
import { MDBBtn } from "mdbreact";
import { getFilter } from './FilterImage';


const handleSave = (image, settings) => {
	const img = new Image();
	img.crossOrigin = 'Anonymous';
	img.src = image;
	const fName = image.match(/([a-zA-Zа-яА-Я0-9\s_\\.\-\(\):])+(.jpg|.png|.gif|.tiff)$/i);
	const sName = fName[0].replace(/\.\w/i,"_reacted$&")
	console.log('imgNm', fName, sName);

	img.onload = () => {

		const myCanvas = document.createElement('canvas');
		myCanvas.id = 'canvas';
		myCanvas.width = img.width || 1600;
		myCanvas.height = img.height || 900;
		
		document.body.appendChild(myCanvas);
		const ctx = document.getElementById('canvas').getContext('2d');
		ctx.filter = getFilter({settings});
		ctx.drawImage(img,0,0);

		const dwnldLink = document.createElement('a');
		dwnldLink.setAttribute('href', myCanvas.toDataURL("img/jpg"));
		dwnldLink.setAttribute('download', sName);
		dwnldLink.innerHTML = 'click';
		document.body.appendChild(dwnldLink);
		dwnldLink.click();
		document.body.removeChild(dwnldLink);
		document.body.removeChild(myCanvas);

	}

}

export default function ReactoSettings(props) {
	const { image, settings, handleChange, handleReset } = {...props}
	return(
		<aside className="reactoSettings">
			<MySlider className="reactoSlider" name='brightness' value={settings['brightness']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='contrast' value={settings['contrast']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='saturate' value={settings['saturate']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='hue' value={settings['hue']} min={-360} max={360} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='sepia' value={settings['sepia']} min={0} max={100} step={0.1}  handleChange={handleChange}  />
			<MDBBtn  onClick={handleReset} >Reset</MDBBtn>			
			<MDBBtn  onClick={() => handleSave(image, settings)} >Save</MDBBtn>			
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
