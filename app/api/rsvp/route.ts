import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      guestsCount,
      guestNames = "",
      dietaryRestriction = "",
      message = "",
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios." },
        { status: 400 }
      );
    }

    const db = await getDatabase();

    const document = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      guestsCount: Number(guestsCount || 0),
      guestNames: String(guestNames).trim(),
      dietaryRestriction: String(dietaryRestriction).trim(),
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    const alreadyExists = await db.collection("rsvps").findOne({
      name: String(name).trim(),
      phone: String(phone).trim(),
    });

    if (alreadyExists) {
      return NextResponse.json(
        { error: "Já existe uma confirmação com este nome e telefone." },
        { status: 409 }
      );
    }

    await db.collection("rsvps").insertOne(document);

    return NextResponse.json(
      { message: "Presença confirmada com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao salvar RSVP:", error);
    return NextResponse.json(
      { error: "Erro interno ao salvar presença." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: "Senha administrativa não configurada." },
        { status: 500 }
      );
    }

    if (!authHeader) {
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");

    if (token !== adminPassword) {
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }

    const db = await getDatabase();

    const rsvps = await db
      .collection("rsvps")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(rsvps, { status: 200 });
  } catch (error) {
    console.error("Erro ao listar RSVP:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar presenças." },
      { status: 500 }
    );
  }
}