import React from 'react';

import Card from './Components/Card';
import Greetings from '@src/Pages/Greetings.jsx';

import { GlobalStyles } from './styles.js';
import './fonts.css';

const App = () => {

  const scriptUrl = 'https://script.google.com/macros/s/AKfycby6JJAG3zii2_yT3gYvnc-mKefNQJZfQ9JtpAPc2xiSr6QLKNMdkTT2jYYh4Xflw5C-Jg/exec';

  const onClick = async () => {
    let formData = new FormData();
    formData.append('id', 'm3e25fvm-wjpu-x6yd-wnvm-jgbtf3wiep1l');
    formData.append('Ваше имя', 'Владимир');
    formData.append('Ваш возраст', 31);
    formData.append('Ник в Telegram', 'mavlikwowa');

    const res = await fetch(scriptUrl, { method: 'POST', body: formData})
    const data = await res.json();
    console.log(data);
  }


  return (
    <>
      <GlobalStyles />
      <Card>
        <Greetings />
        {/*<button onClick={onClick}>Go</button>*/}
      </Card>
    </>
  );
};

export default App;
