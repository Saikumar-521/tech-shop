import servicesData from "../data1/servicesData";

export const Services = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="text-center mb-4">
        <p className="fw-bold opacity-75 fs-3">
          Our Advantages
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center g-4">

          {servicesData.map(item => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3 d-flex align-items-start">
              <div className="fs-1 text-danger me-3">
                {item.icon}
              </div>
              <div>
                <p className="fw-bold fs-5 mb-1">{item.title}</p>
                <p className="small text-secondary mb-0">
                  {item.info}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};
