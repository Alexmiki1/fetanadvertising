import { clients, clientsSection } from "@/lib/content";
import Image from "next/image";

export function Clients() {
  return (
    <section className="clients">
      <div className="wrap">
        <p className="eyebrow">{clientsSection.eyebrow}</p>
        <h2 className="clients-heading display">{clientsSection.heading}</h2>
      </div>
      <div className="client-grid">
        <style>{`
          .client-cell .client-img {
            filter: grayscale(100%) brightness(0) invert(1);
            opacity: 0.5;
            transition: all 0.3s ease;
            object-fit: contain;
          }
          .client-cell:hover .client-img {
            filter: none;
            opacity: 1;
            transform: scale(1.06);
          }
        `}</style>
        {clients.map((client) => (
          <div key={client.name} className="client-cell">
            <div style={{ position: 'relative', width: '140px', height: '70px' }}>
              <Image 
                src={client.logo} 
                alt={client.name} 
                fill
                className="client-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
