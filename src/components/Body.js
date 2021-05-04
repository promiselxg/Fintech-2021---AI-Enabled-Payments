import { Container } from "@material-ui/core";
import "../style/Body.css";
import Cards from "./Cards";
const Body = () => {
  return (
    <main className="app__body">
      <Container maxWidth="lg">
        <div className="app__body__container">
          <Cards />
        </div>
      </Container>
    </main>
  );
};

export default Body;
