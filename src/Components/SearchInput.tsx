import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInout = () => {
  return (
    <InputGroup>
      <InputLeftElement > <BsSearch cursor='Pointer' /></InputLeftElement>
      <Input
        variant="filled"
        borderRadius={20}
        placeholder="Search games..."
      ></Input>
    </InputGroup>
  );
};

export default SearchInout;
