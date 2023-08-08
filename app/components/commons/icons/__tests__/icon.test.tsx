import { FiCheck } from 'react-icons/fi';
import { renderRemix } from 'tests/remix-stub';
import { expect, it } from 'vitest';
import { KTIcon } from '../icon';

describe('Renderização de icones', () => {
  it('Teste icone dashboard', () => {
    const { container } = renderRemix(<KTIcon iconName={'dashboard'} />);
    const kticon = container.querySelector('svg') as SVGSVGElement;
    expect(kticon).toBeInTheDocument();
  });

  it('Teste icone user', () => {
    const { container } = renderRemix(<KTIcon iconName={'user'} />);
    const kticon = container.querySelector('svg') as SVGSVGElement;
    expect(kticon).toBeInTheDocument();
  });

  it('Teste icone logout', () => {
    const { container } = renderRemix(<KTIcon iconName={'logout'} />);
    const kticon = container.querySelector('svg') as SVGSVGElement;
    expect(kticon).toBeInTheDocument();
  });

  it('Teste icone search', () => {
    const { container } = renderRemix(<KTIcon iconName={'search'} />);
    const kticon = container.querySelector('svg') as SVGSVGElement;
    expect(kticon).toBeInTheDocument();
  });

  it('Teste icone default', () => {
    const { container } = renderRemix(<KTIcon iconName={<FiCheck />} />);
    const kticon = container.querySelector('svg') as SVGSVGElement;
    expect(kticon).toBeInTheDocument();
  });
});
