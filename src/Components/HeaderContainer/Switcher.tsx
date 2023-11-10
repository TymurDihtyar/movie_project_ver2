import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ChangeEvent, useState} from "react";

const Switcher = () => {
    const localSwitch = JSON.parse(localStorage.getItem('switch')) || false
    const [checked, setChecked] = useState(localSwitch);
    const headerCss = document.querySelector('.header')

    if (checked) {
        document.body.classList.add('dark-theme');
        if (headerCss) {
            headerCss.classList.add('dark');
        }
    } else {
        document.body.classList.remove('dark-theme');
        if (headerCss) {
            headerCss.classList.remove('dark');
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        localStorage.setItem('switch', JSON.stringify(event.target.checked))
    };

    return (
        <FormControlLabel
            control={<Switch
                checked={checked}
                onChange={handleChange}
                color="warning"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="Mode"
            labelPlacement="top"
        />
    );
};

export {Switcher};