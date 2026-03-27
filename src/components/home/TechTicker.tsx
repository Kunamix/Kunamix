// components/home/TechTicker.tsx
const TECHS = [
  "React.js",
  "Next.js",
  "Node.js",
  "Flutter",
  "AWS",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
  "Prisma",
  "Redis",
];

const TechTicker = () => (
  <div
    className="border-t border-b border-border py-[0.8125rem] overflow-hidden bg-background"
    aria-label="Technologies we use"
  >
    <div className="flex w-max animate-ticker" aria-hidden="true">
      {[...TECHS, ...TECHS].map((tech, i) => (
        <span
          key={i}
          className="flex items-center gap-3 px-7 font-mono text-[0.6875rem]
                     text-muted-foreground tracking-[0.07em] uppercase whitespace-nowrap"
        >
          {tech}
          <span className="w-[3px] h-[3px] rounded-full bg-primary opacity-50 shrink-0" />
        </span>
      ))}
    </div>
  </div>
);

export default TechTicker;
