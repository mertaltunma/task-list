import React, {useState,useEffect} from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import {Task} from "./components/Task";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import {API_URL} from "./utilis";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
}); 

export default function App() {
  const [tasks,setTasks]=useState([]);
  const fetchTasks = async () => {
    try {
      const {data} = await axios.get(API_URL);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    fetchTasks(); 
  },[]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks}/>
      {tasks.map((task)=>(
        <Task task={task} key={task.id} fetchTasks={fetchTasks}/>
      ))}
    </ThemeProvider>
  );
}
