const SYMBOLS = [
  '{ }',
  '</>',
  '()',
  '=>',
  '[]',
  '<>',
  '&&',
  '||',
  '++',
  ';;',
  '?:',
  '!=',
];

export default function CodeBackground() {
  return (
    <div className="code-bg" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          className="code-symbol"
          style={{
            left: `${(i * 5.7) % 100}%`,
            animationDuration: `${18 + (i % 6) * 4}s`,
            animationDelay: `${-((i * 2.1) % 18)}s`,
            fontSize: `${1.1 + ((i * 7) % 4) * 0.25}rem`,
          }}
        >
          {SYMBOLS[i % SYMBOLS.length]}
        </span>
      ))}
    </div>
  );
}
