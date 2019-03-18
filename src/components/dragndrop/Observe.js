 
let unitPosition = [1, 3];
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

}



