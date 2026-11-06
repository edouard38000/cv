// Refreshes src/data/github-activity.json with the last two months of the
// signed-in GitHub account's contribution calendar (private work included).
// Run: node scripts/github-activity.mjs   (needs the gh CLI, signed in)
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const to = new Date();
const from = new Date(to);
from.setUTCMonth(from.getUTCMonth() - 2);
from.setUTCDate(from.getUTCDate() - from.getUTCDay()); // start on a Sunday, like GitHub

const query = `query($from: DateTime!, $to: DateTime!) {
  viewer {
    login
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

const { viewer } = JSON.parse(
  execFileSync("gh", [
    "api", "graphql",
    "-f", `query=${query}`,
    "-f", `from=${from.toISOString()}`,
    "-f", `to=${to.toISOString()}`,
  ], { encoding: "utf8" })
).data;
const calendar = viewer.contributionsCollection.contributionCalendar;

const activity = {
  login: viewer.login,
  total: calendar.totalContributions,
  weeks: calendar.weeks.map(({ contributionDays }) =>
    contributionDays.map(({ date, contributionCount, contributionLevel }) => ({
      date,
      count: contributionCount,
      level: LEVELS[contributionLevel],
    }))
  ),
};

writeFileSync(
  new URL("../src/data/github-activity.json", import.meta.url),
  `${JSON.stringify(activity, null, 2)}\n`
);
console.log(`${activity.login}: ${activity.total} contributions`);
