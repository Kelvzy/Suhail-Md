const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039758949";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_29_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRElGRzI2TXJFZzhzMExmY2ZxMk0zd0FJSU8raXVGYkR0elhERWhieGNDVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM5NzU4OTQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBN0U0NzA1RUY2OTdFRjRGQ0IxNEFERjAwRjE5NjEzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyNDQ1NjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM5NzU4OTQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMjJENUYzNEQ3QjU2NkMxMDA0MERCNjU4QTBBOTc3RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyNDQ1NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnlia250RmpScktjNjdxUC1mVXg4QVwiLFxuICBcInBob25lSWRcIjogXCJhYmNmZTYzYi1mOWMwLTQwZmItOThjNS0yOWYyMzMwOTA2ZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxLFxuICAgICAgMjA5LFxuICAgICAgMTEzLFxuICAgICAgMjM0LFxuICAgICAgMjM3LFxuICAgICAgNjcsXG4gICAgICAxMTYsXG4gICAgICAxMDQsXG4gICAgICAyMjEsXG4gICAgICAzNixcbiAgICAgIDc3LFxuICAgICAgMjMsXG4gICAgICAyNDcsXG4gICAgICAxMDIsXG4gICAgICA5NixcbiAgICAgIDExNixcbiAgICAgIDEwOSxcbiAgICAgIDEzNixcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDQ5LFxuICAgICAgMCxcbiAgICAgIDEyNSxcbiAgICAgIDIwNyxcbiAgICAgIDI0NixcbiAgICAgIDQ1LFxuICAgICAgNjksXG4gICAgICA4MSxcbiAgICAgIDE1NCxcbiAgICAgIDIyNixcbiAgICAgIDEzNSxcbiAgICAgIDE1OSxcbiAgICAgIDE0LFxuICAgICAgMTAyLFxuICAgICAgNjksXG4gICAgICAxMyxcbiAgICAgIDEzNyxcbiAgICAgIDE1MyxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4OUxBWTFGOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzOTc1ODk0OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2VsZ2xvYmFsXCIsXG4gICAgXCJsaWRcIjogXCIxMTA3MDMyNjg2Mzg4NTU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNN1U0RTRRanJmZ3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZVeTBmMjdnQlZjTnVoUnArd0YyVEhxdHQzZlY3WUF4elpWOXhPeUFzd1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieGNrRWlRSmQ0NldZTmFTV3N0bWNDa2pqRXZCRWROZmdkWjlsOW1RdVRqNmIvSGRRbXprUHJmWmJhNGFTS0xsSHRtWGtyTmllRnNFVzhkVXhxWGpPQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRWxiQjhGVGpIOFFsa2J1d3lRYi9hOWo4WTNqUWo5RHNCVFU5REQ5TjBicThJQU1XQ0ZWNTFhdWtRUlBRKzl1bXRaS1pmNzFLUXJ2YjY4MXpaSEE2RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzOTc1ODk0OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQ0NTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCOEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlcFlwSGpWL3BITHdsckphek5Mc1Nha2NKRFYyN1RLaTluQjBHcmVXRk1BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTE2MTU1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjQ0NTY2MTU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
