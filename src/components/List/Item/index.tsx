import ITask from '../../../types/ITask';
import Style from './Item.module.scss';

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void
}

export default function Item(
    {
        task, 
        time, 
        selected, 
        completed, 
        id,
        selectTask
    }: Props){
    return (
    <li 
        className={`${Style.item} 
            ${selected? Style.selectedItem: ''}
            ${completed? Style.completedItem: ''}`} 
        onClick={() => !completed && selectTask(
            {
                task, 
                time, 
                selected, 
                completed, 
                id
            }
        )}
        >
        <h3>
            {task}
        </h3>
        <span>
            {time}
        </span>
        {completed && <span className={Style.completed} arial-label="Completed Task"></span>}
    </li>
    )
}