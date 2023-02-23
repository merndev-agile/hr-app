import React from 'react'
import { Typography,Card, CardContent} from '@material-ui/core'

const DisplayTable = ({todo,selectedDate}) => {
  return (
    <div>{
        todo.map((item)=>{
          return (
            <>
        <Card sx={{ maxWidth: 600, m: 'auto', mt: 5, p: 3, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 3 }}>{selectedDate}</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Login time: {item.loginTime}</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Logout time: {item.logoutTime}</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Total hours: {item.totalHours}</Typography>
      </CardContent>
    </Card>
            
            </>
          )
        })
      }</div>
  )
}

export default DisplayTable