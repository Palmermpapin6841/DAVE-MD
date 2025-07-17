// GIFTEDDAVE PROPERTY 😊

const settings = require('../settings');
const fs = require('fs');
const path = require('path');
const os = require('os');
const pkg = require('../package.json');

const startTime = Date.now();

function formatUptime(ms) {
  let seconds = Math.floor(ms / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

async function helpCommand(conn, m, quoted, commands = []) {
  const uptime = formatUptime(Date.now() - startTime);
  const userName = m.pushName || 'User';
  const nodeVersion = process.version;
  const platform = os.platform();
  const totalCommands = commands.length || 214;
  const ownerNumber = settings.owner?.[0] || 'AUTOMATED';
  const devName = settings.developerName || 'FROM SETTINGS';

  const menuCaption = `
━━━《 *𝐃𝐀𝐕𝐄-𝐌𝐃 ᴍᴇɴᴜ* 》━━━━━┈⊷
┃❍⁠⁠╭──────────────
┃❍⁠⁠│▸ *User* : ${userName}
┃❍⁠⁠│▸ *ʙᴀɪʟᴇʏs* : Multi Device
┃❍⁠⁠│▸ *Type* : ${nodeVersion}
┃❍⁠⁠│▸ *Platform* : ${platform}
┃❍⁠⁠│▸ *Owner Number* : ${ownerNumber}
┃❍⁠⁠│▸ *Uptime* : ${uptime}
┃❍⁠⁠│▸ *Mode* : . 
┃❍⁠⁠│▸ *Commands* : ${totalCommands}
┃❍⁠⁠│▸ *Developer* : ${devName}
┃❍⁠⁠│▸ *Version* : ${pkg.version}
┃❍⁠⁠╰──────────────
╰━━━━━━━━━━━━━━━━━━━┈⊷
*𝐀𝐯𝐚𝐢𝐥𝐥𝐚𝐛𝐥𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬:*

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

> ʀᴇɢᴀʀᴅs 𝐃𝐀𝐕𝐄 𝗧𝗘𝗖𝗛👻
`;

  try {
    const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
    const messagePayload = fs.existsSync(imagePath)
      ? {
          image: fs.readFileSync(imagePath),
          caption: menuCaption,
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363400480173280@newsletter',
              newsletterName: 'POWERED BY GIFTED DAVE 𝗧𝗘𝗖𝗛',
              serverMessageId: -1
            }
          }
        }
      : {
          text: menuCaption,
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363400480173280@newsletter',
              newsletterName: 'POWERED BY GIFTED DAVE 𝗧𝗘𝗖𝗛',
              serverMessageId: -1
            }
          }
        };

    await conn.sendMessage(m, messagePayload, { quoted });
  } catch (err) {
    console.error('Error in help command:', err);
    await conn.sendMessage(m, { text: menuCaption });
  }
}

module.exports = helpCommand;