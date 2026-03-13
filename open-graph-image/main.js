import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { generateImage } from './generate.js';

const argv = yargs(hideBin(process.argv))
  .option('title', {
    alias: 't',
    describe: 'Blog post title'
  })
  .option('date', {
    alias: 'd',
    describe: 'Date of the blog post i.e. March 2nd, 2026'
  })
  .option('filename', {
    alias: 'f',
    describe: 'Filename for the generated image i.e. my-image'
  })
  .option('site', {
    alias: 's',
    default: 'febog',
    describe: 'Site name'
  })
  .demandOption(['title', 'date', 'filename'], 'Please provide the title, date and filename to generate image.')
  .version()
  .help()
  .parse();

await generateImage({
  title: argv.title,
  date: argv.date,
  blogName: argv.site,
  output: `images/${argv.filename}.png`,
});
