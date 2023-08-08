import { KTIcon } from '~/components/commons/icons/icon';
import type { IconName } from '~/components/commons/icons/icons-config';
import { SearchInputView } from '~/components/commons/search-input/styles';

export default function SearchInput({
  icon = null,
  placeholder,
  searching,
}: {
  icon?: IconName;
  placeholder: string;
  searching: (value: string) => void;
}) {
  return (
    <SearchInputView>
      {icon && <KTIcon iconName={icon} />}

      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => searching(event.target.value)}
      />
    </SearchInputView>
  );
}
