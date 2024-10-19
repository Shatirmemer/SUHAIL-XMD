const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_22_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDk1LFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIituMXloSG1xZUw3L0ZQNkpNZUQweDdnL2E5VEpNQWd4U1dlQ2g0TG1jOXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDA2ODM4MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MzY0MkFBNDNEMDRCM0M0NjhFMTM3OUZFM0U5QjJFRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkzMzY5NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWNfZjlYNEVRQktvY3lwMm94NHp2d1wiLFxuICBcInBob25lSWRcIjogXCJiZjFhZWM1OC01MjJmLTRlMWEtYmU4OS01ZjMwNDE2N2Q1OWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDE3NixcbiAgICAgIDE3OSxcbiAgICAgIDU1LFxuICAgICAgOSxcbiAgICAgIDU5LFxuICAgICAgMTE5LFxuICAgICAgMTEyLFxuICAgICAgNTcsXG4gICAgICA0MixcbiAgICAgIDE3NyxcbiAgICAgIDIzNixcbiAgICAgIDU5LFxuICAgICAgMTYwLFxuICAgICAgODEsXG4gICAgICAyMDgsXG4gICAgICA5MixcbiAgICAgIDE4NCxcbiAgICAgIDI1MSxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyNTEsXG4gICAgICAyMjAsXG4gICAgICAxOTgsXG4gICAgICAxODUsXG4gICAgICA5MixcbiAgICAgIDE2NCxcbiAgICAgIDE5MixcbiAgICAgIDkzLFxuICAgICAgNTUsXG4gICAgICA4OSxcbiAgICAgIDE0MyxcbiAgICAgIDIyMSxcbiAgICAgIDU2LFxuICAgICAgMTg4LFxuICAgICAgMjUwLFxuICAgICAgMTQyLFxuICAgICAgOTcsXG4gICAgICAyMTAsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTktKTkZUNFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwNjgzODIxMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTYyMjk1NDQ4NDUzNjg6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZlN6dWdDRU8rc3pyZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpwVmQ4ajVIQlF3NFFqemEwZk9iMlFFemJjRVdtOStrRkdDUkNCOUtUQTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS1h2V01qYjNmcHl4RWxodlBpdi9mMklhZmlneWU5Y3pReUdoWXBOOUpoMFVwdkt0aUVBSWR1VHlmdkZaUktXSlNzbXduYWdNeElTTDlkVnltbFpWREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSlNiYVVyRkhMblZQaFZKMU95eTdac0Z6b2dhU20zdUVDdTBjT2hQYVRCMjRhb1h6V1kxWGhRa1BmZmxlTHZGSnAyUDU5aTlkSFRlKzZqMHI1Qk03aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDA2ODM4MjEwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkzMzY5NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNRUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1FSi5qc29uIjogIntcImtleURhdGFcIjpcInYwZ1hYTDdmR1ZYazFyR0VwTTd5c3U4UEdkcTRLNDJIZmRYRS9leTFibFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzU2MjYzMTc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
