import styled from "styled-components";
// import { usePageContentStore } from "../../stores";
import { Page } from "../../components/Page";
import { Link } from "react-router-dom";
import { Box, Flex, AspectRatio, Heading, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Theme from "../../themes/theme";
import payload from "../../content/content.json";

// Gem Sword Games
//
// - Studio info
// - View blog posts
// - Contact for more info
// - Streaming schedule
// - Games
// - Characters

export const NewsCard = ({ title, link }) => {
  return (
    // <Link to={link}>
    <Box py={4} flex={1} h="240px" minW="200px">
      <Box
        _hover={{
          transform: "translate(-8px, -8px)",
          boxShadow: "16px 16px 0px red",
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
    // </Link>
  );
};
export const ProductGroup = ({ title, text, products }) => {
  const ProductCard = ({ id, caption, image, title }) => {
    return (
      <Box key={id} cursor={"pointer"}>
        <Box
          bg="grey"
          h="240px"
          _hover={{
            transform: "translate(-8px, -8px)",
            boxShadow: "16px 16px 0px black",
            cursor: "pointer",
            transition: "0.2s",
          }}
          boxShadow={"6px 6px 0px red"}
          bgImage={image}
          bgSize={"cover"}
          bgPosition="center"
        ></Box>
        <Text px={3} pt={3} fontWeight={"bold"}>
          {title}
        </Text>
        <Text px={3} pb={3} color={Theme.default.colors.secondary}>
          {caption}
        </Text>
      </Box>
    );
  };
  return (
    <Box p={6} pb={32} bg="whitesmoke" color="black">
      <Heading as="h2" lineHeight={2} textAlign={"center"}>
        {title}
      </Heading>
      <Text pb={10} textAlign={"center"}>
        {text}
      </Text>
      <SimpleGrid columns={{ md: 4, sm: 2 }} spacing={5}>
        {products.map((product) => (
          <ProductCard
            id={product.id}
            caption={product.caption}
            image={product.image}
            title={product.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const HeroUnit = ({ video, title, caption, link = "", linkText = "Go ->" }) => {
  return (
    <Box
      bg="none"
      height="620px"
      display="flex"
      flexDirection={"column"}
      alignContent={"flex-end"}
      flexShrink={1}
      position="relative"
      overflow="hidden"
    >
      <AspectRatio
        ratio={{ sm: 9 / 16, md: 4 / 3, lg: 16 / 9 }}
        transform={"translateY(-10%)"}
      >
        <video
          title="naruto"
          src={video}
          autoPlay={true}
          muted={true}
          width={"100%"}
          height={"100%"}
          loop={true}
        />
      </AspectRatio>
      <Box
        bg={"white"}
        color="black"
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
      </Box>
    </Box>
  );
};

const VideoUnit = ({ video, title, text }) => {
  return (
    <Box
      bg="whitesmoke"
      display={"flex"}
      justifyContent="space-evenly"
      color="black"
      px={5}
      pt={20}
    >
      <SimpleGrid maxW={"1280px"} columns={{ md: 2, sm: 1 }}>
        <Box
          p={8}
          bg="none"
          borderRadius={"24px"}
          h="360px"
          w="100%"
          overflow={"hidden"}
        >
          <AspectRatio
            borderRadius={"24px"}
            overflow={"hidden"}
            ratio={{ sm: 12 / 9, lg: 16 / 9 }}
            transform={"translateY(-10%)"}
          >
            <video
              title="naruto"
              src={video}
              autoPlay={true}
              muted={true}
              width={"100%"}
              height={"100%"}
              loop={true}
            />
          </AspectRatio>
        </Box>
        <Box px={8} flexShrink={1} pt={3} position="relative">
          <Heading as="h2">{title}</Heading>
          <Text pt={16} maxW={"48ch"}>
            {text}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export const NewsGroup = ({ title, text, posts }) => {
  return (
    <Box p={16} bg={Theme.default.colors.gsg} color="white" py={32}>
      <Heading as="h2">{title}</Heading>
      <Text pb={12}>{text}</Text>
      <Flex gap={5} wrap={"wrap"} justifyContent={"space-evenly"}>
        {posts.map((post) => (
          <NewsCard key={post.id} title={post.title} link={post.link} />
        ))}
      </Flex>
    </Box>
  );
};

import {
  RiDiscordFill,
  RiInstagramFill,
  RiPatreonFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";
export const SocialGroup = ({ title, networks }) => {
  const getSocialIcon = (network): JSX.Element => {
    switch (network) {
      case "patreon":
        return <RiPatreonFill size={"10rem"} />;
      case "instagram":
        return <RiInstagramFill size={"10rem"} />;
      case "tiktok":
        return <RiTiktokFill size={"10rem"} />;
      case "youtube":
        return <RiYoutubeFill size={"10rem"} />;
      case "discord":
        return <RiDiscordFill size={"10rem"} />;
      default:
        return <></>;
    }
  };
  return (
    <Box bg="whitesmoke" py={32}>
      <Box>
        <Heading as="h2" textAlign={"center"}>
          {title}
        </Heading>
        <Flex wrap="wrap" gap={5} justifyContent={"space-evenly"} p={16}>
          {networks.map((network) => (
            <Link to={network.link}>
              <Box
                _hover={{
                  color: "crimson",
                }}
                bg="none"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                minW={"220px"}
                maxW={"280px"}
                flex={1}
                h="240px"
              >
                {getSocialIcon(network.network)}
              </Box>
              <Text textAlign={"center"}>{network.network}</Text>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export const Footer = ({ text }) => {
  return (
    <Box py={8}>
      <Text textAlign="center" color="black">
        {text}
      </Text>
    </Box>
  );
};

export const HomeView = (props) => {
  return (
    <Page>
      <SimpleGrid columns={1} spacing={0}>
        <HeroUnit
          title={payload.en.home.hero.data[0].title}
          caption={payload.en.home.hero.data[0].text}
          video={payload.en.home.hero.data[0].video}
          link={payload.en.home.hero.data[0].link}
          linkText={payload.en.home.hero.data[0].linkText}
        />
        <VideoUnit
          video={payload.en.home.feature.data[0].video}
          title={payload.en.home.feature.data[0].title}
          text={payload.en.home.feature.data[0].text}
        />
        <ProductGroup
          title={payload.en.home.products.title}
          text={payload.en.home.products.text}
          products={payload.en.home.products.data}
        />
        <NewsGroup
          title={payload.en.home.news.title}
          text={payload.en.home.news.text}
          posts={payload.en.home.news.data}
        />
        <SocialGroup
          title={payload.en.socials.title}
          networks={payload.en.socials.data}
        />
        <Footer text={payload.en.footer.data[0]} />
      </SimpleGrid>
    </Page>
  );
};
