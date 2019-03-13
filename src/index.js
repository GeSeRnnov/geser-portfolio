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
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0fbfa'}} >
				<h1><strong>Loading......</strong></h1>
            	<img style={{ width: '16em'}} src="./img/greenLoading.gif" alt={"Loader progress."} />
			</div>
		}
	>
		<Portfolio />
	</Suspense>
	, document.getElementById('root'));

serviceWorker.unregister();
