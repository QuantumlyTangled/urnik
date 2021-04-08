import React, { useState } from 'react';
import { getSchoolInfo } from 'utils/SchoolID';

export default function Home() {
	useState(async () => {
		await getSchoolInfo('https://www.easistent.com/urniki/9dbc59a89b732fdf68e15a06c89f97444384f74d/');
	});

	return (
		<>
			<div>hi</div>
			<div>hello</div>
		</>
	);
}
