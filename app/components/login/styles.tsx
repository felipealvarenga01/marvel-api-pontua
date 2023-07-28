import styled from '@emotion/styled';

export const HeaderLoginContainer = styled.header`
  width: 100%;
  padding-top: 49px;
  padding-left: 106px;
`;

export const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 103px);
`;

export const ImgLoginContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62%;
`;

export const LoginBackground = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.blue800};
  height: 100vh;
`;

export const ImgLogo = styled.img`
  width: 169px;
`;

export const ImgBuilding = styled.img`
  width: 614px;
`;

export const CardContainer = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardLogin = styled.div`
  width: 100%;
  max-width: 380px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 49px 36px 43px;
  border-radius: ${({ theme }) => theme.borderRadius.xxxLarge}px;
`;

export const TitleCardLogin = styled.h1`
  font-size: 36px;
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.color.blue600};
  line-height: 36.9px;
  margin-bottom: ${({ theme }) => theme.spacing.small}px;
  letter-spacing: -2.34px;

  span {
    color: ${({ theme }) => theme.color.orange500};
  }
`;

export const DescriptionCardLogin = styled.p`
  font-size: 16px;
  font-family: 'Epilogue', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray500};
  line-height: 20.32px;
  margin-bottom: ${({ theme }) => theme.spacing.micro}px;
  letter-spacing: -1.04px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Field = styled.div<{ marginbottom?: number }>`
  border-radius: ${({ theme }) => theme.borderRadius.xxLarge}px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)}px;

  :focus-within {
    border: 1px solid ${({ theme }) => theme.color.blue500};
  }
`;

export const InputLogin = styled.input`
  padding: 5px 0;
  border: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.blue500};
  line-height: 16.4px;
  letter-spacing: -1.04px;
  ::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.91px;
    color: ${({ theme }) => theme.color.gray400};
  }
  :-ms-input-placeholder {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.91px;
    color: ${({ theme }) => theme.color.gray400};
  }
  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.91px;
    color: ${({ theme }) => theme.color.gray400};
  }
`;

export const IconLogin = styled.img``;

export const Button = styled.button<{ icon?: string }>`
  width: 100%;
  height: 57px;
  background-color: ${({ theme }) => theme.color.blue800};
  color: ${({ theme }) => theme.color.gray100};
  border-radius: ${({ theme }) => theme.borderRadius.xxLarge}px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease all;
  -webkit-transition: 0.25s ease all;
  span {
    margin-right: ${({ icon }) => (icon ? 9 : 0)}px;
  }
  :hover {
    opacity: 0.8;
  }
  :disabled {
    background-color: ${({ theme }) => theme.color.gray500};
    opacity: 1!important;
  }
`;

export const IconButton = styled.img``;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 23px;
  a {
    color: ${({ theme }) => theme.color.orange500};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 400;
    line-height: 11.27px;
    letter-spacing: -0.715px;
  }

  span {
    margin-left: 4px;
  }
`;
