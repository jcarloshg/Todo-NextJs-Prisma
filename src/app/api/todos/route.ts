import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as YUP from 'yup';

export async function GET(request: Request) {

    const url = new URL(request.url);
    const { searchParams } = url;

    const take = Number(searchParams.get('take') ?? '10');
    const skip = Number(searchParams.get('skip') ?? '1');

    if (isNaN(take)) {
        return NextResponse.json(
            { message: "The parameter <taken> must be a positive number." },
            { status: 400 }
        )
    }

    if (isNaN(skip)) {
        return NextResponse.json(
            { message: "The parameter <skip> must be a positive number." },
            { status: 400 }
        )
    }

    const toDoFound = await prisma.todo.findMany({ take: take, skip: skip });

    return NextResponse.json(toDoFound);

}


const toDoSchema = YUP.object(
    {
        description: YUP.string().required(),
        complete: YUP.boolean().optional().default(false),
    }
);

export async function POST(req: Request) {

    try {

        const toDoDataValidate = await toDoSchema.validate(await req.json());
        const newToDo = await prisma.todo.create({
            data: {
                description: toDoDataValidate.description,
                complete: toDoDataValidate.complete,
            }
        });
        return NextResponse.json(newToDo);


        // interface ToDoData { description: string, complete?: boolean, }
        // const toDoData = (await req.json()) as ToDoData;
        // const newToDo = await prisma.todo.create({ data: toDoData });
        // return NextResponse.json(newToDo);

    } catch (error) {

        return NextResponse.json({ message: "Invalid data", error }, { status: 400 });

    }

}

export async function DELETE(req: Request) {

    try {

        const deleteManyResponse = await prisma.todo.deleteMany({ where: { complete: true } });

        return NextResponse.json({ counter: deleteManyResponse.count });

    } catch (error) {


        return NextResponse.json({ message: "Ocurrio un problema", error }, { status: 400 });

    }

}
