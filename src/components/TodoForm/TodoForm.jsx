import "./TodoForm.css";
import TodoButton from "../TodoButton/TodoButton";
import { useState } from "react";

const TodoForm = ( { onSubmit } ) => {

    const [formValidState, setFormValidState] = useState({
        title: true,
        date: true,
        description: true,
    });

    const addTodoItem = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target),
        formProps = Object.fromEntries(formData);
        let isFormValid = true;

        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({...state, title: false}));
            isFormValid = false;
        };
        if (!formProps.description?.trim().length) {
            setFormValidState(state => ({...state, description: false}));
            isFormValid = false;
        };
        if (!formProps.date) {
            setFormValidState(state => ({...state, date: false}));
            isFormValid = false;
        };

        if (!isFormValid) {
            return;
        };

        onSubmit(formProps)
        };

    return (
        <form className="todo-form" onSubmit={addTodoItem}>
            <input type="text" name="title" />
            <input type="date" name="date" />
            <input type="text" name="tag" />
            <textarea name="description" cols="30" rows="10"></textarea>
            <TodoButton cl="new-todo">
                Сохранить
            </TodoButton>
        </form>
    );
};


export default TodoForm;
