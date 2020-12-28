import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ru: {
    translation: {
      "appname": 'FinCloud',
      "costs": {
        "header": 'Расходы',
        "addCost": 'Добавить расход',
        "addGroup": 'Добавить группу',
        "group": 'Группа',
        "today": 'Сегодня',
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
        'noIncomes': 'Нет доходов за этот период'
      },
      'budgets': {
        'header': 'Счета',
        'addBudget': 'Добавить счет',
        "today": 'Сегодня',
        "inThisMounth": 'В этом месяце',
        'balance': 'Баланс'
      },
      "menu": {
        'dashboard': 'Финансы',
        'profile': 'Личный кабинет',
        'signout': 'Выход'
      },
      "footer": {
        'terms': 'Политика обработки конфеденциальных данных'
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;