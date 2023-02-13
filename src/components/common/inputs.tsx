import { ChangeEventHandler } from "react";

type InputProps = {
  children: any;
  type: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  id?: string;
  setState?: any;
};

export function InputBox(props: InputProps) {
  const getValueOfInput: ChangeEventHandler<HTMLInputElement> = (e) =>
    props.setState ? props.setState(e.target.value) : "";

  return (
    <div className="inputBoxContainer">
      <input
        required={props.isRequired}
        type={props.type}
        title="input-form"
        className="form__contact__input"
        onChange={getValueOfInput}
        id={`input-${props.id}`}
      />
      <span>{props.children}</span>
    </div>
  );
}

export function InputRounded(props: InputProps) {
  return (
    <div className="form__contact__container__input">
      <label htmlFor="label" className="form__contact__label">
        {props.children}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="form__contact__input"
        onChange={props.onChange}
        id={`input-${props.id}`}
      />
    </div>
  );
}
