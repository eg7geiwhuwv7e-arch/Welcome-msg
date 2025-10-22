

// Library ko import karein
const TelegramBot = require('node-telegram-bot-api');

// Apna API Token yahan daalein. Yeh sabse best tareeka hai.
// Render/Koyeb ki settings me जाकर 'Environment Variable' set karna hoga.
const token = process.env.TELEGRAM_BOT_API_TOKEN;

// Web App ka URL (Vercel/Netlify se milega)
const webAppUrl = 'https://eg7geiwhuwv7e-arch.github.io/Free-shib-inu/'; // <-- Yahan Web App ka URL daalein

// Community ka URL
const communityUrl = 'https://t.me/Rich_air_drop_bot'; // <-- Yahan Community ka URL daalein

// Bot ko start karein
const bot = new TelegramBot(token, { polling: true });

console.log('Bot has been started and is listening for commands...');

// Jab koi user '/start' command bhejega to ye code chalega
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;

    // Welcome message ka text
    const welcomeMessage = `
👋 Hello, *${userName}*!

Welcome to 💰 RichAirDrop 🚀

Ready to earn more? Tap below to open the app! 🌾
    `;

    // Buttons ka layout
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    // Pehla button: Web App ko open karne ke liye
                    { 
                        text: 'Open My RichAirDrop App', 
                        web_app: { url: webAppUrl } 
                    }
                ],
                [
                    // Dusra button: Community channel/group ke liye
                    { 
                        text: '💬 Join Community', 
                        url: communityUrl
                    }
                ]
            ]
        }
    };

    // User ko message aur buttons bhejein
    bot.sendMessage(chatId, welcomeMessage, options);
});
