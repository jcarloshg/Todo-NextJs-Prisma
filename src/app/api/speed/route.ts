import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma';

export async function GET(request: Request) {

    await prisma.todo.deleteMany();

    await prisma.todo.createMany(
        {
            data: [
                { description: "Priedra del Alma.", complete: true },
                { description: "Priedra del corazón." },
                { description: "Priedra de la mente." },
                { description: "Priedra de la saboduria" },
            ]
        }
    );

    // const todo = await prisma.todo.create({
    //     data: {
    //         description: "Priedra de la tierra", complete: true,
    //     }
    // })

    return NextResponse.json(
        {
            message: "Seed Execute"
        }
    );

}