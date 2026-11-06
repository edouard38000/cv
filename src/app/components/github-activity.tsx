import activity from "@/data/github-activity.json";
import { cn } from "@/lib/utils";

const LEVEL_BG = [
  "bg-[var(--gh-0)]",
  "bg-[var(--gh-1)]",
  "bg-[var(--gh-2)]",
  "bg-[var(--gh-3)]",
  "bg-[var(--gh-4)]",
];

const day = (iso: string) => new Date(`${iso}T00:00:00Z`);
const shortDate = (iso: string, withYear = false) =>
  day(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    ...(withYear && { year: "numeric" }),
    timeZone: "UTC",
  });
const monthOf = (iso: string) =>
  day(iso).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });

function Cell({ level, title }: { level: number; title?: string }) {
  return (
    <span
      title={title}
      className={cn(
        "block size-[11px] rounded-[2px] [print-color-adjust:exact] print:size-[8px]",
        LEVEL_BG[level]
      )}
    />
  );
}

export function GitHubActivity() {
  const { login, total, weeks } = activity;
  const days = weeks.flat();
  const first = days[0].date;
  const last = days[days.length - 1].date;
  const labels = weeks.map((week, index) => {
    const month = monthOf(week[0].date);
    return index === 0 || month !== monthOf(weeks[index - 1][0].date)
      ? month
      : "";
  });
  const summary = `${total.toLocaleString("en-US")} GitHub contributions from ${shortDate(first)} to ${shortDate(last, true)}`;

  return (
    <figure className="hidden shrink-0 space-y-1.5 sm:block print:block print:space-y-1">
      <div role="img" aria-label={summary}>
        <div
          className="mb-1 grid gap-x-[3px] text-[10px] leading-none text-muted-foreground print:gap-x-[2px] print:text-[9px]"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, auto)` }}
          aria-hidden="true"
        >
          {labels.map((label, index) => (
            <span
              key={weeks[index][0].date}
              className="w-[11px] overflow-visible whitespace-nowrap print:w-[8px]"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid grid-flow-col grid-rows-7 gap-[3px] print:gap-[2px]">
          {days.map(({ date, count, level }) => (
            <Cell
              key={date}
              level={level}
              title={`${count} contributions on ${shortDate(date, true)}`}
            />
          ))}
        </div>
      </div>
      <figcaption className="space-y-1 text-[10px] leading-tight text-body print:space-y-0.5 print:text-[9px]">
        <p>
          <a
            className="text-foreground hover:underline"
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {total.toLocaleString("en-US")} contributions
          </a>{" "}
          on GitHub
          <br />
          {shortDate(first)} to {shortDate(last, true)}
        </p>
        <p
          className="flex items-center gap-[3px] text-muted-foreground print:hidden"
          aria-hidden="true"
        >
          <span className="mr-1">Less</span>
          {LEVEL_BG.map((bg, level) => (
            <Cell key={bg} level={level} />
          ))}
          <span className="ml-1">More</span>
        </p>
      </figcaption>
    </figure>
  );
}
