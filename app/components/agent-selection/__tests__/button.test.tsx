import { expect, it } from 'vitest';
import ButtonAgentSelection from '~/components/agent-selection/button';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de Button', () => {
  it('Teste', () => {
    const BUTTON_TEXT = 'Enviar';
    const { getByText } = renderRemix(
      <ButtonAgentSelection title={BUTTON_TEXT} />,
    );
    const button = getByText(BUTTON_TEXT);
    expect(button).toHaveTextContent(BUTTON_TEXT);
  });
});
