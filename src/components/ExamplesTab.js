import React from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router } from "react-router-dom";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
// import { MDBScrollspyBox, MDBScrollspyList, MDBScrollspyListItem, MDBScrollspyText, MDBTabContent } from "mdbreact";
// import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
// import {Container, Row, Col } from 'react-bootstrap';
import Intro from './Intro';
import Reactogram from './Reactogram';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';



function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

// 
TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

// 
const theme = createMuiTheme({
  palette: {
    primary: {
    	main: '#73f3a7'
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#73f3a7',
    // backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    fullWidth: false,
    minWidth: 72,
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing.unit * 4,
    fontSize: '3em',
    fontFamily: [
      'Verdana',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#309288',
      // color: '#40a9ff',
      opacity: 1,
    },
	background: '#41c2b5',
    '&$tabSelected': {
      color: 'white',
	    borderBottom: '1px solid #e8e8e8',
		backgroundColor: '#41c2b5',
      // fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'white',
      // color: '#40a9ff',
    },
  },
  tabSelected: {
  	// backgroundColor: 'green',
  },
  typography: {
    // padding: theme.spacing.unit * 3,
  },
}));

// 
// class ExamplesTab extends Component {
function ExamplesTab() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
    	<MDBContainer className="examplesTab">
	    	<MDBRow >
		    	<MDBCol className="examplesTabCol" lg="12">
    				<div className={classes.root} >
    					<MuiThemeProvider theme={theme}>
    						<Tabs indicatorColor="primary" value={value} onChange={handleChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} >
    							<Tab label="Examples" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
    							<Tab label="reactogram" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
    							
    						</Tabs>
    					</MuiThemeProvider>
    					{value === 0 && <TabContainer ><Intro /></TabContainer>}
    					{value === 1 && <TabContainer className={classes.typography}><Reactogram /></TabContainer>}
    					
    				</div>
		    	</MDBCol>
	    	</MDBRow>
    	</MDBContainer>
        
	);
}


export default ExamplesTab;



// 
// render(){
// 	return (
//     	<Container className="examplesTab">
// 	    	<Row className>
// 		    	<Col className="examplesTabCol" xs lg="12">
// 					<div>
						
// 						<Tabs defaultActiveKey="examples" id="uncontrolled-tab-example">
// 							<Tab eventKey="examples" className="tabHeader active" title="Examples">
// 								<Intro />
// 							</Tab>
// 							<Tab eventKey="reactogram" className="tabHeader" title="Reactogram">
// 								<Reactogram />
// 							</Tab>
// 							<Tab eventKey="contact" className="tabHeader" title="Contact">
// 								<div>item 3</div>
// 							</Tab>
// 						</Tabs>
						
// 					</div>
// 		    	</Col>
// 	    	</Row>
//     	</Container>
        
// 	);
// }}

