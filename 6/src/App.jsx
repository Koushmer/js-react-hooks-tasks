import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const Factorial = ({ number }) => {
  const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

  return <div>{`Factorial of ${number} is ${factorial(number)}`}</div>;
};

const Controls = ({ setValue }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="btn-group mb-3">
        {['en', 'ru'].map((lang) => (
          <button
            key={lang}
            data-testid={lang}
            className={i18n.language === lang ? 'btn btn-primary' : 'btn btn-outline-primary'}
            onClick={() => i18n.changeLanguage(lang)}
          >
            {t(`languages.${lang}`)}
          </button>
        ))}
      </div>
      <br />
      <div className="btn-group mb-3">
        {[1, 5, 10, 20].map((num) => (
          <button
            key={num}
            className="btn btn-outline-primary"
            onClick={() => setValue(num)}
          >
            {t('factorial')} {num}
          </button>
        ))}
      </div>
    </>
  );
};

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Controls setValue={setValue} />
      <Factorial number={value} />
    </div>
  );
};
// END

export default App;
