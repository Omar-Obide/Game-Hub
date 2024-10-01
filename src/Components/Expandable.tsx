import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const Expandable = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = children.substring(0, limit) + "...";

  if (!children) return null 

  return (
    <>
      <Text>
        {children.length > limit && !expanded ? summary : children}
        <Button
          marginLeft={2}
          onClick={() => setExpanded(!expanded)}
          colorScheme="yellow"
          size="xs"
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default Expandable;
