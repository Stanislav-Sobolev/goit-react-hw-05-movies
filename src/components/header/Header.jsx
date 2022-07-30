import { Outlet } from 'react-router-dom';
import { StyledItem, StyledList, StyledLink } from './Header.styled';
import { Suspense } from 'react';

export const Header = () => {
  return (
    <>
      <div>
        <StyledList>
          <StyledItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </StyledItem>
        </StyledList>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
