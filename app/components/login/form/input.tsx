import { useState } from 'react';
import passwordActiveIcon from '~/assets/passwordActive.svg';
import { Field, IconLogin, InputLogin } from '~/components/login/styles';

export function InputField({
  type,
  placeholder,
  icon,
  marginbottom,
  labelName,
  value,
}: {
  type: string;
  placeholder: string;
  icon?: string;
  marginbottom?: number;
  labelName: string;
  value: ({ name, value }: { name: string; value: string }) => void;
  onClick?: () => void;
}) {
  const [inputType, setInputType] = useState<string>(type);
  const [inputIcon, setInputIcon] = useState<string | undefined>(icon);

  const changeTypeInputAndIcon = () => {
    if (type === 'password' && inputType === 'password') {
      setInputType('text');
      setInputIcon(passwordActiveIcon);
    } else {
      setInputType(type);
      setInputIcon(icon);
    }
  };

  return (
    <Field marginbottom={marginbottom}>
      <InputLogin
        type={inputType}
        placeholder={placeholder}
        name={labelName}
        onChange={(e) => value({ name: labelName, value: e.target.value })}
      />
      {icon && (
        <IconLogin src={inputIcon} alt="" onClick={changeTypeInputAndIcon} />
      )}
    </Field>
  );
}
