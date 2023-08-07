import styled from '@emotion/styled';

export const HomeTitle = styled.h1`
  font-size: 24px;
  line-height: 24.6px;
  font-weight: 700;
  letter-spacing: -0.72px;
  color: #081b4e;
  margin-bottom: 24px;
`;

export const HomeTitleDivider = styled.span`
  color: ${({ theme }) => theme.color.orange400};
`;

export const HomeSubtitle = styled.span`
  font-weight: 300;
  letter-spacing: -0.72px;
  color: ${({ theme }) => theme.color.gray500};
`;

export const HeroesContainer = styled.div`
  display: grid;
  padding-right: 15px;
  gap: 10px;
  grid-template-areas:
    'card0 card0 card1 card1 card2 card2'
    'card3 card3 card4 card4 card5 card5'
    'card6 card6 card6 card7 card7 card7'
    'card8 card8 card8 card9 card9 card9';
  overflow-y: auto;
  max-height: calc(100vh - 161px);
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 2.5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.blue600};
    border-radius: 2.5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.blue600};
  }
`;

export const HeroCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 15px;
  padding: 14px;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.25s ease all;
  -webkit-transition: 0.25s ease all;

  :hover {
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.3);
  }

  &.card-0 {
    grid-area: card0;
  }
  &.card-1 {
    grid-area: card1;
  }
  &.card-2 {
    grid-area: card2;
  }
  &.card-3 {
    grid-area: card3;
  }
  &.card-4 {
    grid-area: card4;
  }
  &.card-5 {
    grid-area: card5;
  }
  &.card-6 {
    grid-area: card6;
  }
  &.card-7 {
    grid-area: card7;
  }
  &.card-8 {
    grid-area: card8;
  }
  &.card-9 {
    grid-area: card9;
  }
`;

export const HeroThumbnail = styled.div`
  width: 83px;
  height: 119px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  min-width: 83px;
  margin-right: 8px;
`;

export const HeroImage = styled.img`
  width: auto;
  height: 119px;
`;

export const HeroInfo = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const HeroName = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.48px;
  color: ${({ theme }) => theme.color.black};
  font-family: 'Epilogue', 'Inter', sans-serif;
`;

export const HeroDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.36px;
  color: ${({ theme }) => theme.color.black};
  font-family: 'Epilogue', 'Inter', sans-serif;
`;
