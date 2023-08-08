import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { expect, it } from 'vitest';
import { KTIcon } from '~/components/commons/icons/icon';
import {
  ButtonPagination,
  Pagination,
} from '~/components/commons/pagination/styles';
import { renderRemix } from '../../../../../tests/remix-stub';

describe('Renderização de styles Pagination', () => {
  it('Teste de Pagination', () => {
    const { container } = renderRemix(
      <Pagination
        breakLabel={'...'}
        previousLabel={
          <ButtonPagination>
            <KTIcon iconName={<FiArrowLeft />} />
            Anterior
          </ButtonPagination>
        }
        nextLabel={
          <ButtonPagination>
            Próximo
            <KTIcon iconName={<FiArrowRight />} />
          </ButtonPagination>
        }
        forcePage={0}
        onPageChange={() => {}}
        pageRangeDisplayed={1}
        renderOnZeroPageCount={null}
        pageCount={Math.ceil(100 / 10)}
      />,
    );
    const pagination = container.querySelector('ul') as HTMLElement;
    const computedStyle = window.getComputedStyle(pagination);
    expect(computedStyle.color).toBe('rgb(116, 125, 148)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Button Pagination com svg', () => {
    const { container } = renderRemix(
      <ButtonPagination>
        <svg>Teste</svg>
      </ButtonPagination>,
    );
    const button = container.querySelector('span') as HTMLElement;
    const svg = container.querySelector(
      'svg',
    ) as unknown as HTMLOrSVGImageElement;
    const computedStyledButton = window.getComputedStyle(button);
    const computedStyledSvg = window.getComputedStyle(svg);
    expect(computedStyledButton.color).toBe('rgb(33, 55, 112)');
    expect(computedStyledSvg.stroke).toBe('#747d94');
    expect(container).toBeInTheDocument();
  });
});
