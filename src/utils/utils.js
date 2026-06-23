export function generateOtp(){
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp){
    return `<!DOCTYPE html>
    <html>
    <head>
        <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        h1{
            color: #333;
        }
    </style>
    </head>
    <body>
        <h1>OTP Verification</h1>
        <p>Your OTP is: ${otp}</p>
    
    </body>
    </html>`
    
}

