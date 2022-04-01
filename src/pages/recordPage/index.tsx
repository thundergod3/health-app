import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";

import { exerciseList, recommendList } from "./constants";

import graphqlImage from "assets/icons/full-graph.svg";

import NormalText from "components/NormalText";
import TitleText from "components/TitleText";
import ButtonField from "components/ButtonField";

import {
  RecordPageBodyContainer,
  RecordPageContainer,
  RecordPageDiaryItem,
  RecordPageExerciseItem,
  RecordPageExerciseList,
  RecordPageGraphActiveButton,
  RecordPageGraphButton,
  RecordPageRecommendItem,
  RecordPageRecommendSubTitleContainer,
} from "./recordPage.styles";

import "./recordPage.styles.scss";

const RecordPage = () => {
  const [recommendListState, setRecommendListState] = useState(exerciseList);
  const [count, setCount] = useState(0);

  const handleReloadData = () => {
    setRecommendListState([...recommendListState, ...exerciseList]);
    setCount(count + 1);
  };

  return (
    <RecordPageContainer>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        spacing={{ base: "8", md: "48opx" }}
        my={{
          base: "24px",
          md: "56px",
        }}>
        {recommendList.map((record) => (
          <RecordPageRecommendItem image={record.image} key={record.title}>
            <TitleText
              title={record.title}
              color='#FFCC21'
              fontSize='24px'
              marginBottom='16px'
              width='max-content'
              zIndex={10}
            />
            <RecordPageRecommendSubTitleContainer>
              <NormalText text={record.subTitle} color='#fff' fontSize='14px' />
            </RecordPageRecommendSubTitleContainer>
          </RecordPageRecommendItem>
        ))}
      </SimpleGrid>
      <RecordPageBodyContainer>
        <Flex>
          <NormalText
            text='BODY RECORD'
            color='#fff'
            fontSizeProps='15px'
            marginRight='8px'
          />
          <NormalText text='2021.05.21' color='#fff' fontSizeProps='15px' />
        </Flex>
        <Box px='48px'>
          <img
            src={graphqlImage}
            alt='graphqlImage'
            style={{
              width: "100%",
              height: "242px",
            }}
          />
        </Box>
        <Flex>
          <RecordPageGraphButton>日</RecordPageGraphButton>
          <RecordPageGraphButton>週</RecordPageGraphButton>
          <RecordPageGraphButton>月</RecordPageGraphButton>
          <RecordPageGraphActiveButton>年</RecordPageGraphActiveButton>
        </Flex>
      </RecordPageBodyContainer>
      <RecordPageBodyContainer>
        <Flex>
          <NormalText
            text='MY EXERCISE'
            color='#fff'
            fontSizeProps='15px'
            marginRight='8px'
          />
          <NormalText
            text='2021.05.21'
            color='#fff'
            fontSizeProps='15px'
            marginBottom='8px'
          />
        </Flex>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={{ base: "8", md: "40px" }}>
          <RecordPageExerciseList className='record-page-exercise-list'>
            {exerciseList.map((record, index) => (
              <RecordPageExerciseItem key={index}>
                <Flex justifyContent='space-between' marginLeft='20px'>
                  <NormalText
                    text={record.title}
                    color='#fff'
                    fontSize='15px'
                  />
                  <NormalText
                    text={record.minute}
                    color='#FFCC21'
                    fontSize='18px'
                  />
                </Flex>
                <NormalText
                  text={record.subTitle}
                  color='#FFCC21'
                  fontSize='15px'
                  normalTextContainerStyle={{
                    marginLeft: "20px",
                  }}
                />
              </RecordPageExerciseItem>
            ))}
          </RecordPageExerciseList>
          <RecordPageExerciseList className='record-page-exercise-list'>
            {exerciseList.map((record, index) => (
              <RecordPageExerciseItem key={index}>
                <Flex justifyContent='space-between' marginLeft='20px'>
                  <NormalText
                    text={record.title}
                    color='#fff'
                    fontSize='15px'
                  />
                  <NormalText
                    text={record.minute}
                    color='#FFCC21'
                    fontSize='18px'
                  />
                </Flex>
                <NormalText
                  text={record.subTitle}
                  color='#FFCC21'
                  fontSize='15px'
                  normalTextContainerStyle={{
                    marginLeft: "20px",
                  }}
                />
              </RecordPageExerciseItem>
            ))}
          </RecordPageExerciseList>
        </SimpleGrid>
      </RecordPageBodyContainer>
      <Box>
        <NormalText text='MY DIARY' color='#414141' fontSize='22px' />
        <SimpleGrid
          columns={{
            base: 1,
            md: 4,
          }}
          spacing={{ base: "8px", md: "12px" }}>
          {recommendListState.map((_, index) => (
            <RecordPageDiaryItem key={index}>
              <NormalText
                text='2021.05.21'
                color='#414141'
                letterSpacing='0.09px'
                fontSizeProps='18px'
                bold
              />
              <NormalText
                text='23:25'
                color='#414141'
                letterSpacing='0.09px'
                fontSizeProps='18px'
                bold
                marginBottom='12px'
              />
              <NormalText
                text='私の日記の記録が一部表示されます。'
                color='#414141'
                fontSizeProps='12px'
              />
              <NormalText
                text='テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
                color='#414141'
                fontSizeProps='12px'
              />
            </RecordPageDiaryItem>
          ))}
        </SimpleGrid>
      </Box>
      <Center my='32px'>
        {count < 2 && (
          <ButtonField
            color='#fff'
            width='300px'
            height='56px'
            background='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            hoverBackgroundColor='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            buttonText='自分の日記をもっと見る'
            onClick={handleReloadData}
          />
        )}
      </Center>
    </RecordPageContainer>
  );
};

export default RecordPage;
