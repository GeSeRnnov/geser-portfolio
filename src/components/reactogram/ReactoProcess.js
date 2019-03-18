import { getFilter } from './FilterImage';

// Saving formatted image
export const handleSave = (image, settings, imageName, isNewWndw) => {
	const img = new Image();
	img.crossOrigin = 'Anonymous';
	img.src = image;
	const sName = imageName.replace(/\.\w/i,"_reacted$&")

	img.onload = () => {
		let oldCanva = document.getElementById('downloadImg');
		if(oldCanva){
			document.body.removeChild(oldCanva);
		}
		let myCanvas = document.createElement('canvas');
		myCanvas.id = 'canvas';
		myCanvas.width = img.width || 1600;
		myCanvas.height = img.height || 900;
		
		let dwnldLink = document.createElement('a');
		dwnldLink.setAttribute('id', 'downloadImg');
		dwnldLink.setAttribute('download', sName);
		document.body.appendChild(dwnldLink).appendChild(myCanvas);
		
		let ctx = document.getElementById('canvas').getContext('2d');
		ctx.filter = getFilter({settings});
		console.log('getFilter' ,getFilter({settings}));
		ctx.drawImage(img,0,0);

		dwnldLink.setAttribute('href', myCanvas.toDataURL("img/jpg"));

		console.log('dwnldNm', sName);

		dwnldLink.click();
		document.body.removeChild(dwnldLink);
		
		if(isNewWndw){
			var win = window.open();
			win.document.body.appendChild(dwnldLink).appendChild(myCanvas);
		}

		ctx = undefined; 
		myCanvas = undefined;
		dwnldLink = undefined;

	}

}

// Waiting while image is load and transfer it into state
const getResult = (reader, time, handleLoader, fName) =>  {
	let readyWaiter = new Promise((resolve, reject) => {
		let timerId = setInterval(() => {
			if(reader.readyState === 2){
				setTimeout(()=>{
					clearInterval(timerId);
				})
				resolve(reader.result);
			}
		}, time)
	});

	readyWaiter
		.then(result => {
			handleLoader(result, fName);
		})
}

// Loading user image
export const handleLoad = (e, handleLoader) => {
	const reader = new FileReader();
	if(e.target.files[0]){
		reader.readAsDataURL(e.target.files[0]  );
		getResult(reader, 500, handleLoader, e.target.files[0].name );
	}
}