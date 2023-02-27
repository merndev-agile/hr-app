import React from 'react'
import { Typography,Card, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
card:{
  marginTop:"1rem",
  width: '300px',
  height: '350px',
  textAlign: 'center',
  display: 'flex',
  flexDirection:'column',
 justifyContent:'center',
  
}
  
});

const DisplayTable = ({todo,selectedDate}) => {
  const classes = useStyles();
 
  return (
    <div>{
       todo.length===1? todo.map((item)=>{
          return (
            <>
        <Card className={classes.card}key={item.id} style={item.hoursLeft===0?{backgroundColor:"linear-gradient(45deg, #2DD6AB 30%, #41AF93 90%)"}:{background:"linear-gradient(to bottom, #f44336, #ff9800, #ffe0b2)"}}>
      <CardContent >
        <Typography >{selectedDate}</Typography>
        <Typography >Login time: {item.loginTime}</Typography>
        <Typography >Logout time: {item.logoutTime}</Typography>
        <Typography >Total hours: {item.hoursWorked}</Typography>
        <Typography >remaing hours: {item.hoursLeft}</Typography>
      </CardContent>
    </Card>
            
            </>
          )
        }):<Card className={classes.card}>There is no data for Date : {selectedDate}</Card>
      }</div>
  )
}

export default DisplayTable