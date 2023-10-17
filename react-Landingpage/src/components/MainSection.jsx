import "./MainSection.css";
const MainSection = () => {
  return (
    <main>
      <section className="titel">
        <h3>What We Do</h3>
        <h2>We've got evrything you need to launch and grow your business</h2>
      </section>
      <section className="grid">
        <article className="flex-center">
          <img src="/brush.svg" alt="brush " />
          <div>
            <h4>Brand Identity</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              libero itaque saepe nam ut eos eaque, illum labore tenetur aut!
            </p>
          </div>
        </article>
        <article className="flex-center">
          <img src="/object-select.svg" alt="object-select " />
          <div>
            <h4>Illustration</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              libero itaque saepe nam ut eos eaque, illum labore tenetur aut!
            </p>
          </div>
        </article>
        <article className="flex-center">
          <img src="/megaphone.svg" alt="megaphone " />
          <div>
            <h4>Illustration</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              libero itaque saepe nam ut eos eaque, illum labore tenetur aut!
            </p>
          </div>
        </article>
        <article className="flex-center">
          <img src="/globe-line.svg" alt="globe-line " />
          <div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              libero itaque saepe nam ut eos eaque, illum labore tenetur aut!
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default MainSection;
