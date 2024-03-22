'use client';

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import { useRouter } from "next/navigation";
import * as toDoAPI from '@/todos/helpers/todos';

export interface RestToDosPageProps {
    todos?: Todo[]
}

export const TodoGrid = ({ todos = [] }: RestToDosPageProps) => {

    const router = useRouter();

    const toggleComplete = async (id: string, complete: boolean): Promise<Todo> => {
        const todoUpdated = await toDoAPI.updateTodo(id, complete);
        router.refresh();
        return todoUpdated;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
                ))
            }

        </div>
    )
}
