const sass = require('node-sass');
const config = require('./motley.config.json');
const fs = require('fs')

const writeToDisc = function (result, outFileCss){
  fs.writeFileSync(outFileCss, result.css.toString(), {recursive: true})
}

config.applications.map(app => {
  const file = `sass/styles/applications/${app}/app.scss`
  const outFileCss = `dist/${app}/app.css`
  const outFileScss = `dist/${app}/scss/app.scss`
  const outFileCssMin = `dist/${app}/app.min.css`

  fs.mkdirSync(`dist/${app}/scss`, { recursive: true })

  writeToDisc(sass.renderSync({file}), outFileCss)
  writeToDisc(sass.renderSync({file, outputStyle: 'compressed'}), outFileCssMin)
  fs.writeFileSync(outFileScss, fs.readFileSync(file, 'utf-8'))
})

writeToDisc(sass.renderSync({file: 'sass/styles/app.scss'}), 'dist/app.css')
writeToDisc(sass.renderSync({file: 'sass/styles/app.scss', outputStyle:'compressed'}), 'dist/app.min.css')
