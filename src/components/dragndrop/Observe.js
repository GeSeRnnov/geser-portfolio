import React from 'react';
// import PropTypes from 'prop-types';
// import Unstated from './Unstated';
// import { Provider, Subscribe, Container } from 'unstated';


let unitPosition = [1, 7];
let observers: PositionObserver[] = [];
// let observer = null;

function emitChange() {
  // observer(unitPosition);
  observers.forEach(o => o && o(unitPosition));
}

export function observe(o: PositionObserver) {
	observers.push(o)
	emitChange();
	return () => {
		observers = observers.filter(t => t !== o);
	}	
  // if (observer) {
  //   throw new Error('Multiple observers not implemented.');
  // }

  // observer = o;
  // emitChange();
}

export function moveUnit(toX, toY) {
  unitPosition = [toX, toY];
  // console.log('moveUnit', unitPosition);
  emitChange();
}

export function canMoveUnit(toX, toY) {
  const [x, y] = unitPosition;
  const dx = toX - x;
  const dy = toY - y;

  // console.log('canMoveUnit', (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2));


  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}




// let unitPosition: [number, number] = [1, 7]
// let observers: PositionObserver[] = []
// export type PositionObserver = ((position: [number, number]) => void) | null

// function emitChange() {
// 	observers.forEach(o => o && o(unitPosition))
// }

// export function observe(o: PositionObserver) {
// 	observers.push(o)
// 	emitChange()

// 	return () => {
// 		observers = observers.filter(t => t !== o)
// 	}
// }

// export function canMoveunit(toX: number, toY: number) {
// 	const [x, y] = unitPosition
// 	const dx = toX - x
// 	const dy = toY - y

// 	return (
// 		(Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
// 		(Math.abs(dx) === 1 && Math.abs(dy) === 2)
// 	)
// }

// export function moveunit(toX: number, toY: number) {
// 	unitPosition = [toX, toY]
// 	emitChange()
// }

