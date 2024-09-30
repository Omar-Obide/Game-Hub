import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  const Error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading marginY={4}>Oops</Heading>
        <Text fontSize={25}>
          {isRouteErrorResponse(Error)
            ? "This Page Doesn't Exist"
            : "Something Went Wrong"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
