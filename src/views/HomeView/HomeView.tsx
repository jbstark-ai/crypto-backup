// import { usePageContentStore } from "../../stores";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import { SimpleGrid } from "@chakra-ui/react";
import { Feature } from "@/components/Feature";
import { SocialNetworkGroup } from "@/components/SocialNetworkGroup";
import { Hero } from "@/components/Hero";
import { Page } from "@/components/Page";
// import { NewsGroup } from "@/components/NewsGroup";

import payload from "../../content/content.json";
import { ProductGroup } from "@/components/ProductGroup";

// Gem Sword Games
//
// - Studio info
// - View blog posts
// - Contact for more info
// - Streaming schedule
// - Games
// - Characters

const getCurrentTimeAsInt = (): number => {
  let dateString: string = new Date().toISOString();
  dateString = dateString.split("T")[1];
  dateString = dateString.split(".")[0];
  dateString = dateString.replace(/:/g, "");
  dateString = dateString.slice(0, 4);
  return Number(dateString);
};
const isLiveNow = (
  streamStart24HrUTC: number,
  streamEnd24HrUTC: number
): boolean => {
  const dateInt: number = getCurrentTimeAsInt();
  console.log(dateInt, streamStart24HrUTC, streamEnd24HrUTC);
  return dateInt > streamStart24HrUTC && dateInt < streamEnd24HrUTC;
};

export const HomeView = () => {
  const stream = {
    start: 2100,
    end: 2300,
  };
  const [_live] = useState(isLiveNow(stream.start, stream.end));
  return (
    <Page>
      <SimpleGrid columns={1} spacing={0}>
        <Hero
          title={payload.en.home.hero.data[0].title}
          caption={payload.en.home.hero.data[0].text}
          video={payload.en.home.hero.data[0].video}
          link={payload.en.home.hero.data[0].link}
          linkText={payload.en.home.hero.data[0].linkText}
        />
        <Feature.MediaGroup media={payload.en.home.feature.data} live={_live} />
        <ProductGroup
          title={payload.en.home.products.title}
          text={payload.en.home.products.text}
          products={payload.en.home.products.data}
        />
        {_live}
        {/* <NewsGroup
          title={payload.en.home.news.title}
          text={payload.en.home.news.text}
          posts={payload.en.home.news.data}
        /> */}
        <SocialNetworkGroup
          title={payload.en.socials.title}
          networks={payload.en.socials.data}
        />
        <Footer text={payload.en.footer.data[0]} />
      </SimpleGrid>
    </Page>
  );
};
