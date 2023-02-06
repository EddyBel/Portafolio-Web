import { useState } from "react";
import { sendMessageFromAPI } from "../../service/myApi.api";
import { getCookie } from "../../util/cookies";
import { Alert, Spinner, ButtonSendMessage } from "../common/index";
import { Alert as IconAlert, ArrowCheck } from "../common/svg";

export function Form() {
  // These states store the value of the inputs at each point in time.
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // These statuses keep track of the message sending status.
  // This status saves errors if they have occurred.
  const [error, setErrors] = useState<null | string>(null);
  // This status keeps track of whether the request is being uploaded or sent.
  const [loadingState, setLoadingState] = useState(false);
  // This status indicates whether the shipment was successful or not.
  const [statusSend, setStatusSend] = useState(false);

  /**
   * This function sends the message to the api to send to the e-mail.
   * @param {HTMLButtonElement} e - Button element.
   * @returns - The click function returns nothing.
   */
  const sendToMessage = (e: any) => {
    // Removes the default event from the button on a form.
    e.preventDefault();
    setStatusSend(false);

    // Validate each status and verify that they are not empty, if they are, send a personalized message.
    if (name === "") {
      setErrors("Please enter your name");
      return;
    } else if (lastName === "") {
      setErrors("Please enter your last name");
      return;
    } else if (email === "") {
      setErrors("Please enter your email address");
      return;
    } else if (number === "") {
      setErrors("Please enter your phone number");
      return;
    } else if (subject === "") {
      setErrors("Please enter your message subject");
      return;
    } else if (message === "") {
      setErrors("Please enter the message");
      return;
    }

    // Send the message to the api with the access token and the information organized as it should be.
    // If the request was made correctly, it clears the inputs and removes the errors from the status.
    // Get the tocken as a cookie.
    const tocken = getCookie("Access-Tocken");
    // Send the message to the personal api.
    sendMessageFromAPI(tocken, {
      url: window.location.origin,
      subject: subject,
      propertys: {
        name: name,
        last_name: lastName,
        email: email,
        phone: number,
      },
      message: message,
    })
      ?.then((response) => {
        // Clears statuses and inputs
        cleanInputs();
      })
      .catch((error) => {
        // Status indicating that the message had an error.
        setStatusSend(false);
        // Eliminates the state of charge.
        setLoadingState(false);
        // Error message when sending the message.
        setErrors("There was an error sending the message ");
      });

    // Indicates that the message is being sent.
    setLoadingState(true);
  };

  /** This function clears the inputs and statuses, performs a reset. */
  const cleanInputs = () => {
    // Obtain the input elements of the domain that will be cleaned.
    const [inputs, textArea] = [
      document.querySelectorAll(".form__contact__input"),
      document.querySelector(
        ".form__contact__input_text_area"
      ) as HTMLTextAreaElement,
    ];

    // Clears the elements by changing their value property to an empty string.
    textArea.value = "";
    inputs.forEach((element, index) => {
      const input = element as HTMLInputElement;
      input.value = "";
    });

    // Clears all empty states.
    setName("");
    setEmail("");
    setLastName("");
    setNumber("");
    setSubject("");
    setMessage("");

    // Clears the error status.
    setErrors(null);
    // Eliminates the state of charge.
    setLoadingState(false);
    // It is assigned to the status that the message was sent correctly.
    setStatusSend(true);
  };

  return (
    <form className="formulary" action="Formulary">
      <h1 className="formulary__title">Contact me at</h1>
      <div className="container_formulary_doble_input">
        <InputForm
          label="What is your name ?"
          placeholder="Enter your name"
          setState={setName}
          id="name"
        />
        <InputForm
          label="What is your last name ?"
          placeholder="Enter your last name"
          setState={setLastName}
          id="last-name"
        />
      </div>
      <div className="container_formulary_doble_input">
        <InputForm
          label="What is your email address ?"
          placeholder="Enter your email address"
          setState={setEmail}
          id="email"
          type="email"
        />
        <InputForm
          label="What is your mobile number ?"
          placeholder="Enter your mobile number"
          setState={setNumber}
          id="phone"
          type="number"
        />
      </div>
      <InputForm
        label="What is the subject of the message ?"
        placeholder="Enter your subject"
        setState={setSubject}
        id="subject"
      />
      <div className="form__contact__container__input">
        <label htmlFor="label" className="form__contact__label">
          You can compose your message
        </label>
        <textarea
          placeholder="Enter your message"
          className="form__contact__input_text_area"
          id="input-message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {!error ? (
        <></>
      ) : (
        <Alert text={error} type="error" IconSvg={IconAlert} colorSvg="#fff" />
      )}
      {!statusSend ? (
        <></>
      ) : (
        <Alert
          text="Message sent successfully"
          type="check"
          IconSvg={ArrowCheck}
          colorSvg="#fff"
        />
      )}
      {loadingState ? (
        <Spinner />
      ) : (
        <ButtonSendMessage sendToMessage={sendToMessage} />
      )}
    </form>
  );
}

type FormInput = {
  label?: string;
  placeholder?: string;
  setState?: any;
  id?: string;
  type?: string;
};

function InputForm({
  label = "What is your name ?",
  placeholder,
  setState,
  id,
  type = "text",
}: FormInput) {
  const handlesEventInput = (e: any) => {
    let value = e.target.value;
    if (setState) setState(value);
  };

  return (
    <div className="form__contact__container__input">
      <label htmlFor="label" className="form__contact__label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="form__contact__input"
        onChange={handlesEventInput}
        id={`input-${id}`}
      />
    </div>
  );
}