import { Box, Link, Text } from "@chakra-ui/react";

export const NewsCard = ({ title, link = "" }) => {
  return (
    <Link href={link}>
      <Box py={4} flex={1} h="240px" minW="200px">
        <Box
          borderRadius={"12px"}
          _hover={{
            transform: "translate(-8px, -8px)",
            boxShadow: "16px 16px 0px black",
            cursor: "pointer",
            transition: "0.2s",
          }}
          boxShadow={"6px 6px 0px white"}
          bg="grey"
          flex={1}
          w="100%"
          h="100%"
        ></Box>
        <Box>
          <Text color="white" py={3} px={2}>
            {title}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export const Card = {
  NewsCard,
};
