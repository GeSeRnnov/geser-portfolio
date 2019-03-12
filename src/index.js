import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';

const Portfolio = lazy(() => import('./App'));

ReactDOM.render(
	<Suspense 
		fallback={
			<div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#f0fbfa'}} >
				Loading......
            	<img style={{ width: '16em', animation: 'App-logo-spin infinite 2s linear'}} src="./img/greenLoading.gif" alt={"Loader progress."} />
			</div>
		}
	>
		<Portfolio />
	</Suspense>
	, document.getElementById('root'));

serviceWorker.unregister();
