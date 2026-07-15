import { tickerServices } from "@/lib/content";

export function ServicesTicker() {
  const items = [...tickerServices, ...tickerServices];

  return (
    <div className="ticker-band">
      <div className="ticker-track">
        {items.map((service, i) => {
          const withinSet = i % tickerServices.length;
          const lit = withinSet % 3 === 0 ? "lit" : "";
          return (
            <span key={`${service}-${i}`} className={lit}>
              {service}
            </span>
          );
        })}
      </div>
    </div>
  );
}
