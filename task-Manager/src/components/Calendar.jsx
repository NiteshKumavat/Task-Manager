import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',   
    background: {
      default: '#121212',
      paper: '#1e1e2f',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
    primary: {
      main: '#4a90e2', 
    },
  },
});

export default function Calendar() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar']}>
          <DemoItem >
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
              sx={{
                backgroundColor: '#1e1e2f',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                color: '#e0e0e0',
              }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
