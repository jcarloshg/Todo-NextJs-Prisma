import { Todo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

export interface RestToDosPageProps {
    todo: Todo;
    toggleComplete: (id: string, complete: boolean) => Promise<Todo>
}

export const TodoItem = ({ todo, toggleComplete }: RestToDosPageProps) => {



    return (
        <main className={todo.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

                <div
                    onClick={() => toggleComplete(todo.id, !todo.complete)}
                    className={`
                        flex p-2 rounded-md cursor-pointer
                        hover:bg-opacity-60
                        ${todo.complete ? "bg-blue-100" : "bg-red-100"}
                        `}
                >
                    {
                        todo.complete
                            ? <IoCheckboxOutline size={30} />
                            : <IoSquareOutline size={30} />
                    }
                </div>

                <div className={`text-center sm:text-left `}>
                    <p>{todo.description}</p>
                </div>

            </div>
        </main>
    )
}