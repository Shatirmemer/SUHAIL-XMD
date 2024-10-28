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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_10_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJScy9QTFFoblFrSDJqY0tyQ2x5QkJmYVVtYTkrQU9YaVY2VkN2VVE5MCtnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5ODEzMDU4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREMwRTY3MzY2NjRBQTZCMzJDRTExMkI0QkFCNTBCOTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMTI0NjMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllKZTdmX3FhUVl1ZmlxTEl6eEdrWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFmODFhOWEtOGEzMi00ZDE3LTgzZmMtYzU1ZTI3MjkxM2FkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDIxNSxcbiAgICAgIDIxMCxcbiAgICAgIDEwLFxuICAgICAgMjUxLFxuICAgICAgMjAyLFxuICAgICAgMTM1LFxuICAgICAgNDMsXG4gICAgICAzNCxcbiAgICAgIDExMyxcbiAgICAgIDIxMixcbiAgICAgIDEzMCxcbiAgICAgIDIxMSxcbiAgICAgIDEwLFxuICAgICAgMjM5LFxuICAgICAgMjUwLFxuICAgICAgNTEsXG4gICAgICAxMzEsXG4gICAgICAxOTYsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAyNyxcbiAgICAgIDE1OCxcbiAgICAgIDI0MCxcbiAgICAgIDE2NSxcbiAgICAgIDIyMixcbiAgICAgIDMyLFxuICAgICAgMTIsXG4gICAgICA4NCxcbiAgICAgIDIzNCxcbiAgICAgIDE4MSxcbiAgICAgIDM0LFxuICAgICAgODcsXG4gICAgICAyMzMsXG4gICAgICAyOSxcbiAgICAgIDIxOSxcbiAgICAgIDIwMyxcbiAgICAgIDEzNixcbiAgICAgIDczLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDYzQlZFQkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5ODEzMDU4MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI3MjE3MDE1MjA1OTE0OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYSG1Nb0dFTSsyL3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiclRlSjJPZEw5YWVDRzlBWG5FSzVObHhDMGJqbHMycE8yWERiVTNjNmZVST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDZ0FoRkxKMzExMnllTFYyYU1waWlqWUw4TmNFckxXWjJwMEhZbDBjS2VXaDAvYW5vamdZT3FmMzZEdE8zaHBnSGZETytHQnpDN29wYjVDNGUyUHFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1aU5yTDQxS0dmcis2ZUdMS3dQUmNVR1ZrOFBQRm5kSk03cnF2OEkyaFViT3NPYnpzSDh1QjlyUCtQbzN6elZxM1N6bzV4RUVqNGxHQWY1R0ovb29EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTgxMzA1ODM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAxMjQ2MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCRVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJFVi5qc29uIjogIntcImtleURhdGFcIjpcIkVJblMvTnh0Um5SdTEzUlJGT3hlZlFEV1R6ODNYdU9obFhhdFpIbVBUaUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2NjIwNDQwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMTI0NjMxMTE3XCJ9Igp9"  // PUT your SESSION_ID 


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

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "XoLKUoZvanFpf7UNPNEtk8Hb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_a84768adf99ae0ac7b7f4dda5a531e945ec84edf2fb6f55e";
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
