import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { getSchoolInfo, SchoolInfo } from 'utils/SchoolID';

const Index: NextPage = () => {
	const [school, setSchool] = useState<SchoolInfo | undefined>();

	useEffect(() => {
		getSchoolInfo('https://www.easistent.com/urniki/9dbc59a89b732fdf68e15a06c89f97444384f74d/').then((school) => setSchool(school));
	}, []);

	return (
		<>
			<If condition={school !== undefined}>
				<Then>
					<p>{school?.ime}</p>
				</Then>
				<Else>
					<p>Nothin</p>
				</Else>
			</If>
		</>
	);
};

export default Index;
