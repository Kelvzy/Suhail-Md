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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_04_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICA4NixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRXREFlZXgwVkZsSFNqTEEraVJtNHJUTEh0Rmp5MWxPN3p1T3VxNmprRTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzOTc1ODk0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0YyRTgwODlDOTJCMDFCRDMxODQyMEFCNkUwNzIwMjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzQ3NDc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzOTc1ODk0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEYyQTU3MENBMDNEMDgyODUyRTI1OEY1RUM2M0ZCRjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzQ3NDc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxieTIxRUkxVFdHOW92dGZUbzEwdndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA4MjBhZmYtMGM1OS00YTRiLTk1MTYtNTllOTI4MGM4NWM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICA1NSxcbiAgICAgIDE5OCxcbiAgICAgIDIyOSxcbiAgICAgIDIyMixcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAxODcsXG4gICAgICA1MCxcbiAgICAgIDMyLFxuICAgICAgOCxcbiAgICAgIDM1LFxuICAgICAgMjQxLFxuICAgICAgNTksXG4gICAgICAyMTAsXG4gICAgICAyMDQsXG4gICAgICA3MyxcbiAgICAgIDE2NCxcbiAgICAgIDQ2LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE5NixcbiAgICAgIDcsXG4gICAgICAyMDYsXG4gICAgICAyMzEsXG4gICAgICA4NSxcbiAgICAgIDExOCxcbiAgICAgIDE2OSxcbiAgICAgIDI4LFxuICAgICAgMzMsXG4gICAgICAxMzYsXG4gICAgICAxOTgsXG4gICAgICAzMCxcbiAgICAgIDQwLFxuICAgICAgMzMsXG4gICAgICAyMzQsXG4gICAgICAxMyxcbiAgICAgIDI0MSxcbiAgICAgIDIwNCxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRQQkI3RjVMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM5NzU4OTQ5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLZWxnbG9iYWxcIixcbiAgICBcImxpZFwiOiBcIjExMDcwMzI2ODYzODg1NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ003VTRFNFFqdHZtdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlV5MGYyN2dCVmNOdWhScCt3RjJUSHF0dDNmVjdZQXh6WlY5eE95QXN3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpaXlHMWhqLzM1RVdwc0l2dFR1ZzdhSjNTdjI5Skhsa1FDQWFiU0lGV2pUQmJPM2ZSU0xOZzhCNk5aNUlFODltOW52cVB5T1R3UDJNMEFjdHVJZjNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXdlM5c29IV3FiVjZOWnRBS0ZjVE4wUHFENXU5WWlOQ3NKQzFIS2dvWjVDZHAxR3FJeUg4WnRsd013M0ozR1VQTWRGODdXNWNuQ0liS2dxQVNyUFFodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5NzU4OTQ5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNDc0NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCOEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI4Si5qc29uIjogIntcImtleURhdGFcIjpcImVwWXBIalYvcEhMd2xySmF6TkxzU2FrY0pEVjI3VEtpOW5CMEdyZVdGTUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY1MTYxNTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyNDQ1NjYxNThcIn0iCn0="  // PUT your SESSION_ID 


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
