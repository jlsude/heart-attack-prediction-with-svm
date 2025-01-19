import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="template-grid-system bg-background w-screen h-dvh">
      <div className="border border-accent col-span-full row-start-2">
        <h1>Heart Attack Prediction with SVM</h1>
      </div>

      <div className="border border-e-red-500 col-span-full row-start-3 flex justify-center items-center">
        <Button onClick={() => navigate("/information")}>Continue</Button>
      </div>
    </div>
  );
}

export default Landing;
