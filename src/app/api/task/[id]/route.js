import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function PUT(request) {
    try {
        const data = await request.json();
        const { name, cost, deadline_date } = data;

        // verificar se os campos foram passados
        if (!name || (!cost && cost != 0) || !deadline_date) {
            return NextResponse.json(
                { error: 'Todos os campos são obrigatórios' },
                { status: 400 }
            );
        }

        // verificar se a tarefa já foi cadastrada
        const taskExists = await Task.findOne({
            where: { name: name }
        });

        if (taskExists) {
            return NextResponse.json(
                { error: 'Esta tarefa já foi cadastrada!' },
                { status: 400 }
            );
        }

        
        // criando a nova tarefa
        const newTask = await Task.create({
            "name": name,
            "cost": cost,
            "deadline_date": deadline_date,
            "presentation_order": newPresentationOrder,
        });

        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erro ao criar tarefa' },
            { status: 500 }
        );
    }
}

export async function DELETE() {
    try {
        const tasks = await Task.findAll();
        return NextResponse.json(tasks, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erro ao tentar buscar a lista de tarefas' },
            { status: 500 }
        );
    }
}