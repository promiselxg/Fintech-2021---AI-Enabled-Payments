import { Button } from "@material-ui/core";
import "../style/Register.css";
import { Steps, Step } from "react-step-builder";
import Face from "./Face";
import Step1 from "./Step1";

const Navigation = ({ prev, next }) => {
  return (
    <div className="button">
      <Button onClick={prev} variant="contained" color="primary">
        Previous
      </Button>
      <Button onClick={next} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
};

const config = {
  navigation: {
    component: Navigation, // a React component with special props provided automatically
    location: "after", // or after
  },
};

const Register = () => {
  return (
    <div className="register">
      <div className="body__inner">
        <div className="register__container">
          <div className="register__app">
            <form>
              <Steps config={config}>
                <Step component={Step1} />
                <Step component={Face} />
              </Steps>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
