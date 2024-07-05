import styles from "./TodoForm.module.css";
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
        } else {
            setFormValidState(state => ({...state, title: true}));
            isFormValid = true;
        }

        if (!formProps.description?.trim().length) {
            setFormValidState(state => ({...state, description: false}));
            isFormValid = false;
        } else {
            setFormValidState(state => ({...state, description: true}));
            isFormValid = true;
        }

        if (!formProps.date?.trim().length) {
            setFormValidState(state => ({...state, date: false}));
            isFormValid = false;
        } else {
            setFormValidState(state => ({...state, description: true}));
            isFormValid = true;
        }

        if (!isFormValid) {
            return;
        };

        onSubmit(formProps)
        };

    return (
        <form className={styles['todo-form']} onSubmit={addTodoItem}>
            <input type="text" name="title" className={`${styles.title}`} placeholder="Название"/>
            <input type="date" name="date" className={`${styles.date}`} />
            <input type="text" name="tag" className={`${styles.text}`} placeholder="Тэг"/>
            <textarea 
                name="description" cols="30" rows="10" 
                className={`${styles.description}`} 
                placeholder="Содержимое задачи"
            >
            </textarea>
            <TodoButton cl="new-todo">
                Сохранить
            </TodoButton>
        </form>
    );
};


export default TodoForm;
