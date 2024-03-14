import { AspectRatio, Box, Heading, Link, Text } from "@chakra-ui/react";

export const Hero = ({
  video,
  title,
  caption,
  link = "",
  linkText = "Go ->",
}) => {
  return (
    <>
      <Box
        title={title}
        bgImage={video}
        bgPos="center center"
        bgSize={"cover"}
        bgAttachment={{ sm: "scroll", md: "fixed" }}
        height="480px"
        display="flex"
        flexDirection={"column"}
        alignContent={"flex-end"}
        flexShrink={1}
        position="relative"
        overflow="hidden"
      >
        {/* <img src={video} alt={title} style={{ objectFit: "fill" }} /> */}
        {/*<AspectRatio
          ratio={{ sm: 9 / 12, md: 16 / 9 }}
          transform={"translateY(-10%)"}
        >
          <iframe
            src={video}
            title={title}
            allow="accelerometer; loop; autoplay; encrypted-media; gyroscope;"
          ></iframe>
        </AspectRatio>
        */}
        {/* <Box
          zIndex={3}
          bg={"black"}
          color="white"
          py={5}
          px={16}
          pr={20}
          display={"inline-block"}
          position="absolute"
          flexShrink={1}
          top={"10%"}
        >
          <Heading as="h2" mb={3}>
            {title}
          </Heading>
          <Text maxW={"40ch"}>{caption}</Text>
          <Link to={link}>{linkText}</Link>
        </Box> */}
      </Box>
      <Box
        zIndex={2}
        w="100%"
        h="620"
        display={"inline"}
        position="absolute"
        bg="rgb(0,0,255,0)"
      ></Box>
    </>
  );
};
