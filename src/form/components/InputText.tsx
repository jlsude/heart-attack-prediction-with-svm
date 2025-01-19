import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Control } from "react-hook-form";

import { FieldValues } from "react-hook-form";

interface InputTextProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  formLabel: string;
  placeHolder: string;
  description: string;
  className?: string;
  type?: string;
}

function InputText({
  control,
  name,
  formLabel,
  placeHolder,
  description,
  className,
  type = "text",
}: InputTextProps<any>) {
  return (
    <div className={className}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel
            // className="text-text"
            >
              {formLabel}
            </FormLabel>
            <FormControl>
              <Input
                // className="text-text"
                placeholder={placeHolder}
                {...field}
                autoComplete="off"
                type={type}
              />
            </FormControl>
            <FormDescription
            // className="text-text"
            >
              {description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default InputText;
