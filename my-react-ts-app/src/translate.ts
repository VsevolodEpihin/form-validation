import i18n from 'i18next'
import { Translation, initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      "User": "User",
      "first name": "First Name",
      "last name": "Last Name",
      "Date": "Date",
      "day": "Day",
      "month": "Month",
      "year": "Year",
      "Number Card": "Number Card",
      "CVV": "CVV",
      "phone": "Phone",
      "email": "Email",
      "Save": "Save",
      "Reset": "Reset",
      "Too short,min = 2": "Too short,min = 2",
      "Too short,min = 1": "Too short,min = 1",
      "Too Long,Max = 40!": "Too Long,Max = 40!",
      "Invalid day for current month": "Invalid day for current month",
      "current month doesn't exist and use format '01'": `current month doesn't exist and use format '01'`,
      "you very little": "you very little",
      "you died": "you died",
      "Invalid card Number": "Invalid card Number",
      "CVV length = 3": "CVV length = 3",
      "Invalid Phone Number": "Invalid Phone Number",
      "Invalid Email": "Invalid Email"
    }
  },
  fr: {
    translation: {
      "User": "Utilisateur",
      "first name": "Prénom",
      "last name": "Nom de famille",
      "Date": "Date",
      "day": "Jour",
      "month": "Mois",
      "year": "Année",
      "Number Card": "Numéro de carte",
      "CVV": "CVV",
      "Phone": "Téléphone",
      "Email": "Email",
      "Save": "Enregistrer",
      "Reset": "Réinitialiser",
      "Too short,min = 2": "Trop court,min = 2",
      "Too short,min = 1": "Trop court,min = 1",
      "Too Long,Max = 40!": "Trop long,Max = 40!",
      "Invalid day for current month": "Jour invalide pour le mois en cours",
      "current month doesn't exist and use format '01'": `le mois en cours n'existe pas et utilise le format '01`,
      "you very little": "tu es très peu",
      "you died": "tu es mort",
      "Invalid card Number": "Numéro de carte invalide",
      "CVV length = 3": "Longueur CVV = 3",
      "Invalid Phone Number": "Numéro de téléphone invalide",
      "Invalid Email": "E-mail invalide"
    }
  },
  ru: {
    translation: {
      "User": "Пользователь",
      "first name": "Имя",
      "last name": "Фамилия",
      "Date": "Дата",
      "day": "День",
      "month": "Месяц",
      "year": "Год",
      "Number Card": "Номер карты",
      "CVV": "CVV",
      "Phone": "Телефон",
      "Email": "Электронная почта",
      "Save": "Сохранить",
      "Reset": "Сбросить",
      "Too short,min = 2": "Слишком коротко, необходимо минимум 2 символа",
      "Too short,min = 1": "Слишком коротко, необходим минимум 1 символ",
      "Too Long,Max = 40!": "максимальная длина = 40",
      "Invalid day for current month": "не корректный день для текущего месяца",
      "current month doesn't exist and use format '01'": `месяца не существует,необходимо использовать формат '01'`,
      "you very little": "Ты еще маленький",
      "you died": "Вероятно вы уже мертвы",
      "Invalid card Number": "Данные карты не корректны",
      "CVV length = 3": "Длина CVV = 3",
      "Invalid Phone Number": "Данные номера телефона не корректны",
      "Invalid Email": "Данные email не корректны"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  })

  export default i18n;
