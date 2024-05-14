import fs from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), "public", "joke.json");

const main = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

main().then(() => console.log("Done."));