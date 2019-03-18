import React, {Component} from 'react';
import Square from './Square';
import { moveUnit, canMoveUnit } from './Observe';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { connect as reduxConnect } from 'react-redux';
import { movePosition } from './redux/reducers/actions';


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function  renderOverlay(color){
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

// Passing the state to the props.
function mapStateToProps(state){
  return {
    unitPosition: state,
  };
}

// Drop specification. Derscribe, how the drop target reacts to the drag and drop events.
const dropSpec = {
  canDrop(props) {
      return canMoveUnit(props.x, props.y);
    },
  drop(props,monitor) {
    // console.log(props);
    moveUnit(props.x, props.y);
    props.movePosition([props.x, props.y]);
  }
}

class BoardSquare extends Component{

  isBlack(x,y){
    return (x + y) % 2 === 1;
  }

  render(){
  return this.props.connectDropTarget(
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <Square black={this.isBlack(this.props.x,this.props.y)}>
        {this.props.children}
      </Square>
      {this.props.isOver && !this.props.canDrop && renderOverlay('red')}
      {!this.props.isOver && this.props.canDrop && renderOverlay('yellow')}
      {this.props.isOver && this.props.canDrop && renderOverlay('green')}
    </div>
  );
}}


export default reduxConnect(mapStateToProps, {movePosition})(
  DropTarget(ItemTypes.PIXIE, dropSpec, collect)(BoardSquare)
);

