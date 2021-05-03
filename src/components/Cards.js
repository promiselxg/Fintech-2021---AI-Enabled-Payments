import Roadmap from "../image/roadmap.svg";
import Solution from "../image/solution.svg";
import Wallet from "../image/welcome.svg";
const Cards = () => {
  return (
    <>
      <section className="card">
        <img src={Wallet} alt="wallet" />
        <div>
          <h1>Background of Problem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet
            dicta quas, tempora cum impedit autem iste soluta facilis odio
            adipisci assumenda corporis neque nesciunt nulla laborum velit omnis
            sunt hic itaque nihil reiciendis at. Facere dolorum asperiores
            repellendus voluptas.
          </p>
        </div>
      </section>
      <section className="card" data-aos="fade-right">
        <img src={Solution} alt="proposed solution" />
        <div>
          <h1>Proposed Solution</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet
            dicta quas, tempora cum impedit autem iste soluta facilis odio
            adipisci assumenda corporis neque nesciunt nulla laborum velit omnis
            sunt hic itaque nihil reiciendis at. Facere dolorum asperiores
            repellendus voluptas.
          </p>
        </div>
      </section>
      <section className="card" data-aos="fade-left">
        <img src={Roadmap} alt="one year roadmap" />
        <div>
          <h1>one year roadmap</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet
            dicta quas, tempora cum impedit autem iste soluta facilis odio
            adipisci assumenda corporis neque nesciunt nulla laborum velit omnis
            sunt hic itaque nihil reiciendis at. Facere dolorum asperiores
            repellendus voluptas.
          </p>
        </div>
      </section>
    </>
  );
};

export default Cards;
