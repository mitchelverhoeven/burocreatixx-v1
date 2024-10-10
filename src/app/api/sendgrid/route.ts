import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { email, tel, fullname, subject, message } = body;

    await sendgrid.send({
      to: "info@burocreatixx.nl",
      from: "info@burocreatixx.nl",
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="nl">
      <head>
        <meta charset="utf-8">
        <title>Email from Website</title>
        <meta name="description" content="Email">
        <meta name="author" content="Your Website">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div style="margin: 20px;">
          <h3>Nieuwe e-mail van: <span style="color: red;">${fullname}</span></h3>
          <h3>Email: <span style="color: red;">${email}</span></h3>
          <h3>Telefoonnummer: <span style="color: red;">${tel}</span></h3>
           <h3>Onderwerp: <span style="color: red;">${subject}</span></h3>
          <div style="font-size: 16px;">
            <p><strong>Bericht:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      </body>
      </html>`,
    });

    return NextResponse.json({ error: "" }, { status: 200 });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      {
        error: "Er is een fout opgetreden tijdens het verzenden van de e-mail.",
      },
      { status: 500 }
    );
  }
}
