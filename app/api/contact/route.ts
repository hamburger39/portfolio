import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください' },
        { status: 400 }
      )
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // メール送信先（環境変数から取得、デフォルトはSMTP_USER）
    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER

    if (!toEmail) {
      return NextResponse.json(
        { error: 'メール設定が完了していません' },
        { status: 500 }
      )
    }

    // メール内容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: toEmail,
      replyTo: email,
      subject: `ポートフォリオサイトからのお問い合わせ: ${name}様`,
      text: `
お問い合わせ内容:

お名前: ${name}
メールアドレス: ${email}

メッセージ:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            ポートフォリオサイトからのお問い合わせ
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="margin-top: 30px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #4CAF50;">
            <h3 style="color: #333; margin-top: 0;">メッセージ:</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
        </div>
      `,
    }

    // メール送信
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'お問い合わせありがとうございます。メールを送信しました。' },
      { status: 200 }
    )
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。しばらくしてから再度お試しください。' },
      { status: 500 }
    )
  }
}
