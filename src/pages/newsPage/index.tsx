import { Box, Center, Divider, SimpleGrid } from "@chakra-ui/react";

import React, { useState } from "react";

import { newsList, newTagList } from "./constants";

import ButtonField from "components/ButtonField";
import NormalText from "components/NormalText";
import TitleText from "components/TitleText";

import {
  NewsPageContainer,
  NewsPageItem,
  NewsPageItemTime,
  NewsPageTagItem,
} from "./newsPage.styles";

const NewsPage = () => {
  const [newsListState, setNewsListState] = useState(newsList);
  const [count, setCount] = useState(0);

  const handleReloadData = () => {
    setNewsListState([...newsListState, ...newsList]);
    setCount(count + 1);
  };

  return (
    <NewsPageContainer>
      <SimpleGrid
        columns={{
          base: 1,
          md: 4,
        }}
        spacing={{ base: "8", md: "32px" }}
        marginTop={{
          base: "16px",
          md: "32px",
        }}>
        {newTagList.map((record, index) => (
          <NewsPageTagItem key={index}>
            <TitleText
              title={record.title}
              fontSizeProps='22px'
              lineHeight='26px'
              color='#FFCC21'
              maxWidth='200px'
              textPosition='center'
            />
            <Divider
              borderBottomWidth='2px'
              borderColor='#fff'
              mt='16px'
              mb='12px'
              width='56px'
            />
            <NormalText
              text={record.subTitle}
              color='#fff'
              fontSizeProps='18px'
            />
          </NewsPageTagItem>
        ))}
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 2,
          md: 4,
        }}
        spacing={{ base: "4px", md: "8px" }}
        marginTop={{
          base: "32px",
          md: "56ox",
        }}>
        {newsListState.map((record, index) => (
          <NewsPageItem key={index}>
            <Box position='relative'>
              <img
                src={record.image}
                alt={record.title}
                style={{
                  width: "100%",
                  height: "144px",
                  objectFit: "cover",
                }}
              />
              <NewsPageItemTime>
                <NormalText
                  text={record.time}
                  color='#fff'
                  fontSizeProps='15px'
                />
              </NewsPageItemTime>
            </Box>
            <NormalText
              text={record.title}
              color='#414141'
              fontSizeProps='15px'
              marginBottom='5px'
              marginTop='12px'
            />
            <NormalText
              text={record.subTitle}
              color='#FF963C'
              fontSizeProps='12px'
            />
          </NewsPageItem>
        ))}
      </SimpleGrid>
      <Center my='32px'>
        {count < 2 && (
          <ButtonField
            color='#fff'
            width='300px'
            height='56px'
            background='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            hoverBackgroundColor='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            buttonText='コラムをもっと見る'
            onClick={handleReloadData}
          />
        )}
      </Center>
    </NewsPageContainer>
  );
};

export default NewsPage;
