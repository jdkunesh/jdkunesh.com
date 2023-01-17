const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes, howlazy) {
  howlazy ? "eager" : "lazy";
  
  let metadata = await Image(src, {
    widths: [400, 512, 800, 1280, 1920],
    formats: ["webp", "avif", "jpeg"],
    outputDir: '_site/img'
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: howlazy,
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}


module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/favicon*');
  eleventyConfig.addPassthroughCopy('src/safari-pinned-tab.svg'); 
  eleventyConfig.addPassthroughCopy('src/m*stile-150x150.png');
  eleventyConfig.addPassthroughCopy('src/a*.png'); // android and apple png files 
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml');

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });

  return {
    dir: { input: 'src', output: '_site' }
  };
};
