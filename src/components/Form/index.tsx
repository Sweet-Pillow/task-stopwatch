import React, { useState } from "react";
import ITask from "../../types/ITask";
import Button from "../Button";
import Style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTasks}: Props){
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTasks((oldTasks) => 
        [
            ...oldTasks, 
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])

        setTask("");
        setTime("00:00");
    }


    return(
        <form className={Style.newTask} onSubmit={addTask}>
            <div className={Style.inputContainer}>
                <label htmlFor="task">
                    Add a new task
                </label>
                <input 
                    type="text"
                    name="task"
                    value={task}
                    onChange={event => {
                        setTask(event.target.value);
                    }}
                    id="task"
                    placeholder="What do you want to study?"
                    required 
                />
            </div>
            <div className={Style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input 
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={(event) => 
                        setTime(event.target.value)
                    }
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button 
                type="submit"
                text="Add new task"
            />
        </form>
    )
    
}

export default Form;