const fs = require('fs')
const shell = require('shelljs')
const config = require('./motley.config.json')

const fileListViews = shell.find('examples/views')
    .filter((file) => file.match(/\.hbs$/))
    .sort()
    .map(hbsFileName => {
        let fileName = hbsFileName.replace(".hbs", "")
        fileName = fileName.split("/").pop()
        return `<div class="row p-3"><a target="preview" href="/${fileName}.html">${fileName}</a></div>`
    })
    .join('\n')



html = `
{{> nav-bar }}
<div class="home-vh">
<div class="row">
    <div class="col-sm-3 m-3" style="height: 800px; overflow-y: scroll">
        <h2>Views</h2>
        ${fileListViews}
    </div>
    <div class="col-sm-8">
        <h1>Preview</h1>
        <iframe style="width: 100%; height: 800px" name="preview" frameborder="0"></iframe>
    </div>

</div>
</div>`
fs.writeFile(__dirname + '/examples/views/index.hbs', html, () => null)
