import {
  telegram,
  viber,
  whatsapp
} from '../assets'

export const navLinks = [
  {
    id: 'services',
    title: 'Услуги'
  },
  {
    id: 'widgets',
    title: 'Виджеты'
  },
  {
    id: 'integrations',
    title: 'Интеграции'
  },
  {
    id: 'cases',
    title: 'Кейсы'
  },
  {
    id: 'certificates',
    title: 'Сертификаты'
  },
]

export const contacts = [
  {
    name: 'address',
    content: 'Москва, Путевой проезд 3с1, к 902',
  },
  {
    name: 'mobile',
    content: '+7 555 555-55-55',
  },
  {
    name: 'telegram',
    content: telegram,
  },
  {
    name: 'viber',
    content: viber,
  },
  {
    name: 'whatsapp',
    content: whatsapp,
  },
]

export const tagline = {
  title: 'Зарабатывайте больше',
  company: 'с WELBEX',
  descr: 'Развиваем и контролируем\n продажи за вас'
}

export const presents = [
  {
    title: 'Виджеты',
    descr: '30 готовых\n решений'
  },
  {
    title: 'Dashboard',
    descr: 'с показателями\n вашего бизнеса'
  },
  {
    title: 'Skype Аудит',
    descr: 'отдела продаж\n и CRM системы'
  },
  {
    title: '35 дней',
    descr: 'использования\n CRM'
  },
]

export const presentMobile = [
  { title: 'skype аудит' },
  { title: '30 виджетов' },
  { title: 'Dashboard' },
  { title: 'Месяц аmoCRM' },
]

export const footer = [
  {
    title: 'О компании',
    items: [
      { title: 'Партнерская программа' },
      { title: 'Вакансии' }
    ]
  },
  {
    title: 'Меню',
    items: [
      { title: 'Расчёт стоимости' },
      { title: 'Услуги' },
      { title: 'Виджеты' },
      { title: 'Интеграции' },
      { title: 'Наши клиенты' },
      { title: 'Кейсы' },
      { title: 'Благодарственные письма' },
      { title: 'Сертификаты' },
      { title: 'Блог на Youtube' },
      { title: 'Вопрос / Ответ' },
    ]
  },
  {
    title: 'Контакты'
  }
]

export const rights = {
  title: '©WELBEX 2022. Все права защищены.',
  policy: 'Политика конфиденциальности'
}
