import React from "react";

import PropTypes from "prop-types";
import {
  Title,
  TabContainer,
  Tab,
  TabCell,
  TabHead,
  TabRow,
  TabBody,
} from "./List.styled";

export default function List({ users }) {
  return (
    <TabContainer>
      <Title>List of record holders</Title>
      <Tab>
        <TabHead>
          <TabRow>
            <TabCell>User name</TabCell>
            <TabCell>Score</TabCell>
          </TabRow>
        </TabHead>
        <TabBody>
          {users.map(({ id, name, score }) => (
            <TabRow key={id}>
              <TabCell>{name}</TabCell>
              <TabCell>{score}</TabCell>
            </TabRow>
          ))}
        </TabBody>
      </Tab>
    </TabContainer>
  );
}

List.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      score: PropTypes.number,
    }),
  ),
};
