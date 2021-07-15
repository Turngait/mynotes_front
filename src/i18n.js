import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  ru: {
    translation: {
      "appname": 'FinCloud',
      "common": {
        "learnMore": "Подробнее",
        "signOut": "Выйти",
        "inThisMonth": "В этом месяце",
        'addBtn': "Добавить",
        'saveBtn': 'Сохранить',
        'goBackBtn': "Назад"
      },
      "index": {
        "about": "Здесь Вы сможете легко вести статистику и учет своих личных финансов.",
        "signIn": "Войти",
        "signUp": "Создать",
        "policy": "Политика обработки конфеденциальных данных",
        "retrivePass": "Восстановить пароль",
        "yourEmail": "Введите Ваш e-mail...",
        "yourPass": "Введите Ваш пароль...",
        "yourName": "Введите Ваше имя...",
        "descAtSignUp": "Нажимая кнопку Регистрация Вы соглашаетесь с"
      },
      "data": {
        "statInThisMonth": "Статистика в этом месяце",
        "spend": "Потрачено",
        "recive": "Получено",
        "diff": "Баланс"
      },
      "costs": {
        "header": 'Расходы',
        "addCost": 'Добавить расход',
        "addGroup": 'Добавить группу расходов',
        "group": 'Группа',
        "budget": 'Счет',
        "today": 'За день',
        "inThisMounth": 'В этом месяце',
        "noCosts": 'Нет расходов за этот период',
        'titleofCost': 'Наименование расхода',
        'amount': 'Сумма',
        'description': 'Подробное описание',
        'addBtn': 'Добавить',
        'groupName': 'Наименование группы'
      },
      'incomes': {
        'header': 'Доходы',
        'addIncome': 'Добавить доход',
        "today": 'Сегодня',
        "inThisMounth": 'В этом месяце',
        'titleofIncome': 'Наименование дохода',
        'amount': 'Сумма',
        'description': 'Подробное описание',
        'addBtn': 'Добавить',
        'noIncomes': 'Нет доходов за этот период',
        'source': 'Источник',
        "budget": 'Счет',
        "addSource": 'Добавить источник доходов',
        "nameOfSource": "Наименование источника дохода..."
      },
      'budgets': {
        'header': 'Счета',
        'addBudget': 'Добавить счет',
        "today": 'Сегодня',
        "inThisMounth": 'В этом месяце',
        'balance': 'Баланс',
        'budget': "Счет",
        "nameOfBudget": "Наименование счета",
        "initBalance": "Начальный баланс",
        "editBudget": "Редактировать счет",

      },
      "menu": {
        'dashboard': 'Финансы',
        'profile': 'Личный кабинет',
        'signout': 'Выход',
        'settings': 'Настройки',
        'groups': 'Группы'
      },
      "settings": {
        'yourData': 'Ваши данные',
        'changePwd': 'Сменить пароль',
        'yourName': 'Ваше имя',
        'yourEmail': 'Ваш email',
        'oldPwd': 'Старый пароль',
        'newPwd': 'Новый пароль',
        'costGroups': 'Группы расходов',
        'incomeSrc': 'Источники доходов',
        'noGroup': 'У вас пока что отсутствуют группы'

      },
      "footer": {
        'terms': 'Политика обработки конфеденциальных данных'
      },
      "recovery": {
        "recoveryPass": "Восстановление пароля",
        "recText1": "Если Вы забыли свой пароль, то смежете его восстановить.",
        "recText2": "Введите свой e-mail и Вам на почту придет ссылка по которой Вы сможете ввести новый пароль.",
        "messageSended": "Вам на указанную электронную почту было отправленно письмо.",
        "recBtn": "Восстановить",
        'newPass': "Введите новый пароль",
        "passChanged": "Ваш пароль успешно изменен.",
        "passEror": "Пароли должны совпадать",
        "repeatPass": "Повторите ваш новый пароль...",
        "toMainBtn": "На главную"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;