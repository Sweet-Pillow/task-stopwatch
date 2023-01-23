import Form from '../components/Form';
import List from '../components/List';
import Style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { useState } from 'react';
import ITask from '../types/ITask';
import ITarefa from '../types/ITask';

function App() {
  const [tasks, setTasks] = useState<Array<ITask> | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITarefa){
    setSelected(selectedTask);
    setTasks(lastTasks => lastTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id? true: false
    })));
  }

  return (
    <div className={Style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
