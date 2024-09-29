import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch cursor="Pointer" />
        </InputLeftElement>
        <Input
          ref={ref}
          variant="filled"
          borderRadius={20}
          placeholder="Search games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
