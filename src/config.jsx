import Greetings from '@src/Pages/Greetings';
import Credentails from '@src/Pages/Credentails';


const CONFIG =  {
  scriptUrl: 'https://script.google.com/macros/s/AKfycbzC-Zx0D3nG6V0veEmEkTRUT0wLKLVMKufDrP8eW1bclXhC023byOqH8i1dKTkw_qFsvQ/exec',
  mappingFields: {
    id: 'id',
    name: 'Ваше имя',
    age: 'Ваш возраст',
    telegram: 'Ник в Telegram',
    testSlider: 'Пример вопроса',
    testRow: 'Пример строки',
  },
  pages: {
    0: {
      component: Greetings,
    },
    1: {
      component: Credentails,
    }
  }
}

export default CONFIG
