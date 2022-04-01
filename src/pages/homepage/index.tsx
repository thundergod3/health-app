import React, { useState } from "react";
import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
} from "@chakra-ui/react";

import { dinnerList, homepageTagList } from "./constants";

import graphIcon from "assets/icons/graph.svg";

import NormalText from "components/NormalText";
import Icon from "components/Icon";
import ButtonField from "components/ButtonField";

import {
  HomepageContainer,
  HomepageSectionBodyContainer,
  HomepageSectionDinnerItem,
  HomepageSectionDinnerItemFooter,
  HomepageSectionTagItem,
  HomepageSectionTopContainer,
  HomepageSectionTopImageContainer,
} from "./homepage.styles";

import "./homepage.styles.scss";

const Homepage = () => {
  const [dinnerListState, setDinnerListState] = useState(dinnerList);
  const [count, setCount] = useState(0);

  const handleReloadData = () => {
    setDinnerListState([...dinnerListState, ...dinnerList]);
    setCount(count + 1);
  };

  return (
    <HomepageContainer>
      <HomepageSectionTopContainer>
        <HomepageSectionTopContainer
          flex={{
            base: 1,
            md: 0.4,
          }}>
          <HomepageSectionTopImageContainer>
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
          </HomepageSectionTopImageContainer>
        </HomepageSectionTopContainer>
        <HomepageSectionTopContainer
          flex={{
            base: 1,
            md: 0.6,
          }}>
          <Center width='100%' background='background.primary'>
            <Icon icon={graphIcon} width='590px' height='282px' />
          </Center>
        </HomepageSectionTopContainer>
      </HomepageSectionTopContainer>
      <HomepageSectionBodyContainer>
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
          }}
          spacing={{ base: "8", md: "15", lg: "25" }}
          marginTop='24px'>
          {homepageTagList.map((record) => (
            <HomepageSectionTagItem key={record.label}>
              <Icon icon={record.icon} width='36px' height='36px' />
              <NormalText
                text={record.label}
                color='white'
                fontSizeProps='20px'
                marginTop='10px'
              />
            </HomepageSectionTagItem>
          ))}
        </SimpleGrid>
        <SimpleGrid
          columns={{
            base: 1,
            md: 4,
          }}
          spacing={{ base: "8", md: "15", lg: "25" }}
          marginTop='24px'>
          {dinnerListState.map((record, index) => (
            <HomepageSectionDinnerItem key={index}>
              <img
                src={record.image}
                alt={record.label}
                style={{
                  width: "100%",
                  height: "234px",
                  objectFit: "cover",
                }}
              />
              <HomepageSectionDinnerItemFooter>
                <NormalText
                  text={record.label}
                  color='white'
                  fontSizeProps='15px'
                />
              </HomepageSectionDinnerItemFooter>
            </HomepageSectionDinnerItem>
          ))}
        </SimpleGrid>
      </HomepageSectionBodyContainer>
      <Center my='32px'>
        {count < 2 && (
          <ButtonField
            color='#fff'
            width='300px'
            height='56px'
            background='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            hoverBackgroundColor='transparent linear-gradient(74deg, #FFCC21 0%, #FF963C 100%)'
            buttonText='記録をもっと見る'
            onClick={handleReloadData}
          />
        )}
      </Center>
    </HomepageContainer>
  );
};

export default Homepage;
