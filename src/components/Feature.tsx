import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  AspectRatio,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LiveIndicator = (): JSX.Element => {
  return (
    <Flex alignItems="center" mb={4}>
      <Box
        borderRadius="50%"
        bg={"red"}
        h={"16px"}
        w={"16px"}
        m={3}
        ml={0}
      ></Box>
      <Text color={"grey"}>Live</Text>
    </Flex>
  );
};

const MediaUnit = ({ id, full, media, title, text, live, link, linkText }) => {
  const navigate = useNavigate();

  function handleClick(url) {
    navigate(url);
  }

  return (
    <Box
      bg="whitesmoke"
      display={"flex"}
      justifyContent="space-evenly"
      color="black"
      px={5}
      pt={32}
      pb={10}
    >
      <SimpleGrid maxW={"1280px"} columns={{ md: 2, sm: 1 }}>
        <Box
          order={{ sm: 1, md: id % 2 === 0 ? 0 : 1 }}
          p={8}
          bg={full ? `url(${media})` : "none"}
          bgSize="contain"
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          borderRadius={"24px"}
          h="360px"
          w="100%"
          overflow={"hidden"}
        >
          {full ? (
            <></>
          ) : (
            <AspectRatio
              borderRadius={"24px"}
              overflow={"hidden"}
              ratio={16 / 9}
              transform={"translateY(-10%)"}
            >
              <img src={media} alt={title} />
            </AspectRatio>
          )}
        </Box>
        <Box
          order={{ sm: 0, md: id % 2 === 0 ? 1 : 0 }}
          px={8}
          pt={3}
          alignContent={"center"}
          position="relative"
        >
          {live ? <LiveIndicator /> : <></>}
          <Heading as="h2" marginBottom={0}>
            {title}
          </Heading>
          {text.map((paragraph, id) => (
            <Text id={id} pt={6} maxW={"48ch"}>
              {paragraph}
            </Text>
          ))}
          <Box display="inline-block">
            {link && linkText && (
              <Button
                mt={6}
                colorScheme={"purple"}
                // color={"black"}
                onClick={() =>
                  /http/i.test(link) ? window.open(link) : handleClick(link)
                }
              >
                {linkText}
              </Button>
            )}
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export const MediaGroup = ({ media, live }) => {
  return (
    <>
      {media.map((mediaItem) => (
        <>
          <MediaUnit
            live={live}
            full={mediaItem.full}
            key={mediaItem.id}
            id={mediaItem.id}
            media={mediaItem.media}
            title={mediaItem.title}
            text={mediaItem.text}
            link={mediaItem.link}
            linkText={mediaItem.linkText}
            // linkText={mediaItem.linkText}
          />
        </>
      ))}
    </>
  );
};

export const Feature = {
  MediaGroup,
  MediaUnit,
};
