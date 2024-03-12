import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import {
  RiDiscordFill,
  RiInstagramFill,
  RiPatreonFill,
  RiTiktokFill,
  RiTwitchFill,
} from "react-icons/ri";

export const SocialNetwork = ({ link, network }): JSX.Element => {
  const getSocialIcon = (network): JSX.Element => {
    switch (network) {
      case "patreon":
        return <RiPatreonFill size={"10rem"} />;
      case "instagram":
        return <RiInstagramFill size={"10rem"} />;
      case "tiktok":
        return <RiTiktokFill size={"10rem"} />;
      case "twitch":
        return <RiTwitchFill size={"10rem"} />;
      case "discord":
        return <RiDiscordFill size={"10rem"} />;
      default:
        return <></>;
    }
  };
  return (
    <Link href={link}>
      <Box
        _hover={{
          color: "crimson",
        }}
        color="#668"
        bg="none"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        minW={"220px"}
        maxW={"280px"}
        flex={1}
        h="240px"
      >
        {getSocialIcon(network)}
      </Box>
      <Text color="whitesmoke" textAlign={"center"}>
        {network}
      </Text>
    </Link>
  );
};
export const SocialNetworkGroup = ({ title, networks }) => {
  return (
    <Box bg="black" py={32} id="social">
      <Box>
        <Heading as="h2" color="white" textAlign={"center"}>
          {title}
        </Heading>
        <Flex wrap="wrap" gap={5} justifyContent={"space-evenly"} p={16}>
          {networks.map((network) => (
            <SocialNetwork {...network} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
