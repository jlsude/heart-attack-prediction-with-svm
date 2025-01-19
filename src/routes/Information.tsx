import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputText from "@/form/components/InputText";
import InputRadioGroup from "@/form/components/InputRadioGroup";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router";
import { pageOneSchema, pageTwoSchema } from "@/form/FormSchema";

function Information() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const formSchema = pageOneSchema.merge(pageTwoSchema);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      age: "",
      sex: "0",

      heart_rate: "",
      systolic_bp: "",
      diastolic_bp: "",
      blood_sugar: "",
      ck_mb: "",
      troponin: "",
    },
  });

  const handleNextPage = async () => {
    const isValid = await form.trigger([
      "first_name",
      "last_name",
      "age",
      "sex",
    ]);
    if (isValid) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);

    navigate("/prediction");
  };

  return (
    <div className="template-grid-system min-h-screen w-screen bg-background">
      <div className="col-span-full row-span-1 row-start-1 flex h-[108px] items-end justify-around p-2 md:h-[164px]">
        <h4
          className={`text-center ${currentPage === 0 ? "border-b-8 border-primary" : "pb-2"}`}
        >
          Demographic Information
        </h4>
        <h4
          className={`text-center ${currentPage === 1 ? "border-b-8 border-primary" : "pb-2"}`}
        >
          Vital Signs and Lab Test Results
        </h4>
      </div>

      {currentPage === 0 && (
        <>
          <div className="col-span-full row-span-2 row-start-2 mt-4 grid grid-flow-row grid-cols-subgrid grid-rows-subgrid">
            <div className="col-span-4 col-start-1 hidden justify-center md:flex xl:col-span-6 xl:col-start-1">
              <div className="h-full w-[300px] rounded-xl bg-secondary"></div>
            </div>

            <div className="col-span-full flex flex-col items-center p-3 md:col-span-4 md:col-start-5 xl:col-span-6 xl:col-start-7">
              <div className="flex w-full max-w-[400px] flex-col rounded-md xl:max-w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Data</CardTitle>
                    <CardDescription>
                      Enter the patient's basic information including name, age,
                      and sex.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex w-full flex-col"
                      >
                        <div className="flex w-full flex-col xs:flex-row xs:gap-x-4">
                          <InputText
                            control={form.control}
                            name={"first_name"}
                            formLabel={"First Name"}
                            placeHolder={""}
                            description={""}
                            className="mt-2 flex-1"
                          />
                          <InputText
                            control={form.control}
                            name={"last_name"}
                            formLabel={"Last Name"}
                            placeHolder={""}
                            description={""}
                            className="mt-2 flex-1"
                          />
                        </div>

                        <InputText
                          control={form.control}
                          name={"age"}
                          formLabel={"Age"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />

                        <InputRadioGroup
                          control={form.control}
                          name={"sex"}
                          formLabel={"Sex"}
                          radioOptions={[
                            { value: 0, label: "Male" },
                            { value: 1, label: "Female" },
                          ]}
                          className="mt-2 text-text"
                          isRowOrietation={true}
                        />
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              <Button
                className="m-auto"
                onClick={() => {
                  handleNextPage();
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </>
      )}

      {currentPage === 1 && (
        <>
          <div className="col-span-full row-span-2 row-start-2 mt-4 flex grid-flow-row grid-cols-subgrid grid-rows-subgrid flex-col md:grid">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="col-span-full flex flex-col gap-4 md:flex-row"
              >
                <div className="flex flex-1 flex-col items-center">
                  <div className="w-full max-w-[500px] rounded-lg bg-card">
                    <Card>
                      <CardHeader>
                        <CardTitle>Vital Signs</CardTitle>
                        <CardDescription>
                          Monitor heart rate and blood pressure for
                          cardiovascular health.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <InputText
                          control={form.control}
                          name={"heart_rate"}
                          formLabel={"Heart Rate"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />
                        <InputText
                          control={form.control}
                          name={"systolic_bp"}
                          formLabel={"Systolic Blood Pressure"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />
                        <InputText
                          control={form.control}
                          name={"diastolic_bp"}
                          formLabel={"Diastolic Blood Pressure"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center gap-y-4">
                  <div className="w-full max-w-[500px] rounded-lg">
                    <Card>
                      <CardHeader>
                        <CardTitle>Lab Test Results</CardTitle>
                        <CardDescription>
                          Review Blood Sugar, CK-MB, and Troponin levels for
                          cardiac assessment.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <InputText
                          control={form.control}
                          name={"blood_sugar"}
                          formLabel={"Blood Sugar"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />
                        <InputText
                          control={form.control}
                          name={"ck_mb"}
                          formLabel={"CK-MB"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />
                        <InputText
                          control={form.control}
                          name={"troponin"}
                          formLabel={"Troponin"}
                          placeHolder={""}
                          description={""}
                          className="mt-2"
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <Button className="my-5" type="submit">
                    Predict
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}

export default Information;
