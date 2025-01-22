import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldValues } from "react-hook-form";

interface RadioOption {
  value: number;
  label: string;
}
interface RadioGroupProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  formLabel: string;
  className?: string;
  radioOptions: Array<RadioOption>;
  isRowOrietation: boolean;
  defaultValue?: number;
}

function InputRadioGroup({
  control,
  name,
  formLabel,
  className,
  radioOptions,
  isRowOrietation,
  defaultValue,
}: RadioGroupProps<any>) {
  return (
    <div className={className}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>{formLabel}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={
                  defaultValue?.toString() || field.value?.toString()
                }
                className={`flex space-y-1 ${
                  isRowOrietation ? "flex-row justify-around" : "flex-col"
                }`}
              >
                {radioOptions.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.value.toString()} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default InputRadioGroup;
