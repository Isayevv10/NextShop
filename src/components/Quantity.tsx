import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

interface IQuantityProps {
  step?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  setQuantity: (valueAsString: string, valueAsNumber: number) => void;
}

export function Quatity({
  step = 1,
  disabled = false,
  min = 1,
  max = 20,
  defaultValue = 1,
  setQuantity,
}: IQuantityProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
      onChange(valueAsString, valueAsNumber) {
        setQuantity(valueAsString, valueAsNumber);
      },
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="140px" my={"0.5rem"}>
      <Button {...dec} disabled={disabled}>
        -
      </Button>
      <Input {...input} readOnly={true} minW={"52px"} />
      <Button {...inc} disabled={disabled}>
        +
      </Button>
    </HStack>
  );
}
function setQuantity(valueAsString: string, valueAsNumber: number) {
  throw new Error("Function not implemented.");
}
