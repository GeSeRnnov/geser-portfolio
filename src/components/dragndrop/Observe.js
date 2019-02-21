import React from 'react';
// import PropTypes from 'prop-types';
// import Unstated from './Unstated';
// import { Provider, Subscribe, Container } from 'unstated';


let unitPosition = [1, 7];
let observers: PositionObserver[] = [];

function emitChange() {
  observers.forEach(o => o && o(unitPosition));
}

export function observe(o: PositionObserver) {
	observers.push(o)
	emitChange();
	return () => {
		observers = observers.filter(t => t !== o);
	}	

}

export function moveUnit(toX, toY) {
  unitPosition = [toX, toY];
  emitChange();
}

export function canMoveUnit(toX, toY) {
  const [x, y] = unitPosition;
  const dx = toX - x;
  const dy = toY - y;


   return (Math.abs(dx) === 1 && Math.abs(dy) <= 1) ||
           (Math.abs(dx) <= 1 && Math.abs(dy) === 1);
  // return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
  //          (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}



