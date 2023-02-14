import React from 'react';
import { useState, useEffect } from 'react';
import { createHolidayDataCollection } from '../../firebase';
import './index.css'
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 550,
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#FE6B8B",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  },

  cell: {
    color: "#333",
    fontWeight: "bold"
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  calendar: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
    padding: "20px"
  },
  TextField: {
    "& label.Mui-focused": {
      color: "#FE6B8B"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FE6B8B"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C0C0C0"
      },
      "&:hover fieldset": {
        borderColor: "#FE6B8B"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FE6B8B"
      }
    }
  }
});

export default function ListedHolidays() {

  const classes = useStyles();

  const [todo, setTodo] = useState([{ value: '26/01/2023', occassion: 'Republic Day' },
  { value: '15/08/2023', occassion: 'Independence Day' },
  { value: '02/10/2023', occassion: 'Gandhi Jayanti' },
  { value: '25/12/2023', occassion: 'Christmas Day' }])

  const [value, setValue] = React.useState(new Date());
  const [occassion, setOccassion] = React.useState('');




  const handleDateChange = (data) => {
    const hy = moment(data).format('DD/MM/YYYY')
    setValue(hy);

  }

  const handleAdd = (e) => {







    e.preventDefault()
    setTodo([...todo, { value, occassion }])
    setValue(new Date())
    setOccassion('')

  }

  useEffect(() => {
    let obj = { ...todo }
    console.log('holiday==sss>', obj)
    createHolidayDataCollection(obj);
  }, [handleAdd])

  console.log('todo=>', todo)

  console.log('value', value)
  console.log('value2', occassion)

  const handleDeleteHoliday = index => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };


  const sortedData = todo.sort((a, b) => {
    const [dayA, monthA, yearA] = a.value.split("/");
    const [dayB, monthB, yearB] = b.value.split("/");
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateA - dateB;
  });



  return (
    <Paper >

      < div className='edit'>
        <Calendar className={classes.calendar} data-testid="mocked-calendar" onChange={handleDateChange} />
        <TextField id="outlined-basic" label="Occassion" variant="outlined" className={classes.TextField} value={occassion} onChange={(e) => setOccassion(e.target.value)} />
        <div className='buttons'>
          <Button className={classes.button} data-testid="add-btn" onClick={handleAdd} >Add</Button>

        </div>
      </div>
      <Paper className={classes.root}>
        <h2>List Of Holidays</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell align='center'>Holiday</TableCell>
              <TableCell align='center' >Date</TableCell>
              <TableCell align='center'>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow key={item.index}>
                <TableCell component="th" scope="row" align='center'>
                  {item.occassion}
                </TableCell>
                <TableCell align='center'>{item.value}</TableCell>
                <TableCell align='center' >
                  <Button
                    className={classes.button}
                    onClick={() => handleDeleteHoliday(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>))
            }
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );

}

