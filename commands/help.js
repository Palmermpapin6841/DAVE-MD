// GIFTEDDAVE PROPERTY 😊

const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, m, quoted) {
    const helpText = `
╭━━━《 *𝐃𝐀𝐕𝐄-𝐌𝐃* 》━━━━━┈⊷
┃❍⁠⁠╭──────────────
┃❍⁠⁠│▸  *Usᴇʀ* : 𝐆𝐢𝐟𝐭𝐞𝐝 𝐃𝐚𝐯𝐞 👻 
┃❍⁠⁠│▸  *ʙᴀɪʟᴇʏs* : 𝐌𝐮𝐥𝐭𝐢 𝐝𝐞𝐯𝐢𝐜𝐞
┃❍⁠⁠│▸  *𝖳ʏᴘᴇ* : 𝐍𝐨𝐝𝐞𝐣𝐬
┃❍⁠⁠│▸  *ᴘʟᴀᴛғᴏʀᴍ* : 𝐇𝐞𝐫𝐨𝐤𝐮
┃❍⁠⁠│▸  *ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ* : +254104260236
┃❍⁠⁠│▸  *ᴍᴏᴅᴇ* : |.|
┃❍⁠⁠│▸  *ᴄᴏᴍᴍᴀɴᴅs* : 214
┃❍⁠⁠│▸  *𝖣ᴇᴠᴇʟᴏᴘᴇʀ* : ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ
┃❍⁠⁠│▸  *𝖵ᴇʀsɪᴏɴ* : 𝟏.𝟎.𝟎
┃❍⁠⁠╰──────────────
╰━━━━━━━━━━━━━━━━━━━┈⊷
*𝐀𝐯𝐚𝐢𝐥𝐥𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐦ᴀ𝐧𝐝𝐬:*
╭━━━━━━━━━━━━━━━┈⊷
┃  *General Commands*:
║ • help or .menu
║ • ping
║ • alive
║ • tts <text>
║ • owner
║ • joke
║ • quote
║ • fact
║ • weather <city>
║ • news
║ • attp <text>
║ • lyrics <song_title>
║ • 8ball <question>
║ • groupinfo
║ • staff or .admins 
║ • vv
║ • trt <text> <lang>
║ • ss <link>
║ • jid
╰━━━━━━━━━━━━━━━┈⊷
╭━━━━━━━━━━━━━━━┈⊷
┃ *Admin Commands*:
║ • ban @user
║ • promote @user
║ • demote @user
║ • mute <minutes>
║ • unmute
║ • delete or .del
║ • kick @user
║ • warnings @user
║ • warn @user
║ • antilink
║ • antibadword
║ • clear
║ • tag <message>
║ • tagall
║ • chatbot
║ • resetlink
║ • welcome <on/off>
║ • goodbye <on/off>
╰━━━━━━━━━━━━━━━┈⊷
╭━━━━━━━━━━━━━━━┈⊷
┃ *Owner Commands*:
║ • mode
║ • autostatus
║ • clearsession
║ • .antidelete
║ • cleartmp
║ • setpp <reply to image>
║ • autoreact
╰━━━━━━━━━━━━━━━┈⊷
╭━━━━━━━━━━━━━━━━┈⊷
┃ *Image/Sticker Commands*:
║ • blur <image>
║ • simage <reply to sticker>
║ • sticker <reply to image>
║ • tgsticker <Link>
║ • meme
║ • take <packname> 
║ • emojimix <emj1>+<emj2>
╰━━━━━━━━━━━━━━━┈⊷ 
╭━━━━━━━━━━━━━━━┈⊷
┃ *Game Commands*:
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╰━━━━━━━━━━━━━━━┈⊷

╭━━━━━━━━━━━━━━━┈⊷
┃ *AI Commands*:
║ ➤ .gpt <question>
║ ➤ .gemini <question>
║ ➤ .imagine <prompt>
║ ➤ .flux <prompt>
╰━━━━━━━━━━━━━━━┈⊷

╭━━━━━━━━━━━━━━━━┈⊷
┃ *Fun Commands*:
║ ➤ .compliment @user
║ ➤ .insult @user
║ ➤ .flirt 
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
║ ➤ .simp @user
║ ➤ .stupid @user [text]
╰━━━━━━━━━━━━━━━┈⊷

╭━━━━━━━━━━━━━━━┈⊷
┃ *Textmaker*:
║ • metallic <text>
║ • ice <text>
║ • snow <text>
║ • impressive <text>
║ • matrix <text>
║ • light <text>
║ • neon <text>
║ • devil <text>
║ • purple <text>
║ • thunder <text>
║ • leaves <text>
║ • 1917 <text>
║ • arena <text>
║ • hacker <text>
║ • sand <text>
║ • blackpink <text>
║ • glitch <text>
║ • fire <text>
╰━━━━━━━━━━━━━━━┈⊷

╭━━━━━━━━━━━━━━┈⊷
┃ *Downloader*:
║ • play <song_name>
║ • song <song_name>
║ • instagram <link>
║ • facebook <link>
║ • tiktok <link>
║ • video <song name>
║ • ytmp4 <Link>
╰━━━━━━━━━━━━━━━┈⊷

╭━━━━━━━━━━━━━━━┈⊷
┃ *Github Commands:*
║ • git
║ • github
║ • sc
║ • script
║ • repo
╰━━━━━━━━━━━━━━━┈⊷

> ʀᴇɢᴀʀᴅs ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ👻
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            const botImage = fs.readFileSync(imagePath);
            await sock.sendMessage(m, {
                image: botImage,
                caption: helpText,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363400480173280@newsletter",
                        newsletterName: "POWERED BY GIFTEDDAVE TECH",
                        serverMessageId: -1,
                    }
                }
            }, { quoted });
        } else {
            console.error("Bot image not found at:", imagePath);
            await sock.sendMessage(m, {
                text: helpText,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363400480173280@newsletter",
                        newsletterName: "POWERED BY GIFTEDDAVE TECH",
                        serverMessageId: -1,
                    }
                }
            });
        }
    } catch (err) {
        console.error("Error in help command:", err);
        await sock.sendMessage(m, { text: helpText });
    }
}

module.exports = helpCommand;