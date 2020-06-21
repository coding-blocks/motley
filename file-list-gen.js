const fs = require('fs')
const shell = require('shelljs')
const config = require('./motley.config.json')

const fileListViews = shell.find('examples/views')
	.filter((file) => file.match(/\.hbs$/))
	.sort()
	.map(hbsFileName => {
		let fileName = hbsFileName.replace(".hbs", "")
		fileName = fileName.split("/").pop()
		return `<div class="py-2 px-4 text-ellipses"><a target="preview" class="font-sm" href="${fileName}.html">${fileName}</a></div>`
	})
	.join('\n')



html = `
{{> nav-bar }}
<div class="home-vh">
	<div class="row no-gutters">
		<div class="col-sm-3 pb-4 position-relative border-right" style="height: calc(100vh - 70px); overflow-y: scroll">
			<h2 class="position-sticky bg-white p-4">Views</h2>
			${fileListViews}
		</div>
		<div class="col-sm-9 p-4">
			<h2 class="mb-4">Preview</h2>
			<div class="border">
				<iframe style="width: 100%; height: calc(100vh - 175px)" name="preview" frameborder="0"></iframe>
			</div>
		</div>
	</div>
</div>`
fs.writeFile(__dirname + '/examples/views/index.hbs', html, () => null)
