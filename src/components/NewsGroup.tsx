import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { Card } from "@/components/Cards";

export const NewsGroup = ({ title, text, posts }) => {
  return (
    <Box p={16} bg={"crimson"} color="white" py={32}>
      <Heading as="h2">{title}</Heading>
      <Text pb={12}>{text}</Text>
      <Flex gap={5} wrap={"wrap"} justifyContent={"space-evenly"}>
        {posts.map((post) => (
          <Card.NewsCard key={post.id} title={post.title} link={post.link} />
        ))}
      </Flex>
    </Box>
  );
};
