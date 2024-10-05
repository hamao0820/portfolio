import { exec } from "child_process";
import path from "path";

const MD_PATH = path.join("src", "pages", "posts");

const pad = (n: number): string => String(n).padStart(2, "0");
const dateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${pad(month)}-${pad(day)}`;
};
const dataToHHMMSS = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
const dateToYYYYMMDD_HHMMSS = (date: Date): string => {
  return `${dateToYYYYMMDD(date)} ${dataToHHMMSS(date)}`;
};

const blogTemplate = (title: string, data: Date): string => `---
layout: ../../layouts/PostLayout.astro
title: "${title}"
summary: ""
createdAt: "${dateToYYYYMMDD_HHMMSS(data)}"
---

`;

const mdName = (title: string, date: Date): string => {
  return `${dateToYYYYMMDD(date)}_${title}.md`;
};

const main = async () => {
  const title = process.argv[2];
  if (!title) {
    console.error("Title is required.");
    process.exit(1);
  }
  const date = new Date();
  const mdPath = path.join(MD_PATH, mdName(title, date));
  exec(`echo '${blogTemplate(title, date)}' > ${mdPath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Created ${mdPath}`);
  });
};

main();
