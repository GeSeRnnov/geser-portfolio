import React from 'react';
// import { makeStyles } from '@material-ui/styles';
// import { withStyles } from '@material-ui/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Grid from '@material-ui/core/Grid';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
// import AccountBox from '@material-ui/icons/AccountBox';
// import Assignment from '@material-ui/icons/Assignment';
// import GpsFixed from '@material-ui/icons/GpsFixed';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



function ResumeCard({ content }) {
	
	const classes = {
		card: {
			maxWidth: 400,
		},
		content: {
			backgroundColor: '#f0fbfa',
			boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		icon:{
			fontSize: '5em',
			color: 'white',
		},
		actions: {
			display: 'flex',
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			// transition: theme.transitions.create('transform', {
			//   duration: theme.transitions.duration.shortest,
			// }),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: red[500],
		},
	};
	
	const cardContent = content.cardContent;
	// console.log( Object.keys(cardContent).map(key => {
	// 	return key + ':' + cardContent[key];
	// }) );
	// #e8e8e8
	// #34b969

	// const classes = ершыюзкщзы;
	const [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}

	return (
		<Card className="text-center">
			
			<CardContent className="display-flex" style={{backgroundColor: '#f0fbfa'}}>
				<MDBContainer  fluid>
					<MDBRow className="display-flex justify-content-center text-center mx-auto">
						<MDBCol>
							<Icon className="text-center" style={{fontSize: '5em', color: '#73f3a7'}} >
								{content.icon}
							</Icon>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<div
					className={classnames(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="Show more"
				>
					<h1 className="pt-3 mx-2" style={{borderBottom: '1px solid #999', display: 'inline-block', lineHeight: '0.9', cursor: 'pointer', }} >
						{content.cardHeader}
					</h1>
						

				</div>
			</CardContent>



			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent  style={{backgroundColor: '#f5f5f5'}} >
					<MDBContainer fluid>
						{
							Object.keys(cardContent).map(key => 
								<MDBRow  key={key} >
									<MDBCol lg="4" className="px-0 mx-0 text-left"  >
										{(() => {
											switch(key.slice(0,5)){
												case '_hide': 
													return null;
												default: 
													return <div className="cardKeys">
														 {key.trim()}
													</div>;
											}
										})() }
									</MDBCol>
									<MDBCol lg="8" className="px-0 mx-0  text-left ">
										{(() => {
											switch(cardContent[key].slice(0,5)){
												case '_hide': 
													return <div style={{height: '1em'}} > </div>;
												default: 
													return <div className="cardVals">
														 {cardContent[key]}
													</div>;
											}
										})() }
									</MDBCol>
								</MDBRow >
							)
						}
					</MDBContainer>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default ResumeCard;


// 
					// <IconButton
					// 	className={classnames(classes.expand, {
					// 	[classes.expandOpen]: expanded,
					// 	})}
					// 	onClick={handleExpandClick}
					// 	aria-expanded={expanded}
					// 	aria-label="Show more"
					// >
					// 	<ExpandMoreIcon />
					// </IconButton>
