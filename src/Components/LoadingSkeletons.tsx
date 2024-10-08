import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const LoadingSkeletons = () => {
  return (
    <Card>
      <Skeleton height='300px'></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default LoadingSkeletons;
