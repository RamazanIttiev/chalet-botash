import React, { FC } from 'react';
import { FormControlLabel, FormGroup, Radio, RadioGroup as MuiRadioGroup } from '@mui/material';
import { LanguageModal } from '../modals/language.modal';

interface RadioGroupProps extends LanguageModal {
	color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default' | undefined;
}

const RadioGroup: FC<RadioGroupProps> = ({ color, value, changeLang }) => {
	return (
		<FormGroup>
			<MuiRadioGroup value={value} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<FormControlLabel
					value={'ru'}
					onClick={() => changeLang('ru')}
					control={<Radio color={color} />}
					label="Rus"
				/>
				<FormControlLabel
					value={'en'}
					onClick={() => changeLang('en')}
					control={<Radio color={color} />}
					label="Eng"
				/>
			</MuiRadioGroup>
		</FormGroup>
	);
};

export default RadioGroup;
