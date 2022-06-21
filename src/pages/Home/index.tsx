import {
	Grid,
	Typography,
} from "@mui/material";

import React, { useState } from "react";

import Card from '../../components/Card';

export default function Home() {
	const [totalCount, setTotalCount] = useState(0);

	function onHandleIncreaseCount(count: number) {
		setTotalCount((old: number) => old + 1);
	}

	function onHandleDecreaseCount(count: number) {
		setTotalCount((old: number) => old - 1);
	}

	const [text, setText] = useState('teste');

	function changeText(newText: any) {
		setText(newText.target.value);
	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h1" color='primary' textAlign='center'>
					Meu título
				</Typography>
				<Typography variant="h3" color='secondary' textAlign='center'>{text}</Typography>
			</Grid>
			<Grid container item xs={12}>
				<Grid item xs={6}>
					<Card text={text} changeText={changeText} title='Teste título' count={totalCount} description='Descrição exemplo' handleIncreaseCount={onHandleIncreaseCount} handleDecreaseCount={onHandleDecreaseCount} ></Card>
				</Grid>
				<Grid item xs={6}>
					<Card text={text} changeText={changeText} title='2º título' count={totalCount} description='2ª Desc' handleIncreaseCount={onHandleIncreaseCount} handleDecreaseCount={onHandleDecreaseCount} ></Card>
				</Grid>
			</Grid>
		</Grid>
	);
}