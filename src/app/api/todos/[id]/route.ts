import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import * as YUP from 'yup';

export interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, segments: Segments) {

    const { id } = segments.params;
    const toDoFoundList = await prisma.todo.findFirst({ where: { id: id } });

    if (toDoFoundList) return NextResponse.json(toDoFoundList);

    return NextResponse.json({ message: "<ToDo> don't find" }, { status: 400 });

}


const toDoSchema = YUP.object(
    {
        description: YUP.string().optional(),
        complete: YUP.boolean().optional(),
    }
);

export async function PUT(req: Request, segments: Segments) {

    const { id } = segments.params;
    const toDoFoundList = await prisma.todo.findFirst({ where: { id: id } });
    if (toDoFoundList == null) return NextResponse.json({ message: "<ToDo> don't find" }, { status: 400 });

    try {

        const { complete, description } = await toDoSchema.validate(await req.json());
        const toDoUpdated = await prisma.todo.update({ where: { id: id }, data: { complete, description } });
        return NextResponse.json(toDoUpdated);

    } catch (error) {

        return NextResponse.json({ message: "Invalid data." }, { status: 400 });

    }


}