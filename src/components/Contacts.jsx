import axios from 'axios';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const formId = 'oy02EXYu';
  const formSparkURL = `https://submit-form.com/${formId}`;

  const recatchaKey = '6Le0kvgcAAAAADMhjMslrhd6waAnD6R0eCFdvSOS';
  const recaptchaRef = useRef();

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      name: name,
      email: email,
      message: message,
      'g-recaptcha-response': recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkURL, payload);
      console.log(result);

      setSubmitMessage({
        class: 'success',
        text: 'Thanks, I will be in touch shortly',
      });
      setName('');
      setEmail('');
      setMessage('');
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setSubmitMessage({
        class: 'fail',
        text: 'Sorry, there was a problem',
      });
    }
  };

  return (
    <section id="contacts" className="section">
      <main className="section__container">
        <h2 className="text-white" data-aos="fade-up">
          Say hi!
        </h2>
        {submitMessage && (
          <div className={`form-response text-white ${submitMessage.class}`}>
            {submitMessage.text}
          </div>
        )}
        <form className="form" data-aos="fade-up" onSubmit={onSubmitHandler}>
          <div className="form__input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form__input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form__input">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recatchaKey}
            onChange={updateRecaptchaToken}
          />

          <button className="text-white">
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </main>
    </section>
  );
};

export default Contacts;
