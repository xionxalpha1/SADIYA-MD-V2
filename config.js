const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=IIQU3QBD#5Q0Vb1PncIPFWnk3BQoi4S7T6ABTvH-T_tETvcvE2dY", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
