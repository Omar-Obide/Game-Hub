import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card
      style={{ cursor: "pointer" }}
      transition="transform 0.2s linear"
      _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
      height="fit-content"
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
