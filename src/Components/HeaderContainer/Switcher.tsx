import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";

const Switcher = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (!checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };
    return (
        <FormControlLabel
            control={<Switch
                checked={checked}
                onChange={handleChange}
                color="warning"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="LiteMode"
            labelPlacement="top"
        />
    );
};

export {Switcher};