import React from 'react';
import PropTypes from 'prop-types';
import MySlider from './MySlider'
import { MDBBtn } from "mdbreact";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { handleSave, handleLoad } from './ReactoProcess'

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#2bbbad' },
  },
});

export default function ReactoSettings(props) {
	const { image, settings, handleChange, handleReset, handleLoader, imageName } = {...props}

	const [state, setState] = React.useState({ isNewWndw: true });

	const toggleCheckbox = name => event => {
	    setState({ ...state, [name]: event.target.checked });
	  };

	return(
		<aside className="reactoSettings">
			<MySlider className="reactoSlider" name='brightness' value={settings['brightness']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='contrast' value={settings['contrast']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='saturate' value={settings['saturate']} min={0} max={200} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='hue' value={settings['hue']} min={-360} max={360} step={0.1}  handleChange={handleChange}  />
			<MySlider className="reactoSlider" name='sepia' value={settings['sepia']} min={0} max={100} step={0.1}  handleChange={handleChange}  />
			<MDBBtn  onClick={handleReset} >Reset</MDBBtn>			
			<MDBBtn  onClick={() => handleSave(image, settings, imageName, state.isNewWndw )} >Save</MDBBtn>			
			<MDBBtn  >
				<input style={{display: 'none', margin: '0px!important'}} type="file" name="chooseFile" id="chooseFile" onChange={(e) => handleLoad(e, handleLoader)} />
				<label className="reactoChooseFile" for="chooseFile">Load</label>
			</MDBBtn>
			<MuiThemeProvider theme={theme}>
				<FormControlLabel
			        control={
		          		<Checkbox
			            	checked={state.isNewWndw}
		            		onChange={toggleCheckbox('isNewWndw')}
			            
						/>
			        }
			        label="Open in new window."
		      	/>
			</MuiThemeProvider>
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
