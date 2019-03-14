import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Intro from './Intro';
import Reactogram from './Reactogram';
import CredCalc from './CredCalc';
import DragNDrop from './DragNDrop';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default function ExamplesTab() {
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
    						<Tabs 
                  indicatorColor="primary" 
                  value={value} 
                  onChange={handleChange} 
                  classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} 
                  variant="scrollable"
                  scrollButtons="auto"
                >
    							<Tab label="Examples" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                  <Tab label="reactogram" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                  <Tab label="cred. calc." classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                  <Tab label="DragNDrop" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
    						</Tabs>
    					</MuiThemeProvider>
    					{value === 0 && <TabContainer ><Intro /></TabContainer>}
              {value === 1 && <TabContainer className={classes.typography}><Reactogram /></TabContainer>}
              {value === 2 && <TabContainer className={classes.typography}><CredCalc /></TabContainer>}
              {value === 3 && <TabContainer className={classes.typography} ><DragNDrop /></TabContainer>}
    				</div>
		    	</MDBCol>
	    	</MDBRow>
    	</MDBContainer>
        
	);
};


// Styles, themes and tab container.
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 1 * 1 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const theme = createMuiTheme({
  palette: {
    primary: { main: '#73f3a7' },
    secondary: { main: '#f44336' },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#73f3a7',
  },
  tabRoot: {
    textTransform: 'initial',
    fullWidth: false,
    minWidth: 72,
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
      opacity: 1,
    },
  background: '#41c2b5',
    '&$tabSelected': {
      color: 'white',
      borderBottom: '1px solid #e8e8e8',
    backgroundColor: '#41c2b5',
    },
    '&:focus': {
      color: 'white',
    },
  },
  tabSelected: {
  },
  typography: {
  },
}));






