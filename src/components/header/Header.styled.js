import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-bottom: 15px;
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.12);
`;

export const StyledItem = styled.li`
  font-size: 24px;
  font-weight: 500;
  &:last-child {
    padding-left: 25px;
  }
`;
