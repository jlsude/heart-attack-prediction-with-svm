import React from "react";
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
  return (
    <div className="template-grid-system min-h-screen w-screen bg-background">
      <div className="col-span-full row-span-1 row-start-1 flex h-[108px] flex-col justify-end p-2 md:h-[164px]">
        <h3>Heart Attack Risk Assessment</h3>
        <hr className="mt-4 w-3/4 border-4 border-primary" />
      </div>

      <div className="col-span-full row-span-2 row-start-2 grid grid-cols-subgrid gap-y-6 pt-8">
        <div className="col-span-4 row-start-2 flex justify-center md:row-start-auto xl:col-span-6">
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
                    <TableCell>69</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Heart Rate</TableCell>
                    <TableCell>69</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Systolic Blood Pressure</TableCell>
                    <TableCell>69</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Diastolic Blood Pressure</TableCell>
                    <TableCell>69</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>CK-MB</TableCell>
                    <TableCell>69</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Troponin</TableCell>
                    <TableCell>69</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Patient data summary for Abdul Jakul
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 row-start-1 flex flex-col items-center gap-y-4 md:row-start-auto xl:col-span-6">
          <div className="h-fit w-full max-w-[420px] rounded-xl border-[4px] border-red-500 p-6">
            <h4 className="text-center">High Risk of Heart Attack Detected</h4>
          </div>

          <Card className="h-fit w-full max-w-[420px]">
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent>
              <h5>
                Based on the provided data, the patient appears to be at risk of
                a heart attack. Further assessment by a medical professional is
                crucial.
              </h5>
            </CardContent>
          </Card>

          <div className="my-8 flex w-full justify-evenly">
            <Button
              onClick={() => {
                navigate("/information");
              }}
            >
              New Prediction
            </Button>
            <Button>Save Result</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
