import { Button,Dialog,DialogTitle,TextField } from '@mui/material';
import React,{useState} from 'react'
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";

export const UpdateTaskForm = ({fetchTasks,isDialogOpen,setIsDialogOpen,task}) => {
  const {id,completed}=task;
  const [taskName,setTaskName]=useState("");

  const handleUpdateTaskName = async ()=>{
    try {
      await axios.put(API_URL,{
        id,
        name:taskName,
        completed,
      });
      await fetchTasks();
      setTaskName("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog open={isDialogOpen}> 
        <DialogTitle>Edit Task</DialogTitle>
        <div className="dialog">
            <TextField size="small" label="Task" variant="outlined" onChange={(e)=>setTaskName(e.target.value)}/>
            <Button 
              variant="contained" 
              onClick={async()=>{await handleUpdateTaskName(); setIsDialogOpen(false)}}>
              <CheckIcon/>
            </Button>
        </div>
    </Dialog>
  )
}

// if isDialogOpen is true, Dialog component will be opened
// if isDialogOpen is false, Dialog component will be closed