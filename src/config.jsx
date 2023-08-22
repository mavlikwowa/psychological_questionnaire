import Greetings from '@src/Pages/Greetings';
import Credentails from '@src/Pages/Credentails';
import SecondPage from '@src/Pages/SecondPage';


const CONFIG =  {
  scriptUrl: 'https://script.google.com/macros/s/AKfycbzC-Zx0D3nG6V0veEmEkTRUT0wLKLVMKufDrP8eW1bclXhC023byOqH8i1dKTkw_qFsvQ/exec',
  mappingFields: {
    // 0
    id: 'id',
    // 1
    name: 'Ваше имя',
    age: 'Ваш возраст',
    telegram: 'Ник в Telegram',
    // 2
    threeQuestions: 'Какие три вопроса вы хотите решить с помощью сервиса?',
    role1: 'Укажите ваши главные роли в жизни на сегодняшний день (Роль 1):',
    role2: 'Укажите ваши главные роли в жизни на сегодняшний день (Роль 2):',
    role3: 'Укажите ваши главные роли в жизни на сегодняшний день (Роль 3):',
    target1: 'Что для вас самое главное в жизни? Напишите три жизненные цели (Цель 1):',
    target2: 'Что для вас самое главное в жизни? Напишите три жизненные цели (Цель 2):',
    target3: 'Что для вас самое главное в жизни? Напишите три жизненные цели (Цель 3):',
  },
  pages: {
    0: {
      component: Greetings,
    },
    1: {
      component: Credentails,
    },
    2: {
      component: SecondPage,
    },
  }
}

export default CONFIG;
