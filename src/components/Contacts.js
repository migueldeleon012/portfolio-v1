const Contacts = () => {
  return (
    <div id="contacts" className="section">
      <div className="section__container">
        <h2 className="text-white" data-aos="fade-up">
          Say hi!
        </h2>

        <form className="form" data-aos="fade-up">
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

          <button className="text-white">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
