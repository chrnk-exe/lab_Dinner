import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';

interface Props {
  onChangeEventFunction(e: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
  helperText?: string;
  label?: string
  className?: string
  required?: boolean
  error?: boolean
}

const TextFieldPassword = (props: Props) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<TextField
			InputProps={{
				endAdornment: (
					<InputAdornment position={'end'}>
						<IconButton
							onClick={() => setShowPassword(!showPassword)}
							edge="end"
						>
							{!showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
			required={props?.required}
			className={props?.className}
			helperText={props?.helperText}
			fullWidth
			label={props.label || 'Password'}
			rows={1}
			error={props.error}
			variant="outlined"
			value={props.value}
			type={showPassword ? 'text' : 'password'}
			color={props?.color}
			onChange={props.onChangeEventFunction}
		/>
	);
};

export default TextFieldPassword;
