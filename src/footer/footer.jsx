import { footMenu as footerData, footSocial } from "../data1/footerData";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-secondary">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h2 className="text-white mb-3">Tech-Shop</h2>

            <p className="small mb-3">
              Subscribe to our email alerts to receive early discount offers
              and new product updates.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="form-control form-control-sm bg-dark text-white border-secondary mb-3"
            />

            <button className="btn btn-danger btn-sm px-4">
              Subscribe
            </button>
          </div>
          {footerData.map(section => (
            <div key={section.id} className="col-6 col-md-2">
              <h6 className="text-white mb-3 fw-semibold">{section.title}</h6>

              <ul className="list-unstyled small">
                {section.menu.map(item => (
                  <li key={item.id} className="mb-2">
                    <Link
                      to={item.path}
                      className="text-secondary text-decoration-none hover-link"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
      <div className="border-top border-secondary py-3">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          <p className="small m-0">
            © 2025 | All Rights Reserved
          </p>

          <div className="d-flex gap-3 fs-5">
            {footSocial.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className="text-secondary hover-link"
              >
                {item.icon}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
};
