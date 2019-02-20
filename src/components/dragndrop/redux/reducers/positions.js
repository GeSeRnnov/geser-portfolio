// it's a reducer!!!!
const initialPosition = { position: [1, 7] };

export default function(state = initialPosition, action) {
	switch (action.type){
		case 'MOVE':
			return {
				...state,
				position: action.position,
			};
		default: 
			return state;
	}	
}
