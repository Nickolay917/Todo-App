import "./TodoButton.css";

const TodoButton = ( { children, cl } ) => {
    let cls = 'todo-button' + " " + cl || "";

    return (
        <button className={cls}>
            {children}
        </button>
    );
};

export default TodoButton;