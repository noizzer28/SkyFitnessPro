const fs = require('fs')
fs.writeFileSync(
  './.env.local',
  `REACT_APP_FIREBASE_API_KEY=${process.env.MY_API_KEY}\n`,
)
