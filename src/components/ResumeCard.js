import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


function ResumeCard(props) {
	const content = props.content.filter(card => card.category === props.category )[0] ;
	const [expanded, setExpanded] = React.useState(false);
	
	// Filling dropdown field
	const CardContentElement = ({ cardContent }) => {
		return Object.keys(cardContent).map(key => 
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
					}})() }
				</MDBCol>
			</MDBRow >
		)
	}

	// 
	const handleExpandClick = () => {
		setExpanded(!expanded);
	}

	return (
		<Card className="text-center">
			<CardContent className="display-flex" style={{backgroundColor: '#f0fbfa'}}>
				<MDBContainer  fluid>
					<MDBRow>
						<MDBCol>
							<Icon className="text-center" style={{fontSize: '5em', color: '#73f3a7'}} >
								{ content ? content.icon : null }
							</Icon>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<div onClick={handleExpandClick} aria-expanded={expanded} aria-label="Show more" >
					<h1 className="cardsHeader pt-3 mx-2" style={{}} >
						{ content ? content.cardHeader : null }
					</h1>
				</div>
			</CardContent>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent  style={{backgroundColor: '#f5f5f5'}} >
					<MDBContainer fluid>
						{
							content ? <CardContentElement cardContent={content.cardContent} /> : null
						}
					</MDBContainer>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default ResumeCard;


ResumeCard.propTypes = {
	category: PropTypes.string.isRequired,
	content: PropTypes.arrayOf( PropTypes.shape({
		icon: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		cardHeader: PropTypes.string.isRequired,
		cardContent: PropTypes.arrayOf(
			PropTypes.string,
		).isRequired,
	})),
}


