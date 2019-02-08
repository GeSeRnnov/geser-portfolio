import React from 'react';
// import PropTypes from 'prop-types';
import Image from './Image';
import FilterImage from './FilterImage';



export default function FilterList({ src, selectFilter }) {

	const fListSettings = [
		{	name: 'light',
			settings:{
				brightness: 150,
				contrast: 110,
				saturate: 100,
				hue: 0,
				sepia: 0,
			},
		},
		{	name: 'dark',
			settings:{
				brightness: 50,
				contrast: 150,
				saturate: 66,
				hue: 0,
				sepia: 0,
			},
		},
		{	name: 'whiteout',
			settings:{
				brightness: 173,
				contrast: 32,
				saturate: 0,
				hue: 0,
				sepia: 0,
			},
		},
		{	name: 'vintage',
			settings:{
				brightness: 89,
				contrast: 164,
				saturate: 66,
				hue: 0,
				sepia: 66,
			},
		},
	];

	const style = {minHeight: '17vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' };
	// const style = fStyleMine ? fStyle : {...fStyleMine};
	// console.log('fStyleMine',fStyleMine);

	return(
		<div>
			{
				fListSettings.map( filter => 
					<div 
						key={filter.name}
						 
					>
						<div>
							<FilterImage 
								settings={filter.settings}
								fName={filter.name}
								fSettings={filter.settings}
								onClick={selectFilter} 
							>
								<Image src={src} fName={filter.name} fStyle={style} />
							</FilterImage>
						</div>
					</div>
				)
			}	
		</div>
	);
};



// 
// 
		// 	<div>
		// 		kolbasa
		// 	</div>
		// // )});

