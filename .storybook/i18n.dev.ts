import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nextPlugin } from 'translation-check';
import translation from '@public/locales/ru/translation.json';

void i18n
	.use(i18nextPlugin)
	.use(initReactI18next)
	.init({
		supportedLngs: ['en', 'ru'],
		fallbackLng: 'ru',
		ns: [],
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		resources: {
			ru: {
				translation,
			},
		}
	});

export default i18n;