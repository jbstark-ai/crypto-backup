import Theme from "@/themes/theme";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const ProductGroup = ({ title, text, products }) => {
  const ProductCard = ({ id, caption, image, title }) => {
    return (
      <Box
        key={id}
        cursor={"pointer"}
        maxW={"480px"}
        w={"100%"}
        minW={"200px"}
        borderRadius={"24px"}
      >
        <Box
          borderRadius={"24px"}
          bg="grey"
          h="240px"
          _hover={{
            transform: "translate(-8px, -8px)",
            boxShadow: "16px 16px 0px black",
            cursor: "pointer",
            transition: "0.2s",
          }}
          boxShadow={"6px 6px 0px white"}
          bgImage={image}
          bgSize={"cover"}
          bgPosition="center"
        ></Box>
        <Text px={3} pt={3} fontWeight={"bold"}>
          {title}
        </Text>
        <Text px={3} pb={3} color={"whitesmoke"}>
          {caption}
        </Text>
      </Box>
    );
  };
  return (
    <Box p={6} py={32} bg="crimson" color="white">
      <Heading as="h2" lineHeight={2} textAlign={"center"}>
        {title}
      </Heading>
      <Text pb={10} textAlign={"center"}>
        {text}
      </Text>
      <Flex justifyContent={"space-evenly"} flexWrap="wrap">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            caption={product.caption}
            image={product.image}
            title={product.title}
          />
        ))}
      </Flex>
    </Box>
  );
};
