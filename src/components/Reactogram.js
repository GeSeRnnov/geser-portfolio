import React from 'react';
import Image from './reactogram/Image';
import FilterImage from './reactogram/FilterImage';
import FilterList from './reactogram/FilterList';
import ReactoSettings from './reactogram/Settings';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


Element.prototype.getElementById = function(id) {
    return document.getElementById(id);
}

const styleMine = {minHeight: '80vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' };

class Reactogram extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			img: './img/yoda.jpg',
			selectedFilter: '',
			settings: {
				brightness: 100,
				contrast: 100,
				saturate: 100,
				hue: 0,
				sepia: 0
			}

		};

		this.handleChange = this.handleChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
	}

	handleFilterUpdate = (FName, FSettings) => {
		this.setState({
			selectedFilter: FName,
			settings: FSettings,
		});
	}


	handleReset = () => {
		let settings = {
			brightness: 100,
				contrast: 100,
				saturate: 100,
				hue: 0,
				sepia: 0
		}

		this.setState({ settings});
	}

	handleChange = (e, vl, setting) => {
		let settingValue = parseInt(vl) ;
		const settings = {...this.state.settings, [setting]: Number(settingValue)};
		this.setState({
			selectedFilter: '', 
			settings
		});
	}

	render(){
		return(
			<MDBContainer className="mx-0 mt-2" fluid>
				<MDBRow>
					<MDBCol lg="2">
						<ReactoSettings settings={this.state.settings} handleChange={this.handleChange} handleReset={this.handleReset} />
					</MDBCol>
					<MDBCol lg="8" className="pr-lg-1" >
						<FilterImage settings={this.state.settings} >
							<Image src={this.state.img} fStyle={styleMine}/>
						</FilterImage>
					</MDBCol>
					<MDBCol lg="2" sm="12" className="px-lg-1" >
						<FilterList src={this.state.img} selectFilter={this.handleFilterUpdate}  />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
};


export default Reactogram;
