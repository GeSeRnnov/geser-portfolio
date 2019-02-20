import { connect } from 'react-redux';
import { movePosition } from './reducers/actions';
import { moveUnit, canMoveUnit } from '../Observe';


function handleSquareClick(toX, toY) {
  console.log('handleSquareClick');
  if (canMoveUnit(toX, toY)) {
    moveUnit(toX, toY);
    // movePosition([toX, toY]);
  }
}

export default connect(null, movePosition)(handleSquareClick);


