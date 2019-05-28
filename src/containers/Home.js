import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
export default () => (
    <Flex center full>
        <FlexItem order="2">
            <MainContent>
                In addition to the ability to place items accurately onto a created grid, the CSS Grid Layout specification contains rules that control what happens when you create a grid and do not place some or all of the child items. You can see auto-placement in action in the simplest of ways by creating a grid on a set of items. If you give the items no placement information they will position themselves on the grid, one in each grid cell.
            </MainContent>
        </FlexItem>
        <FlexItem order="1">
            <Header>
                 <h2>LOGO </h2>
            </Header>
            <SideBar>
                Testing.....
          </SideBar>
        </FlexItem>
    </Flex>
);
