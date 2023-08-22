import Greetings from '@src/Pages/Greetings';
import Credentails from '@src/Pages/Credentails';
import SecondPage from '@src/Pages/SecondPage';
import ThirdPage from '@src/Pages/ThirdPage';


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
    threeQuestions: 'Какие три вопроса вы хотите решить с помощью сервиса',
    role1: 'Укажите ваши главные роли в жизни на сегодняшний день (Роль 1):',
    role2: 'Укажите ваши главные роли в жизни на сегодняшний день (Роль 2):',
    role3: 'Укажите ваши главные роли в жизни на сегодняшний день (Роль 3):',
    target1: 'Что для вас самое главное в жизни? Напишите три жизненные цели (Цель 1):',
    target2: 'Что для вас самое главное в жизни? Напишите три жизненные цели (Цель 2):',
    target3: 'Что для вас самое главное в жизни? Напишите три жизненные цели (Цель 3):',
    // 3
    thirdQuestion1: 'Вы оцениваете себя с точки зрения достижений (материальных и статусных)',
    thirdQuestion2: 'Вы сравниваете свои достижения относительно других людей',
    thirdQuestion3: 'Вы часто не доводите до конца начатое. Зажигаясь в начале, вы тухните по мере реализации задуманного',
    thirdQuestion4: 'Вы болезненно переносите любую критику, в том числе конструктивную',
    thirdQuestion5: 'Вы склонны ловить людей на противоречии и подмечать их ошибки вслух',
    thirdQuestion6: 'Вам все время кажется, что вы достигли малого',
    thirdQuestion7: 'Вы часто сами обесцениваете свои достижения',
    thirdQuestion8: 'Вы периодически подумываете заняться чем-то другим',
    thirdQuestion9: 'Вам кажется, вас не ценят',
    thirdQuestion10: 'Вы вступаете в конфликт даже тогда, когда проще уступить',
    thirdQuestion11: 'У вас повышенная конфликтность (например, на дороге)',
    thirdQuestion12: 'Вы чувствуйте презрение к моральной слабости других людей',
    thirdQuestion13: 'Победа любой ценой. Это про вас',
    thirdQuestion14: 'Конфликт на ровном месте. Это про вас',
    thirdQuestion15: 'Вам трудно признать свои ошибки',
    thirdQuestion16: 'Вы часто ориентируетесь на мнение',
    thirdQuestion17: 'Вы постоянно сдерживаете чувства',
    thirdQuestion18: 'У вас есть трудности с отстаиванием своих интересов',
    thirdQuestion19: 'Вам трудно делать что-либо для себя',
    thirdQuestion20: 'Вы не верите, что можете добиться существенных успехов',
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
    3: {
      component: ThirdPage,
    },
  }
}

export default CONFIG;