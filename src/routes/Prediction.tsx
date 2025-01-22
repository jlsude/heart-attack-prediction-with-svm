import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { useNavigate } from "react-router";

function Prediction() {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<{
    first_name?: string;
    last_name?: string;
    age?: number;
    sex?: number;
    heart_rate?: number;
    systolic_bp?: number;
    diastolic_bp?: number;
    blood_sugar?: number;
    ck_mb?: number;
    troponin?: number;
  } | null>(null);
  const [predictionLabel, setPredictionLabel] = useState("");

  useEffect(() => {
    const patientData = localStorage.getItem("patientData");
    const predictionLabel = localStorage.getItem("predictionLabel");

    if (
      patientData?.length === undefined ||
      predictionLabel?.length === undefined
    ) {
      navigate("/information");
    } else {
      setPatientData(JSON.parse(patientData));
      setPredictionLabel(predictionLabel);
    }
  }, []);

  const handleNewPrediction = () => {
    localStorage.removeItem("patientData");
    localStorage.removeItem("predictionLabel");
    navigate("/information");
  };

  return (
    <div className="template-grid-system min-h-screen w-screen bg-background">
      <div className="col-span-full row-span-1 row-start-1 flex h-[108px] flex-col justify-end p-2 md:h-[164px]">
        <h3>Heart Attack Risk Assessment</h3>
        <hr className="mt-4 w-3/4 border-4 border-primary" />
      </div>

      <div className="col-span-full row-span-2 row-start-2 grid grid-cols-subgrid gap-y-6 pt-8">
        <div className="col-span-4 row-start-2 mb-24 flex justify-center md:row-start-auto md:mb-auto xl:col-span-6">
          <Card className="h-fit w-full max-w-[420px]">
            <CardHeader>
              <CardTitle>Medical Data Overview</CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fields</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>Age</TableCell>
                    <TableCell>{patientData?.age}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Sex</TableCell>
                    <TableCell>
                      {patientData?.sex === 1 ? `Male` : `Female`}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Heart Rate</TableCell>
                    <TableCell>{patientData?.heart_rate}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Systolic Blood Pressure</TableCell>
                    <TableCell>{patientData?.systolic_bp}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Diastolic Blood Pressure</TableCell>
                    <TableCell>{patientData?.diastolic_bp}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Blood Sugar</TableCell>
                    <TableCell>{patientData?.blood_sugar}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>CK-MB</TableCell>
                    <TableCell>{patientData?.ck_mb}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Troponin</TableCell>
                    <TableCell>{patientData?.troponin}</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Patient data summary for{" "}
                  {patientData?.first_name?.toLocaleUpperCase()}{" "}
                  {patientData?.last_name?.toLocaleUpperCase()}
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 row-start-1 flex flex-col items-center gap-y-4 md:row-start-auto xl:col-span-6">
          <div
            className={`h-fit w-full max-w-[420px] rounded-xl border-[4px] p-6 ${Number(predictionLabel) === 1 ? `border-red-500` : `border-green-500`}`}
          >
            <h4 className="text-center">
              {Number(predictionLabel) === 1 ? "High Risk" : "Low Risk"} of
              Heart Attack Detected
            </h4>
          </div>

          <Card className="h-fit w-full max-w-[420px]">
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent>
              <h5>
                {Number(predictionLabel) === 1
                  ? "Based on the provided data, the patient appears to be at risk of a heart attack. Further assessment by a medical professional is crucial."
                  : "Based on the provided data, the patient appears to have a low risk of a heart attack. Regular monitoring and a healthy lifestyle are recommended."}
              </h5>
            </CardContent>
          </Card>

          <div className="my-8 flex w-full justify-evenly">
            <Button
              onClick={() => {
                handleNewPrediction();
              }}
            >
              New Prediction
            </Button>
            {/* <Button>Save Result</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
