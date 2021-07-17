const sass = require('node-sass');
const config = require('./motley.config.json');
const fs = require('fs')

const writeToDisc = function (result, outFile){
  fs.writeFileSync(outFile, result.css.toString(), {recursive: true})
}

config.applications.map(app => {
  const file = `sass/styles/applications/${app}/app.scss`
  const outFile = `dist/${app}/app.css`
  const outFileMin = `dist/${app}/app.min.css`

  if (!fs.existsSync(`dist/${app}`)){
    fs.mkdirSync(`dist/${app}`, { recursive: true })
  }

  writeToDisc(sass.renderSync({file}), outFile)
  writeToDisc(sass.renderSync({file, outputStyle: 'compressed'}), outFileMin)
})

writeToDisc(sass.renderSync({file: 'sass/styles/app.scss'}), 'dist/app.css')
writeToDisc(sass.renderSync({file: 'sass/styles/app.scss', outputStyle:'compressed'}), 'dist/app.min.css')
