import { Box, Text } from "@chakra-ui/react";

export const Footer = ({ text }) => {
  return (
    <Box py={8}>
      <Text textAlign="center" color="black">
        {text}
      </Text>
    </Box>
  );
};
