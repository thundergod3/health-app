import React, { useState } from "react";
import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
} from "@chakra-ui/react";

import { dinnerList, topPageTagList } from "./constants";

import graphIcon from "assets/icons/graph.svg";

import NormalText from "components/NormalText";
import Icon from "components/Icon";
import ButtonField from "components/ButtonField";

import {
  TopPageContainer,
  TopPageSectionBodyContainer,
  TopPageSectionDinnerItem,
  TopPageSectionDinnerItemFooter,
  TopPageSectionTagItem,
  TopPageSectionTopContainer,
  TopPageSectionTopImageContainer,
} from "./topPage.styles";

import "./topPage.styles.scss";
import HealthGraph from "components/HealthGraph";

const TopPage = () => {
  const [dinnerListState, setDinnerListState] = useState(dinnerList);
  const [count, setCount] = useState(0);

  const handleReloadData = () => {
    setDinnerListState([...dinnerListState, ...dinnerList]);
    setCount(count + 1);
  };

  return (
    <TopPageContainer>
      <TopPageSectionTopContainer>
        <TopPageSectionTopContainer
          flex={{
            base: 1,
            md: 0.422,
          }}>
          <TopPageSectionTopImageContainer>
            <CircularProgress
              value={75}
              className='circular-progress-container'>
              <CircularProgressLabel>
                <Center>
                  <NormalText
                    fontSizeProps='18px'
                    text='05/21'
                    color='#fff'
                    textShadow='0px 0px 6px rgba(252, 116, 0, 1)'
                    marginRight='5px'
                  />
                  <NormalText
                    fontSizeProps='25px'
                    text='75%'
                    color='#fff'
                    textShadow='0px 0px 6px rgba(252, 116, 0, 1)'
                  />
                </Center>
              </CircularProgressLabel>
            </CircularProgress>
          </TopPageSectionTopImageContainer>
        </TopPageSectionTopContainer>
        <TopPageSectionTopContainer
          flex={{
            base: 1,
            md: 0.578,
          }}>
          <Center width='100%' background='background.primary'>
            <Box width='80%'>
              <HealthGraph />
            </Box>
          </Center>
        </TopPageSectionTopContainer>
      </TopPageSectionTopContainer>
      <TopPageSectionBodyContainer>
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
          }}
          spacing={{ base: "8", md: "15", lg: "25" }}
          marginTop='24px'>
          {topPageTagList.map((record) => (
            <TopPageSectionTagItem key={record.label}>
              <Icon icon={record.icon} width='36px' height='36px' />
              <NormalText
                text={record.label}
                color='white'
                fontSizeProps='20px'
                marginTop='10px'
              />
            </TopPageSectionTagItem>
          ))}
        </SimpleGrid>
        <SimpleGrid
          columns={{
            base: 1,
            md: 4,
          }}
          spacing={{ base: "8", md: "8px" }}
          marginTop='24px'>
          {dinnerListState.map((record, index) => (
            <TopPageSectionDinnerItem key={index}>
              <img
                src={record.image}
                alt={record.label}
                style={{
                  width: "100%",
                  height: "234px",
                  objectFit: "cover",
                }}
              />
              <TopPageSectionDinnerItemFooter>
                <NormalText
                  text={record.label}
                  color='white'
                  fontSizeProps='15px'
                />
              </TopPageSectionDinnerItemFooter>
            </TopPageSectionDinnerItem>
          ))}
        </SimpleGrid>
      </TopPageSectionBodyContainer>
      <Center my='32px'>
        {count < 2 && (
          <ButtonField
            color='#fff'
            width='296px'
            height='56px'
            background='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            hoverBackgroundColor='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            buttonText='記録をもっと見る'
            onClick={handleReloadData}
          />
        )}
      </Center>
    </TopPageContainer>
  );
};

export default TopPage;
