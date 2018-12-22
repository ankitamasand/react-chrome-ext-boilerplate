const path = require('path')
const paths = require('../config/paths')
const fs = require('fs')

let assetManifest
let manifest

fs.readFile('./build/asset-manifest.json', 'utf8', (err, data) => {
  if (err) throw err
  assetManifest = JSON.parse(data)

  /* Loading manifest.json after successful loading of asset-manifest file */
  fs.readFile('./build/manifest.json', 'utf8', (err, data) => {
    if (err) throw err
    manifest = JSON.parse(data)
    manifest.background.scripts = [
      `${paths.appPath}${assetManifest['runtime~background.js']}`,
      `${assetManifest['background.js']}`
    ]

    fs.writeFile('./build/manifest.json', JSON.stringify(manifest), (err) => {
      if (err) throw err
      console.log('Manifest updated successfully')
    })
  })
})
