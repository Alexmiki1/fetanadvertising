import { clients, clientsSection } from "@/lib/content";

export function Clients() {
  return (
    <section className="clients">
      <div className="wrap">
        <p className="eyebrow">{clientsSection.eyebrow}</p>
        <h2 className="clients-heading display">{clientsSection.heading}</h2>
      </div>
      <div className="client-grid">
        {clients.map((name) => (
          <div key={name} className="client-cell">
            <span className="client-logo">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
