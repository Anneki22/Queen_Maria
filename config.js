//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "fareedjimoh06@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/abbybots141/Queen_Maria";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VahOucpCcW4s1Zk3O61A";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VahOucpCcW4s1Zk3O61A";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/zw89uk.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348077825595";
global.owner = process.env.OWNER_NUMBER || "2348077825595";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/evkqex.mp4";
global.waPresence = process.env.WAPRESENCE || "off";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mariapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENRMEtGUXZPN01NR3Rwc0sydUhPY0lHRDgzeUJXWmlmZWZsU1lkNDJVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWlNV2tTY3B6ZFV0aEFEWjVTb1FZM2ExR3hHaWdjNllrUHlScS9nV0xsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TWl0NndvZGdrLzh3em1Ucy9wRVlIdDA5ODcxWDdGR0ROYkQyV2JRdmx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MjdlaWhzT0tPS2Nicms3MzBwVnUzTDFjZDNwbDVlLzdmNzVZcXJNUnhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFU2lhTFJ6WFgySWo5WUJ4ZnN3aFlNWldwd3VHbWoxMHlEMURlRkN1a2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo5RUVaby9HZUN6c1F5cWpVcHN5K0ZIRkh0T3Q3Smsra1VhQXpiTUxrUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01lNUVvZkZjcVhobVdiczhoWENpVW8vYkV5b3d6NmJtVnlzbzFwNmlWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlY2cDFGb093OFZ3Ty92NHVVbk85NUhCZEQ3MDhYRG55czR2WmY4S2dXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF6ak53N1hjL1VCakpoL0xhekZiSTJrUkJrbUp1RVMycUlGbk1tY1hQWmVFREVMUHdBZ21wQ1E0aFdIaFNBaXN2b3E2aC80ZGJYR0orNFJzZm1JR2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IkZoYjdZQ3FtR01rVWNNK2VPdThqV0RDUXJ0QVFyVnUvenRMT3Q1Y2ZDcGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikd1RHZUM2t0U1J1Z3ZWMEF3dWlfUkEiLCJwaG9uZUlkIjoiMTdkZTA5YWEtODQ4MC00ODAxLTkwNTEtZjNhMmMzZGJmNjMwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZoY3QxWkRzOTZIMGFTR3VhamZRZ0piWjk4az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWOVdYUk9MUkNSdHlpcVRNeGJHRjREYmJwTjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVE5OUFoyNFoiLCJtZSI6eyJpZCI6IjIzNDgwNzc4MjU1OTU6NTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5q27X++8ru+8pe+8re+8pe+8s++8qe+8uCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT09qbVhZUXdmQ011d1lZQ0NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibzVPV1NtUGg5MmVtLzJMSnNySEVoWTR5dGZWdHJaWTZtVVBCczBuTytodz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUFRQSWJJcUcySW5ESHVqeHpYb0pKSGlteE5tWVZ0L0hnN2dYaWJSbmVQWHBTTEtDZHYzRUI2OVF2VGovZ1UrSCtlREdyWUlJQXZDSXUvY1Yzc0Q1Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkFKencrdUNlaldaRDBxbW81alFhZkhDL21naU5WNW04VTF4UDJaemVzRCtmTlprWmQ4WWl1dXpvTTdlUGp4ZnVvUTJYWmZvZ2JtZmhzUkg0UWJzN2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA3NzgyNTU5NTo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhT1Rsa3BqNGZkbnB2OWl5Ykt4eElXT01yWDFiYTJXT3BsRHdiTkp6dm9jIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NTU1NzI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJhdSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ENMA™`",
  author: process.env.PACK_AUTHER || "死_ＮＥＭＥＳＩＸ",
  packname: process.env.PACK_NAME || "ENMA",
  botname: process.env.BOT_NAME || "ENMA",
  ownername: process.env.OWNER_NAME || "死_ＮＥＭＥＳＩＸ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
