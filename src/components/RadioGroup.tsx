import React, { FC } from 'react';
import { FormControlLabel, FormGroup, Radio, RadioGroup as MuiRadioGroup } from '@mui/material';

interface RadioGroupProps {
	color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default' | undefined;
}

const RadioGroup: FC<RadioGroupProps> = ({ color }) => {
	return (
		<FormGroup>
			<MuiRadioGroup value={''} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<FormControlLabel value={'ru'} control={<Radio color={color} />} label="Rus" />
				<FormControlLabel value={'en'} control={<Radio color={color} />} label="Eng" />
			</MuiRadioGroup>
		</FormGroup>
	);
};

export default RadioGroup;
