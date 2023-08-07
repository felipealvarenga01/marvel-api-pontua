import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  background-color: #FFFFFF;
  padding: 17px 30px 0 30px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
`

export const TabsList = styled.ul`
  display: flex;
  gap: 15px;
  width: 100%;
`

export const TabsItem = styled.li<{
    active?: boolean
}>`
  list-style: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({active, theme}) => active ? theme.color.primary : 'transparent'};
  padding-bottom: 17px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: ${({theme, active}) => active ? theme.color.primary : theme.color.gray500 }
`