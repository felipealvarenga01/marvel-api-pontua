import { expect, it } from 'vitest';
import {
  Button,
  CardLogin,
  DescriptionCardLogin,
  Dialog,
  Field,
  ForgotPasswordContainer,
  InputLogin,
  LoginBackground,
  TitleCardLogin,
} from '~/components/login/styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de styles do Login', () => {
  it('Teste de Login Back Ground', () => {
    const { container } = renderRemix(<LoginBackground />);
    const loginBackground = container.querySelector('section') as HTMLElement;
    const computedStyle = window.getComputedStyle(loginBackground);
    expect(computedStyle.background).toBe('rgb(0, 17, 61)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Card Login', () => {
    const { container } = renderRemix(<CardLogin />);
    const cardLogin = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(cardLogin);
    expect(computedStyle.minHeight).toBe('433px');
    expect(computedStyle.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(computedStyle.borderRadius).toBe('28px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Title Card Login', () => {
    const { container } = renderRemix(<TitleCardLogin />);
    const titleCardLogin = container.querySelector('h1') as HTMLElement;
    const computedStyle = window.getComputedStyle(titleCardLogin);
    expect(computedStyle.marginBottom).toBe('16px');
    expect(computedStyle.color).toBe('rgb(33, 55, 112)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Description Card Login', () => {
    const { container } = renderRemix(<DescriptionCardLogin />);
    const descriptionCardLogin = container.querySelector('p') as HTMLElement;
    const computedStyle = window.getComputedStyle(descriptionCardLogin);
    expect(computedStyle.marginBottom).toBe('6px');
    expect(computedStyle.marginTop).toBe('0px');
    expect(computedStyle.color).toBe('rgb(119, 119, 119)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Field', () => {
    const { container } = renderRemix(<Field />);
    const field = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(field);
    expect(computedStyle.border).toBe('1px solid #b7b7b7');
    expect(computedStyle.borderRadius).toBe('16px');
    expect(computedStyle.marginBottom).toBe('0px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Input Field', () => {
    const { container } = renderRemix(<InputLogin />);
    const inputLogin = container.querySelector('input') as HTMLElement;
    const computedStyle = window.getComputedStyle(inputLogin);
    expect(computedStyle.color).toBe('rgb(41, 61, 113)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Button com span e icone', () => {
    const { container } = renderRemix(
      <Button icon={'user'} marginTop={26}>
        <span>Teste</span>
      </Button>,
    );
    const button = container.querySelector('button') as HTMLElement;
    const span = container.querySelector('span') as HTMLElement;
    const computedStyledButton = window.getComputedStyle(button);
    const computedStyledSpan = window.getComputedStyle(span);
    expect(computedStyledButton.marginTop).toBe('26px');
    expect(computedStyledSpan.marginRight).toBe('9px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Button com span e sem icone', () => {
    const { container } = renderRemix(
      <Button>
        <span>Teste</span>
      </Button>,
    );
    const button = container.querySelector('button') as HTMLElement;
    const span = container.querySelector('span') as HTMLElement;
    const computedStyledButton = window.getComputedStyle(button);
    const computedStyledSpan = window.getComputedStyle(span);
    expect(computedStyledButton.marginTop).toBe('0px');
    expect(computedStyledSpan.marginRight).toBe('0px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Forgot Password Container', () => {
    const { container } = renderRemix(<ForgotPasswordContainer />);
    const forgotPasswordContainer = container.querySelector(
      'div',
    ) as HTMLElement;
    const computedStyle = window.getComputedStyle(forgotPasswordContainer);
    expect(computedStyle.color).toBe('');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Dialog', () => {
    const { container } = renderRemix(<Dialog />);
    const dialog = container.querySelector('p') as HTMLElement;
    const computedStyle = window.getComputedStyle(dialog);
    expect(computedStyle.color).toBe('rgb(244, 55, 36)');
    expect(container).toBeInTheDocument();
  });
});
