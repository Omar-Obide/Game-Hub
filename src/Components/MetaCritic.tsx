import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetaCritic = ({ score }: Props) => {
  const color = score > 70 ? "#68D391" : "#FAF089";
  return (
    <Badge width="fit-content" borderRadius={4} padding={1} color={color}>
      {score}
    </Badge>
  );
};

export default MetaCritic;
