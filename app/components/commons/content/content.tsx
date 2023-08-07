import styled from '@emotion/styled';

export const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px 40px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 24px;
`;
