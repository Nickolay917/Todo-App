import "./TodoButtonItem.css"

const TodoButtonItem = ( { title, data, description } ) => {

    return (
        <>
            <div className="todo-item___head">
                {title}
            </div>
            <div className="todo-item___body">
                <div className="todo-item-data">
                    {data}
                </div>
                <div className="todo-item-descript">
                    {description}
                </div>
            </div>
        </>
    );
};

export default TodoButtonItem;