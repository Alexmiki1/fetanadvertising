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
            filter: grayscale(100%) brightness(0) invert(0.6);
            object-fit: contain;
          }
        `}</style>
        {clients.map((client) => (
          <div key={client.name} className="client-cell">
            <div style={{ position: 'relative', width: '140px', height: '70px', transform: client.scale ? `scale(${client.scale})` : undefined }}>
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
