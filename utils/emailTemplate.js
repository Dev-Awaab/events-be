export function SellEmailTemplate({ name, email }) {
  return `
        
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Congratulations!</title>
          <style>
              /* Add your custom styles here */
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0;
                  text-align: center;
                  padding: 20px;
              }
      
              .container {
                  background-color: #fff;
                  border-radius: 10px;
                  padding: 20px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
              }
      
              h1 {
                  color: #007bff;
              }
      
              p {
                  font-size: 16px;
              }
      
              img {
                  max-width: 100%;
                  height: auto;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Congratulations!</h1>
              <p>Dear ${name},</p>
              <p>Congratulations on your recent achievement! We're thrilled to have you as part of our community.</p>
              <p>Your registration details:</p>
              <ul>
                  <li><strong>Name:</strong> ${name}</li>
                  <li><strong>Email:</strong> ${email}</li>
       
              </ul>
        
                        
              </div>
              <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
              <p>Best regards,<br>Your Event Team</p>
          </div>
      </body>
      </html>
      `;
}
