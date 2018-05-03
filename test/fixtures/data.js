var fs = require('fs');
var glob = require('glob');
var path = require('path');

// Build file listings
var sb = glob.sync(path.resolve(__dirname, './data/*.sb'));
var sb2 = glob.sync(path.resolve(__dirname, './data/*.sb2'));
var sprite2 = glob.sync(path.resolve(__dirname, './data/*.sprite2'));
// Sprite2 and Sprite3 jsons have modified file extensions
// so that they don't get caught here but can still be used by the
// validate unit tests
var json = glob.sync(path.resolve(__dirname, './data/*.json'));
var gzipJson = glob.sync(path.resolve(__dirname, './data/*.json.gz'));

// Read files and convert to buffers
for (var a in sb) sb[a] = fs.readFileSync(sb[a]);
for (var b in sb2) sb2[b] = fs.readFileSync(sb2[b]);
for (var c in json) json[c] = fs.readFileSync(json[c]);
for (var d in gzipJson) gzipJson[d] = fs.readFileSync(gzipJson[d]);
for (var e in sprite2) sprite2[e] = fs.readFileSync(sprite2[e]);

// Return listings
module.exports = {
    empty: {
        sb: fs.readFileSync(path.resolve(__dirname, './data/_empty.sb')),
        sb2: fs.readFileSync(path.resolve(__dirname, './data/_empty.sb2')),
        json: fs.readFileSync(path.resolve(__dirname, './data/_empty.json')),
        gzipJson: fs.readFileSync(path.resolve(__dirname, './data/_empty.json.gz'))
    },
    example: {
        sb: fs.readFileSync(path.resolve(__dirname, './data/_example.sb')),
        sb2: fs.readFileSync(path.resolve(__dirname, './data/_example.sb2')),
        json: fs.readFileSync(path.resolve(__dirname, './data/_example.json')),
        gzipJson: fs.readFileSync(path.resolve(__dirname, './data/_example.json.gz'))
    },
    sprites: {
        default_cat_sprite2: fs.readFileSync(path.resolve(__dirname, './data/_default_cat.sprite2')),
        default_cat_sprite2_json: fs.readFileSync(path.resolve(__dirname, './data/_default_cat.sprite2json')),
        example_sprite2: fs.readFileSync(path.resolve(__dirname, './data/_example_sprite.sprite2')),
        example_sprite2_json: fs.readFileSync(path.resolve(__dirname, './data/_example_sprite.sprite2json'))
    },
    sb: sb,
    sb2: sb2,
    json: json,
    gzipJson: gzipJson,
    sprite2: sprite2
};
