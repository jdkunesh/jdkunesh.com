module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    extend: {
      colors: {
        "kd-indigo": "#515281",
        "kd-blonde": "#FAF0BE",
        "kd-blue": "#0070AD",
        "kd-blue-25": "#BFDBEB",
        "kd-deep-purple": "#404660",
        "kd-gray-dark": "#34333E",
        "kd-gray-gray": "#484048",
        "kd-gray-light": "#7A868E",
        "kd-gray-lighter": "#A8A8C0",
        "kd-gray-lightest": "#D1D1DA",
        "kd-green": "#469578",
        "kd-light-green": "#A1BE77",
        "kd-lite-green": "#CEDFB5",
        "kd-isabelline": "#F5EEDE",
        "kd-orange": "#FD6C03",
        "kd-light-orange": "#E89960",
        "kd-stacy-orange": "#F0A628",
        "kd-tangerine": "#FFA96B",
        "kd-purple": "#572A59",
        "kd-red": "#E60A15",
        "kd-yellow": "#FFD400"
      },
      fontFamily: {
        'bst': ['"Big Shoulders Text"'],
        'bsti': ['"Big Shoulders Inline Text"'],
        'bsst': ['"Big Shoulders Stencil Text"']
      }
    }
  }
}
