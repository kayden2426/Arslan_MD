const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFYQ09XM2t4eC9ILzQ5MWIxT09OSlowNFd5MG9ydkRNeDEydFNmelowZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFkyM1d0YThXNUVVcjdhWjN3MTVkNjRaZjBFQ0oxN2JNeFY3WDFYdXRCWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Sm9VWk9jVE85Q2I5bTgxTVpoL3pCZG5PdG5ablczUWorcXFDdGYzeDI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSDNBZTFyRk1STW9BeVJoendkMFcycDNDOGRYRjE0YXVoaU9Daks3NFJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIREpESjRkMEhOTnZoWHQ2NVB6emVydXZxRTFQUEhHbTRzSW1rOG5ia1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlUeEh1VkZCN1RxTmVCNnZzKzh3OHl1UDE1S0VwNE5TUmhWN0tmWjF2aWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlB1eVFzenl6c05PNHhQMXdzSG5Wc0duUFVPZzdJTFRRL2lqVkdHMUNGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjkwU0ViWlZNbVlHWDYwMElUY3U2MjgrNS9mUmduSXBxV2hsMXhmcjFVND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGRE9VTzdZMWpxU1JhSnk3VFNzQWZZUWJrVWJkSkRNRENCaEdhaHBuNHRYWkM0eDlDbnBjUWFaT3FrY3JrbVZFdy9aUWpBWjBHSGttU2lJM1crd2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6ImlveUNVL08vRC90T05xU09mcjRXekRBRDdKZlc5RVNaRWN0VWJZcnV5cmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTcwOTk5OTQ0MDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FBMTkzREI1NkM1NjUxM0ZBMTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDc4MTgzMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTcwOTk5OTQ0MDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FDMTY2N0E5RTNCNjk3MjJGRDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDc4MTgzM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMTcwOTk5OTQ0MDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E4RkREMkU1REM0QThGRDNBOEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDc4MTgzNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSEZMWlYySDgiLCJtZSI6eyJpZCI6IjE3MDk5OTk0NDA3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QivCdkJrwnZCy8J2QnfCdkJ7wnZCnIiwibGlkIjoiMjE1OTUxNTQyODU3OTM0OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMkZuWjBNRUlLeDM4UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnc3FDUW5GamZIZ29jdllwY0JvWlBzV1pwVnB5aWo4Qm1GUmkrSm1KY0N3PSIsImFjY291bnRTaWduYXR1cmUiOiJoMGIzTGNyM0UwdXcrVFdIQUFJRXlmbHoyVnJSWmdrdU5ZWVJNcndYS2MrR20rQVQ3TU0vMno4RHlaQjAvRWV4RzMwNUJVZmQ1R2d2Y055SnFQeFVBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYmxrUHJ1OEk5YjA0eXUxRUpBRi9JV3M3VzFpRXp2UkxEMjJHNS8rWE9JVmhLckIyTHN5UzArN0ZtTEhveStZM3B0L29lTmNhZ3lWZmNtUGZKUW5kaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNzA5OTk5NDQwNzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllMS2drSnhZM3g0S0hMMktYQWFHVDdGbWFWYWNvby9BWmhVWXZpWmlYQXMifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDc4MTgzMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPcGMifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yj7zp0.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
