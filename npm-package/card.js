const chalk = require("chalk");
const boxen = require("boxen");


const cardData = {
  name: chalk.bold("      👋 Hello, I am Hemang Yadav\n  Web Developer | Building in Public | Open Source Enthusiast"),
  work: `${chalk.white("A Passionate Developer")}`,
  github: chalk.gray("https://github.com/") + chalk.green("Zemerik"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("Zemerik"),
  twitter: chalk.gray("https://twitter.com/") + chalk.white("Zemerik_X"),
  instagram: chalk.gray("https://instagram.com/") + chalk.magenta("Zemerik_Insta"),
  npx: chalk.red("npx") + " " + chalk.white("Zemerik"),
  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelInstagram: chalk.white.bold("  Instagram:"),
  labelCard: chalk.white.bold("       Card:"),
};

exports.Card = boxen(
  [
    `${cardData.name}`,
    ``,
    `${cardData.labelWork}  ${cardData.work}`,
    ``,
    `${cardData.labelGitHub}  ${cardData.github}`,
    `${cardData.labelLinkedIn}  ${cardData.linkedin}`,
    `${cardData.labelTwitter}  ${cardData.twitter}`,
    `${cardData.labelInstagram}  ${cardData.instagram}`,
    ``,
    `${cardData.labelCard}  ${cardData.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);