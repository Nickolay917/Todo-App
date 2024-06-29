import "./TodoButtonItem.css"

const TodoButtonItem = ( { title, date, description } ) => {
    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

    return (
        <>
            <div className="todo-item___head">
                {title}
            </div>
            <div className="todo-item___body">
                <div className="todo-item-data">
                    {formatedDate}
                </div>
                <div className="todo-item-descript">
                    {description}
                </div>
            </div>
        </>
    );
};

export default TodoButtonItem;