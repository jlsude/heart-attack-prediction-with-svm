import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Landing() {
  const navigate = useNavigate();

  const kaggleLink =
    "https://www.kaggle.com/code/cmosbattery/heart-attack-prediction-with-svm";

  return (
    <div className="template-grid-system h-dvh w-screen bg-gradient-to-tl from-primary via-background to-secondary">
      <div className="col-span-full row-start-2">
        <h1>Heart Attack Prediction with SVM</h1>
        <p>
          Accurately predicting heart attack risks with 90% accuracy.
          <br />
          <small>
            <a
              href={kaggleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-1"
            >
              Learn more about the SVM model and the dataset used
            </a>
          </small>
        </p>
      </div>

      <div className="col-span-full row-start-3 flex items-center justify-center">
        <Button onClick={() => navigate("/information")}>Continue</Button>
      </div>
    </div>
  );
}

export default Landing;
