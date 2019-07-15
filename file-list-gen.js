const fs = require('fs')
const config = require('./motley.config.json')

fs.readdir(__dirname + '/examples/views', (err, files) => {
  let html = files
    .filter((f) => f.endsWith('.hbs')) // pick hbs files
    .map(f => f.split('.')[0]) // remove the extension
    .map(f => `<br><a href='${f}.html'>${f}</a><br>`)
    .join('\n')

  html = `
{{> nav-bar }}
<div class="home-vh">
${html}
</div>`
  fs.writeFile(__dirname + '/examples/views/index.hbs', html, () => null)

})
