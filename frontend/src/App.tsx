import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IResort } from './models/IResort'
import { MainPage } from './Components/MainPage/MainPage';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<MainPage />
			</header>
		</div>
	);
}

export default App;
