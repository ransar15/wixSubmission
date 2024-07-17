import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classes from './styles.module.scss';
import { fetchTestApi } from '../../apis/test.api';

interface IMainPageProps {

}

export const MainPage = (props: IMainPageProps) => {
	const [data, setData] = useState<string | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchTestApi();
			setData(data);
		}
		fetchData();
	}, []);

	if (!data) {
		return <div>Loading....</div>
	}

	return (<div className={classes.mainPageContainer}>
		{data}
	</div>)
}