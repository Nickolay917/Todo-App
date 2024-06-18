import "./Header.css";
import TodoButton from "../TodoButton/TodoButton";
import TodoButtons from "../TodoButtons/TodoButtons";
import TodoButtonItem from "../TodoButtonItem/TodoButtonItem";
import { date, addDateItem } from "../../scripts/date";
import { useState } from "react";

const Header = ( { children } ) => {
    return (
        <header className="header">
            <div className="logo">Todo App</div>

            <TodoButton cl='addTodo'>
                + Задача
            </TodoButton>

            <TodoButtons>
                    {date.map(el => (
                        <TodoButton cl="todo-button-item">
                            <TodoButtonItem
                                title={el.title}
                                data={el.data}
                                description={el.description}
                            />
                        </TodoButton>
                    ))}
            </TodoButtons>
        </header>
    );
};

export default Header;
