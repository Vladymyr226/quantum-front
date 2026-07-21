import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, telegram, course, formType } = body;

    const payload = {
      title: `Нова заявка: ${name} (${course || formType})`,
      contact: {
        full_name: name,
        phone: phone,
      },
      manager_comment: `Телеграм: ${telegram || "Не вказано"}\nКурс: ${course || "Не вказано"}\nФорма: ${formType}`,
    };

    const response = await fetch(
      "https://openapi.keycrm.app/v1/pipelines/cards",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.KEYCRM_API_KEY}`,
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("KeyCRM API Error:", errorText);
      return NextResponse.json(
        { error: "Помилка при відправці в CRM" },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 },
    );
  }
}
