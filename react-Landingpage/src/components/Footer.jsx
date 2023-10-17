import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <section className="grid">
        <article>
          <img src="/salat.jpeg" alt="salat" />
          <h4>Lecjer Salat</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>30.80€</p>
        </article>
        <article>
          <img src="/pizza.jpeg" alt="pizza" />
          <h4>Lecker Pizza</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>30.30€</p>
        </article>
        <article>
          <img src="/frikadellen.jpeg" alt="frikadellen" />
          <h4>Sehr lecker frikadellen</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>30.20€</p>
        </article>
        <article className="flex-column">
          <img src="/glass.jpeg" alt="glass" />
          <h4>Schönes Glass</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>30.90€</p>
        </article>
        <article className="flex-column">
          <img src="/pizza2.jpeg" alt="Pizza2" />
          <h4>Nochmal Pizza</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>20.50€</p>
        </article>
        <article className="flex-column">
          <img src="/scampi.jpeg" alt="scampi" />
          <h4>Scampi</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>30.90€</p>
        </article>
        <article className="flex-column">
          <img src="/spagetthi.jpeg" alt="spagetthi" />
          <h4>Besonderes Spagetti</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>10.25€</p>
        </article>
        <article className="flex-column">
          <img src="/teller.jpeg" alt="teller" />
          <h4>Leche Teller ;)</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
            tempora labore eius magnam quos!
          </p>
          <p>30.40€</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
