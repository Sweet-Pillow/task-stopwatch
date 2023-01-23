import Item from './Item';
import Style from './List.module.scss';
import ITask from '../../types/ITask';

interface Props{
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={Style.listTasks}>
            <h2>Daily task</h2>
            <ul>
                {tasks.map(item => (
                    <Item 
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;