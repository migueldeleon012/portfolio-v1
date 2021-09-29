const Contacts = () => {
  return (
    <div id="contacts" className="section">
      <div className="bg-dark text-white section__container">
        <h2>Say hi!</h2>

        <form className="form">
          <div className="form__input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form__input">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form__input">
            <label htmlFor="message">Message:</label>
            <textarea id="message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
