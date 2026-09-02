import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const response = await resend.emails.send({
      from: 'Unique Agency <onboarding@resend.dev>',
      to: ['godyslem139@gmail.com'],
      replyTo: email,
      subject: `رسالة جديدة من الموقع: ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #0284c7;">تفاصيل الطلب الجديد:</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone || 'غير محدد'}</p>
          <p><strong>التفاصيل:</strong></p>
          <blockquote style="background: #f8fafc; padding: 15px; border-right: 4px solid #0284c7; margin: 0; border-radius: 4px; white-space: pre-wrap;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    if (response.error) {
      return NextResponse.json({ success: false, error: response.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'حدث خطأ في السيرفر' },
      { status: 500 }
    );
  }
}