const fs = require('fs');
const currentVersion = require('../package.json').version;

const run = async() => {
  const changelog = (await fs.promises.readFile(__dirname + '/../CHANGELOG.md')).toString().split('\n');

  let currentChangelog = [];
  let end = false;
  let releaseFound = false;
  let currentVersionPattern = new RegExp(`^## v${currentVersion}$`, 'i');
  let otherVersionPattern = new RegExp(`^## v?.*$`, 'i');
  do {
    const line = changelog.shift()    ;

    if (line.match(currentVersionPattern)) {
      releaseFound = true;
      currentChangelog.push(line);
    } else if (releaseFound && line.match(otherVersionPattern)) {
      end = true;
    } else if (releaseFound) {
      currentChangelog.push(line);
    }
  } while (changelog.length && !end)
  console.log(currentChangelog.join('\n'));
};

run();

