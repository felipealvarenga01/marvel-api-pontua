import { Field, IconLogin, InputLogin } from '~/components/login/styles';

export function InputField({
  type,
  placeholder,
  icon,
  marginbottom,
}: {
  type: string;
  placeholder: string;
  icon?: string;
  marginbottom?: number;
}) {
  return (
    <Field marginbottom={marginbottom}>
      <InputLogin type={type} placeholder={placeholder} />
      {icon && <IconLogin src={icon} alt="" />}
    </Field>
  );
}
