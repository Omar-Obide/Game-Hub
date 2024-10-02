import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetaCritic = ({ score }: Props) => {
  const color = score > 70 ? "#68D391" : "#FAF089";
  return (
    <Badge width={8} textAlign='center' borderRadius={4} padding={0.5} color={color}>
      {score}
    </Badge>
  );
};

export default MetaCritic;
