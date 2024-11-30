import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();



export async function POST(request) {
    try {

        // const data = await request.json();
        // const { name, cost, deadline_date } = data;

        // // verificar se os campos foram passados
        // if (!name || (!cost && cost != 0) || !deadline_date) {
        //     return NextResponse.json(
        //         { error: 'Todos os campos são obrigatórios' },
        //         { status: 400 }
        //     );
        // }

        // // verificar se a tarefa já foi cadastrada
        // const taskExists = await prisma.task.findUnique({
        //     where: { name },
        // });

        // if (taskExists) {
        //     return NextResponse.json(
        //         { error: 'Esta tarefa já foi cadastrada!' },
        //         { status: 400 }
        //     );
        // }

        // // calculando a nova ordem de apresentação
        // const lastPresentationOrder = await prisma.task.findMany({
        //     orderBy: {
        //         presentation_order: 'desc',
        //     },
        //     take: 1,
        // });

        // const newPresentationOrder = lastPresentationOrder.length
        //     ? lastPresentationOrder[0].presentation_order + 1
        //     : 1;

        // // criando a nova tarefa
        // const newTask = await prisma.task.create({
        //     data: {
        //         name,
        //         cost: parseFloat(cost),
        //         deadline_date: new Date(deadline_date),
        //         presentation_order: newPresentationOrder,
        //     },
        // });

        // return NextResponse.json(newTask, { status: 201 });
        return NextResponse.json({
            "msg":"Deu bom!"
        });
    } catch (error) {
        // return NextResponse.json(
        //     { error: 'Erro ao criar tarefa' },
        //     { status: 500 }
        // );
        return NextResponse.error(error);
    }
}

export async function GET() {
    try {
        // const tasks = await prisma.task.findMany({
        //     orderBy: {
        //         presentation_order: 'asc',
        //     },
        // });
        // return NextResponse.json(tasks, { status: 200 });
        return NextResponse.json({
            "msg":"Deu bom!"
        });
    } catch (error) {
        // return NextResponse.json(
        //     { error: 'Erro ao tentar buscar a lista de tarefas' },
        //     { status: 500 }
        // );
        return NextResponse.error(error);
    }
}