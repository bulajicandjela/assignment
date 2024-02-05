const sass = require("sass");

module.exports = {
  process(src, filename, config, options) {
    const result = sass.renderSync({ file: filename });
    return {
      code: result.css.toString(),
      map: result.map && result.map.toString(),
    };
  },
};
