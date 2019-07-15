const sass = require('node-sass');
const config = require('./motley.config.json');

const application = process.argv[2]

config.applications.map(app => {
  console.log(app)
  const sassOptions = {
    includePaths: [
      `sass/styles/applications/${app}/variables.scss`,
      `sass/styles/app.scss`,
      `sass/styles/applications/${app}/${app}.scss`,
    ],
    outFile: 'dist/online-cb/app.css'
  }

  sass.renderSync(sassOptions)
})