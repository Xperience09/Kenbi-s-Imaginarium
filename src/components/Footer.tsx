const Footer = () => {
  return (
    <div className="footer">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <div className="text-center container p-4">
            <a
              href="https://www.linkedin.com/in/kenbiriba/"
              className="text-reset me-4"
              target="_blank"
            >
              <img src="/src/assets/linkedin-icon.png" className="icon-img" />
            </a>
            <a
              href="https://www.yourquote.in/kenbi-riba-ckitq/quotes"
              className="text-reset me-4"
              target="_blank"
            >
              <img src="/src/assets/yourquote.png" className="icon-img" />
            </a>
          </div>
        </section>

        <div className="text-center p-4 border-top">
          <p className="text-reset fw-bold">
            {" "}
            © 2024
            <br />
          </p>
          <h4 className="text-reset fw-bold"> Kenbi's Imaginarium</h4>
          <a
            className="text-reset dev-info"
            target="_blank"
            href="https://www.linkedin.com/in/anubhav-bhandary-6183b1192/"
          >
            Developer's Info
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
