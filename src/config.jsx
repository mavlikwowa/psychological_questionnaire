import Greetings from '@src/Pages/Greetings';
import Credentails from '@src/Pages/Credentails';
import SecondPage from '@src/Pages/SecondPage';
import ThirdPage from '@src/Pages/ThirdPage';
import FourthPage from '@src/Pages/FourthPage';
import FifthPage from '@src/Pages/FifthPage';
import SixthPage from '@src/Pages/SixthPage';
import SeventhPage from '@src/Pages/SeventhPage';


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
    // 4
    firstImage: 'Первое изображение',
    secondImage: 'Второе изображение',
    thirdImage: 'Третье изображение',
    fourthImage: 'Четвёртое изображение',
    // 5
    firstRow: 'Первое слово',
    secondRow: 'Второе слово',
    thirdRow: 'Третье слово',
    fourthRow: 'Четвертое слово',
    fifthRow: 'Пятое слово',
    sixthRow: 'Шестое слово',
    seventhRow: 'Седьмое слово',
    eighthRow: 'Восьмое слово',
    ninthRow: 'Девятое слово',
    tenthRow: 'Десятое слово',
    eleventhRow: 'Одиннадцатое слово',
    twelfthRow: 'Двенадцатое слово',
    thirteenthRow: 'Тринадцатое слово',
    fourteenthRow: 'Четырнадцатое слово',
    fifteenthRow: 'Пятнадцатое слово',
    // 6
    firstQuestion: 'Для вас важна хорошо оплачиваемая работа, даже если вы не получаете должного признания.',
    secondQuestion: 'Для вас важны признание и похвала, даже если оплата не очень высока.',
    thirdQuestion: 'Тестовый вопрос 1',
    fourthQuestion: 'Тестовый вопрос 2',
    // 7
    seventhQuestion1: 'Мне порой не хватает выдержки.',
    seventhQuestion2: 'Если мои желания мешают мне, я могу их подавлять.',
    seventhQuestion3: 'Родители,должны устраивать жизнь своих детей.',
    seventhQuestion4: 'Я иногда преувеличиваю свою роль в каких-либо событиях.',
    seventhQuestion5: 'Меня провести не легко.',
    seventhQuestion6: 'Мне бы понравилось быть воспитателем.',
    seventhQuestion7: 'Бывает, мне хочется подурачиться, как маленькому.',
    seventhQuestion8: 'Думаю, что я правильно понимаю все происходящие события.',
    seventhQuestion9: 'Каждый должен выполнять свой долг.',
    seventhQuestion10: 'Нередко я поступаю не как надо, а как хочется.',
    seventhQuestion11: 'Принимая решение, я стараюсь продумать его последствия.',
    seventhQuestion12: 'Младшее поколение должно учиться у старших, как ему следует жить.',
    seventhQuestion13: 'Я, как и многие люди, бываю обидчив.',
    seventhQuestion14: 'Мне удается видеть в людях больше, чем они говорят о себе.',
    seventhQuestion15: 'Дети должны безусловно следовать указаниям родителей.',
    seventhQuestion16: 'Я увлекающийся человек.',
    seventhQuestion17: 'Мой основной критерий оценки человека – объективность.',
    seventhQuestion18: 'Мои взгляды непоколебимы.',
    seventhQuestion19: 'Бывает, я не уступаю в споре лишь потому, что не хочу уступать.',
    seventhQuestion20: 'Правила оправданы лишь до тех пор, пока они полезны.',
    seventhQuestion21: 'Люди должны соблюдать все правила, независимо от обстоятельств.',
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
    4: {
      component: FourthPage,
    },
    5: {
      component: FifthPage,
      questions: {
        firstRow: ['Глобальность', 'Смелость', 'Представительность', 'Осторожность'],
        secondRow: ['Организованность', 'Действительность', 'Вежливость', 'Сотрудничество'],
        thirdRow: ['Трудолюбие', 'Независимость', 'Компанейский', 'Умение слушать'],
        fourthRow: ['Никакой бессмыслицы', 'Решительность', 'Разговорчивость', 'Отзывчивость'],
        fifthRow: ['Серьезность', 'Смелость', 'Представительность', 'Осторожность'],
        sixthRow: ['Скрупулезность', 'Агрессивность', 'Дружелюбность', 'Умеренность во взглядах'],
        seventhRow: ['Практичность', 'Властность', 'Эмоциональный', 'Неуверенность'],
        eighthRow: ['Самоконтроль', 'Самоуверенность', 'Обходительность', 'Щепетильность'],
        ninthRow: ['Целеустремленность', 'Уверенность', 'Общительность', 'Терпимость'],
        tenthRow: ['Методичность', 'Определенность', 'Искренность', 'Предусмотрительность'],
        eleventhRow: ['Деловитость', 'Твердость', 'Дружеский', 'Точность'],
        twelfthRow: ['Прилежность', 'Сила духа', 'Демонстративность', 'Разборчивость'],
        thirteenthRow: ['Сентиментальность', 'Точность', 'Чувство юмора', 'Думающий'],
        fourteenthRow: ['Формальность', 'Настойчивость', 'Выразительность', 'Сомнение'],
        fifteenthRow: ['Настойчивость', 'Убедительность', 'Доверие', 'Сдержанный'],
      }
    },
    6: {
      component: SixthPage,
    },
    7: {
      component: SeventhPage,
    },
  }
}

export default CONFIG;
