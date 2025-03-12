import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { message: "Server configuration error: Missing email credentials" }, 
        { status: 500 }
      );
    }

    // Create formatted answers for email
    const sections = [
      "Finding a clear vision",
      "Business approach",
      "Decision making",
      "Mentorship",
      "Talent management",
      "Handling success and failure",
      "Business purpose",
      "Leadership identity"
    ];

    let formattedAnswers = '';
    Object.entries(answers).forEach(([questionIndex, answerIndex]) => {
      const qIndex = parseInt(questionIndex);
      formattedAnswers += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${sections[qIndex]}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${getAnswerText(qIndex, Number(answerIndex))}</td>
        </tr>
      `;
    });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Zillionite Leadership" <${process.env.EMAIL_USER}>`,
      to: "itsaliasgar18@gmail.com",
      subject: "Your Zillionite Leadership Assessment Results",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Leadership Assessment Results</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              line-height: 1.6; 
              color: #333;
              max-width: 600px;
              margin: 0 auto;
            }
            .header { 
              background-color: #663399; 
              color: white; 
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content { 
              padding: 20px; 
              background-color: #fff;
              border: 1px solid #e2e8f0;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0;
            }
            th { 
              background-color: #f8f9fa; 
              text-align: left; 
              padding: 12px;
              border-bottom: 2px solid #e2e8f0;
            }
            .footer { 
              text-align: center; 
              margin-top: 30px;
              font-size: 14px;
              color: #718096;
            }
            .button {
              display: inline-block;
              background-color: #663399;
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 4px;
              margin-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Your Leadership Assessment Results</h1>
          </div>
          <div class="content">
            <p>Thank you for completing the Zillionite Leadership Assessment. Your responses provide valuable insights into your leadership style and approach.</p>
            
            <h2>Your Leadership Profile</h2>
            <p>Based on your responses, here's a summary of your leadership characteristics:</p>
            
            <table>
              <thead>
                <tr>
                  <th>Leadership Dimension</th>
                  <th>Your Approach</th>
                </tr>
              </thead>
              <tbody>
                ${formattedAnswers}
              </tbody>
            </table>
            
            <h2>Next Steps</h2>
            <p>To further develop your leadership capabilities, we recommend:</p>
            <ul>
              <li>Reviewing your profile to identify areas of strength and opportunity</li>
              <li>Exploring our leadership resources at Zillionite.com</li>
              <li>Considering a personalized leadership coaching session</li>
            </ul>
            
            <div style="text-align: center; margin-top: 25px;">
              <a href="https://zillionite.vercel.app" class="button">Explore More Resources</a>
            </div>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} Zillionite. All rights reserved.</p>
              <p>This email was sent to you based on your request for leadership assessment results.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ 
      message: "Error sending email", 
      error: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

// Helper function to get the answer text based on question and answer indices
function getAnswerText(questionIndex: number, answerIndex: number): string {
  const answers = [
    [ // Question 1
      "When you find a clear focused vision",
      "When you fit inside your industry's core vision",
      "When you drive the company's vision"
    ],
    [ // Question 2
      "When you do business with a clear target mind",
      "When you do business with all your heart",
      "When you do business with values you hold"
    ],
    [ // Question 3
      "When you take good decisions",
      "When all your bad decisions lead to a good decision",
      "When you can live in both decisions and own complete responsibility with dignity"
    ],
    [ // Question 4
      "When you find the right mentor",
      "When you become a mentor",
      "When you turn failing roles to good year reviews—they seriously LEAD!"
    ],
    [ // Question 5
      "When you have found the right talent",
      "When you can grow the whole team to great heights",
      "When the best talent in the world is ready to work with you"
    ],
    [ // Question 6
      "When your first success is a massive success",
      "When you build a better class, entirely with all the learnings from strings of failures",
      "When you decide to stay relentlessly on the course with success and focus on your end-note"
    ],
    [ // Question 7
      "When your business is a Culture",
      "When your business is a Calling"
    ],
    [ // Question 8
      "When you registered the name as Zillionite",
      "When you lead as a Leader @ Zillionite"
    ]
  ];

  return answers[questionIndex][answerIndex] || "No answer provided";
}
