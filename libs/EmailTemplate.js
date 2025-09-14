// emailTemplate.js

export const getEmailTemplate = (name,verficationCode, verifyLink) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Email Template</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      .header {
        background: #4F46E5;
        color: #ffffff;
        text-align: center;
        padding: 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 20px;
        color: #333333;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        background: #4F46E5;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        padding: 15px;
        font-size: 12px;
        color: #888888;
        background: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🚀 Welcome to Our App</h1>
      </div>
      <div class="content">
        <p>Hi <b>${name}</b>,</p>
        <p>Thank you for signing up! We’re excited to have you on board.</p>
        <p>Click the button below to verify your email and activate your account:</p>
        <h1 href="${"verifyLink"}" class="button">Verify Email code is ${verficationCode}</h1>
        <p>If you didn’t sign up, you can safely ignore this email.</p>
        <p>Cheers,<br>The Team</p>
      </div>
      <div class="footer">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

// export default getEmailTemplate;


// ..............
// ...............

export const getWelcomeTemplate = (name) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #fdf3e7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      .header {
        background: #f97316; /* Orange */
        color: #ffffff;
        text-align: center;
        padding: 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 20px;
        color: #333333;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        background: #f97316;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        padding: 15px;
        font-size: 12px;
        color: #888888;
        background: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🎉 Welcome to Our App</h1>
      </div>
      <div class="content">
        <p>Hi <b>${name}</b>,</p>
        <p>We’re excited to have you on board. Your account has been successfully verified!</p>
        <p>Click the button below to get started with your journey:</p>
        <a href="https://testfullstack-b5dj.vercel.app/product" class="button">Go to Dashboard</a>
        <p>If you have any questions, just reply to this email—we’re always happy to help.</p>
        <p>Cheers,<br>The Team</p>
      </div>
      <div class="footer">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

// export default {getWelcomeTemplate};
