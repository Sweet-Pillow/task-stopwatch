import Item from './Item';
import Style from './List.module.scss';

function List() {
    const task = [
    {
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'JavaScript',
        time: '01:00:00'
    },
    {
        task: 'TypeScript',
        time: '10:00:00'
    }
    ]
    return (
        <aside className={Style.listTasks}>
            <h2>Daily task</h2>
            <ul>
                {task.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;