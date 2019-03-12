import * as React from 'react';
import Board from './dragndrop/Board';
import { Provider } from 'react-redux';
import store from './dragndrop/redux/store';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


//Drag and drop example. It might be user cards you transfer to some objects and executes some actions (e.g. load to DB or something else).
class DragNDrop extends React.Component{
	render() {
		return(
			<DragDropContextProvider backend={HTML5Backend}>
				<Provider store={store}>
					<div className ="dragndropBoard" >
						<Board />
					</div>
				</Provider>
			</DragDropContextProvider>
		);
	}
}


export default DragNDrop;

