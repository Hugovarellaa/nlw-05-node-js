import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        {...rest}
        focusBorderColor="pink.500"
        background="gray.900"
        variant="filled"
        _hover={{
          background: "gray.900",
        }}
        size="lg"
        ref={ref}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
