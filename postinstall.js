const fs = require('node:fs');
let package_json = require('./package.json');
let package_name = '';
// get just the name, not the org if there is one
if (package_json.name.includes('/')) {
  let name = package_json.name.split('/');
  package_name = name[1];
} else {
  package_name = package_json.name;
}
fs.cp(
  process.env.INIT_CWD + `/node_modules/${package_json.name}/project`,      // copy the ./project folder
  process.env.INIT_CWD + '/',                                               // to the typeCAD project folder structure
  { recursive: true, force: true, errorOnExist: false },
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);