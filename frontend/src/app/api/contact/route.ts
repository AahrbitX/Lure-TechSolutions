import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getResend() {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");
  return new Resend(process.env.RESEND_API_KEY);
}

async function appendToSheet(row: string[]) {
  if (
    !process.env.GOOGLE_SHEETS_ID ||
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY
  ) {
    throw new Error("Google Sheets env vars not configured");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Leads!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

// ─── Email templates ──────────────────────────────────────────────────────────

function teamEmailHtml(data: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  date: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f8fc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;border:1px solid rgba(0,0,0,0.07);overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0F67FF;padding:28px 36px;">
            <p style="margin:0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;">Entice Innovations</p>
            <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:600;">New Enquiry Received</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px;">
            <p style="margin:0 0 24px;color:#4A5568;font-size:14px;line-height:1.6;">
              A new lead just came in through the website contact form.
            </p>

            <!-- Details table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(0,0,0,0.07);border-radius:10px;overflow:hidden;">
              ${[
                ["Name", data.name],
                ["Email", `<a href="mailto:${data.email}" style="color:#0F67FF;">${data.email}</a>`],
                ["Company", data.company || "—"],
                ["Service", data.service || "—"],
                ["Date", data.date],
              ].map(([label, value], i) => `
              <tr style="background:${i % 2 === 0 ? "#F8FAFF" : "#ffffff"};">
                <td style="padding:12px 16px;font-size:11px;color:#9BAABB;text-transform:uppercase;letter-spacing:0.1em;white-space:nowrap;width:120px;">${label}</td>
                <td style="padding:12px 16px;font-size:14px;color:#1C1C1C;">${value}</td>
              </tr>`).join("")}
            </table>

            <!-- Message -->
            <div style="margin-top:24px;background:#F0F4FF;border-left:3px solid #0F67FF;border-radius:0 8px 8px 0;padding:16px 20px;">
              <p style="margin:0 0 6px;font-size:11px;color:#9BAABB;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
              <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
            </div>

            <!-- CTA -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${data.email}?subject=Re: Your enquiry — Entice Innovations"
                style="display:inline-block;background:#0F67FF;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:100px;">
                Reply to ${data.name} →
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px;border-top:1px solid rgba(0,0,0,0.06);">
            <p style="margin:0;font-size:11px;color:#C0CDD8;text-align:center;">
              Entice Innovations · info@enticeinnovations.com · enticeinnovations.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function userEmailHtml(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f8fc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;border:1px solid rgba(0,0,0,0.07);overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0A0F1E;padding:36px;text-align:center;">
            <p style="margin:0 0 8px;color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;">Entice Innovations</p>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:300;font-family:Georgia,serif;letter-spacing:-0.02em;">
              We&rsquo;ve received your message.
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 36px;">
            <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
              Hi ${name},
            </p>
            <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
              Thank you for reaching out to Entice Innovations. We&rsquo;ve received your enquiry and our team will review it personally.
            </p>
            <p style="margin:0 0 32px;color:#374151;font-size:15px;line-height:1.7;">
              You can expect to hear from us within <strong style="color:#1C1C1C;">24 hours</strong> — not a generic auto-reply, but a thoughtful response from the right person on our team.
            </p>

            <!-- Promise block -->
            <div style="background:#F0F4FF;border-radius:12px;padding:24px;margin-bottom:32px;">
              <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#0F67FF;text-transform:uppercase;letter-spacing:0.08em;">What happens next</p>
              ${[
                "We review your message and identify the right team member",
                "You receive a personalised response within 24 hours",
                "We schedule a call to understand your requirements in detail",
                "We share a tailored proposal within 2–3 business days",
              ].map((step, i) => `
              <table cellpadding="0" cellspacing="0" style="margin-bottom:${i < 3 ? "10px" : "0"};width:100%;">
                <tr>
                  <td style="width:28px;vertical-align:top;padding-top:1px;">
                    <table cellpadding="0" cellspacing="0"><tr><td style="width:22px;height:22px;border-radius:50%;background:#0F67FF;color:#ffffff;font-size:11px;font-weight:700;text-align:center;line-height:22px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${i + 1}</td></tr></table>
                  </td>
                  <td style="padding-left:10px;vertical-align:top;">
                    <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;padding-top:3px;">${step}</p>
                  </td>
                </tr>
              </table>`).join("")}
            </div>

            <!-- Contact line -->
            <p style="margin:0;font-size:13px;color:#9BAABB;line-height:1.6;text-align:center;">
              Can&rsquo;t wait? Email us directly at
              <a href="mailto:info@enticeinnovations.com" style="color:#0F67FF;">info@enticeinnovations.com</a>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px;border-top:1px solid rgba(0,0,0,0.06);background:#F8FAFF;">
            <p style="margin:0;font-size:11px;color:#C0CDD8;text-align:center;">
              © ${new Date().getFullYear()} Entice Innovations · You&rsquo;re receiving this because you submitted a form on our website.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── API Route ────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company = "", service = "", message } = body as Record<string, string>;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const date = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

    const fromAddress = process.env.RESEND_FROM ?? "onboarding@resend.dev";
    const toAddress   = process.env.RESEND_TO   ?? "info@enticeinnovations.com";

    // Run all three in parallel — email is critical, Sheets failure is tolerable
    const [teamMail, userMail, sheet] = await Promise.allSettled([
      // 1. Team notification
      getResend().emails.send({
        from: `Entice Website <${fromAddress}>`,
        to: [toAddress],
        replyTo: email,
        subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
        html: teamEmailHtml({ name, email, company, service, message, date }),
      }),

      // 2. User auto-reply
      getResend().emails.send({
        from: `Entice Innovations <${fromAddress}>`,
        to: [email],
        subject: "We received your message — Entice Innovations",
        html: userEmailHtml(name),
      }),

      // 3. Google Sheets append
      appendToSheet([date, name, email, company, service, message, "New"]),
    ]);

    // Team email is mission-critical
    if (teamMail.status === "rejected") {
      console.error("[contact] Team email failed:", teamMail.reason);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again or email us directly." },
        { status: 500 }
      );
    }

    // Log non-critical failures without blocking the response
    if (userMail.status === "rejected") {
      console.warn("[contact] Auto-reply failed:", userMail.reason);
    }
    if (sheet.status === "rejected") {
      console.warn("[contact] Sheets append failed:", sheet.reason);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
