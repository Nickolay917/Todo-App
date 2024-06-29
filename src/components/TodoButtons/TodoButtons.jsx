import "./TodoButtons.css"

const TodoButtons = ( { children } ) => {

    return (
        <div className="todo-buttons">
            { children }
        </div>
    );
};

export default TodoButtons;