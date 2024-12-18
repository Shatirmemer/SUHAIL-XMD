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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923006838210";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_48_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFLNUNkejZtV2lQcGJ1QkRaa1R6VGxwREdKVzM3OW1FeWcwUmJETU05NTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZGYnluckdfUUxTZTlVTUJrV3paeVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzYyOTkyYmQtNTNkZi00NTIwLTgzY2ItNTAwNGQ1ODJkZTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDM5LFxuICAgICAgMTc1LFxuICAgICAgMTMxLFxuICAgICAgMTQyLFxuICAgICAgMjMwLFxuICAgICAgMjQ5LFxuICAgICAgMjM4LFxuICAgICAgMjcsXG4gICAgICA5NixcbiAgICAgIDMzLFxuICAgICAgMTEyLFxuICAgICAgMyxcbiAgICAgIDMwLFxuICAgICAgMjQzLFxuICAgICAgMTIsXG4gICAgICAxMjAsXG4gICAgICAxNTksXG4gICAgICAyMjksXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAyMTEsXG4gICAgICAyMzYsXG4gICAgICAyMzQsXG4gICAgICA2NSxcbiAgICAgIDcyLFxuICAgICAgMjIsXG4gICAgICAyMjAsXG4gICAgICAxMTQsXG4gICAgICAxODAsXG4gICAgICA5MixcbiAgICAgIDk0LFxuICAgICAgMTM5LFxuICAgICAgMjI4LFxuICAgICAgMTc5LFxuICAgICAgMjIwLFxuICAgICAgMTM4LFxuICAgICAgNzUsXG4gICAgICAyMDgsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR004V0dTUUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NTc0OTkxMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjfCdkKjwnZCwIPCdkKXwnZCo8J2QmvCdkJ3wnZCi8J2Qp/CdkKAuLi7iq7fwlqSQc+G0gOG0gMm0yargvIbhtIDKnOG0jeG0h+G0hfCWpJDiq7hcIixcbiAgICBcImxpZFwiOiBcIjI1MjY4MjA2OTY2Nzk1MDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puRGx0NENFS2JkaTdzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFNOZkIyTlZtL1FIL0Jod3BQdkRobHpkNTRCMWxSV3ZteXFSUEtQanpoTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPem9DMW93anBzUXNBYlVhbW5TSFlJWW5VdUZPYXFTOHNDemhjMzRkRzdNZlNvSHRZM0RCKy92dll0REZtVUlVZ3VhbzVUcThxQi94aW9pVTF4ZmtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDNFhsZWNENUdqeWFBemxDaW90eFZxa1NrT0ZLWk13Tks1YjVZVHdUZVJYM3g5UlRZYS9URkg1ZVlZV2xMSVdrdVp6SzBDZUMxQWdHQ3ovY2NEVWFCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTU3NDk5MTI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDUzNjg3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtIOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0g5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDJnVHR0eFhtbkZkbmM3YWxGRk9iYnFSQXIzTytSSGdxU0NuWWc2M1g3WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MzQzNzIyNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUwNTY1ODI1OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
