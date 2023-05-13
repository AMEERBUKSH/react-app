import React from "react";

let Footer = () => {
  return (
    <>
      <div className="container-fluid px-4">
        <footer className="d-flex flex-wrap align-items-center py-3 border-top">
          <div className="col-md-6 d-flex align-items-center">
            <span className="text-muted">  MADE BY WMA - 71289 BATCH 2 </span>
          </div>
          <ul className="nav col-md-6 d-flex justify-content-end list-unstyled ms-auto">
            <li className="fs-4">
              <a
                className="text-muted"
                href="#"
                // target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-2 fs-4">
              <a
                className="text-muted"
                href="#"
                // target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li className="ms-2 fs-4">
              <a
                className="text-muted"
                href="#"
                // target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
