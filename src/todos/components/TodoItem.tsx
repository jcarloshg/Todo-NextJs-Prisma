'use client';

import { Todo } from "@prisma/client";

import { startTransition, useOptimistic } from "react";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { toggleTodo } from "../actions/todo-actions";

export interface RestToDosPageProps {
    todo: Todo;
    toggleComplete: (id: string, complete: boolean) => Promise<Todo>
}

export const TodoItem = ({ todo, toggleComplete }: RestToDosPageProps) => {

    const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({ ...state, complete: newCompleteValue })
    );

    const onToggleToDo = async () => {
        try {
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
            await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
        } catch (error) {
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
        }
    }

    return (
        <main className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

                <div
                    // onClick={() => toggleComplete(todoOptimistic.id, !todoOptimistic.complete)}
                    onClick={onToggleToDo}
                    className={`
                        flex p-2 rounded-md cursor-pointer
                        hover:bg-opacity-60
                        ${todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"}
                        `}
                >
                    {
                        todoOptimistic.complete
                            ? <IoCheckboxOutline size={30} />
                            : <IoSquareOutline size={30} />
                    }
                </div>

                <div className={`text-center sm:text-left `}>
                    <p>{todoOptimistic.description}</p>
                </div>

            </div>
        </main>
    )
}