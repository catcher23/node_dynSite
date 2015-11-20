var fs = require ("fs");

function mergeValues(values, content) {

}

function view(templateName, values, response) {
    var fileContents = fs.readFileSync('./views/' + templateName + '.html');
    response.write(fileContents);

}

module.exports.view = view;
