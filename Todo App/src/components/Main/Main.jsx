import "./Main.css"
import TodoButton from "../TodoButton/TodoButton";
import { addDateItem } from "../../scripts/date";
import { useState } from "react";

const Main = () => {
    const [ addDate, setAddDate ] = useState();


    const addTodoItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target),
        formProps = Object.fromEntries(formData);
        console.log(formProps);
        addDateItem( formProps.title, formProps.data, formProps.description )
    };

    return (
        <main className="main">
            <form className="todo-form" onSubmit={addTodoItem}>
                <input type="text" name="title" />
                <input type="date" name="date" />
                <input type="text" name="tag" />
                <textarea name="post" cols="30" rows="10">
                </textarea>
                <TodoButton cl="new-todo">
                    Сохранить
                </TodoButton>
            </form>
        </main>
    );
};

export default Main;