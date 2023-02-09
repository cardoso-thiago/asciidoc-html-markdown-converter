const TurndownService = require('turndown')
const fs = require('fs');
const Asciidoctor = require('asciidoctor')

const turndownService = new TurndownService()
const asciidoctor = Asciidoctor()

fs.readFile('./asciidoc/test.adoc', 'utf8', (err, content) => {
    if (err) {
      console.error(err);
      return;
    }

    var html = asciidoctor.convert(content)

    fs.writeFile('./html/test.html', html, err => {
        if (err) {
          console.error(err);
        }
      });

    const markdown = turndownService.turndown(html)

    fs.writeFile('./markdown/test.md', markdown, err => {
        if (err) {
          console.error(err);
        }
      });
  });
