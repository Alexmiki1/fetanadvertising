import { services, servicesSection } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function ServiceName({ name }: { name: string }) {
  const parts = name.split("\n");
  return (
    <>
      {parts.map((part, i) => (
        <span key={part}>
          {part}
          {i < parts.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

export function ServiceGrid() {
  const headingLines = servicesSection.heading.split("\n");

  return (
    <section className="services" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="display">
            {headingLines[0]}
            <br />
            {headingLines[1]}
          </h2>
          <p>{servicesSection.subcopy}</p>
        </Reveal>
        <Reveal className="service-grid">
          {services.map((service) => {
            if (service.highlight) {
              return (
                <div
                  key={service.name}
                  className="service-card"
                  style={{ background: "var(--yellow)" }}
                >
                  <div />
                  <div>
                    <h3
                      className="sc-name display"
                      style={{ color: "var(--black)" }}
                    >
                      <ServiceName name={service.name} />
                    </h3>
                    <p
                      className="sc-desc"
                      style={{ color: "rgba(10,10,10,0.75)" }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={service.index}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card"
              >
                <span className="sc-index mono">{service.index}</span>
                <div>
                  <h3 className="sc-name display">
                    <ServiceName name={service.name} />
                  </h3>
                  <p className="sc-desc">{service.desc}</p>
                </div>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
