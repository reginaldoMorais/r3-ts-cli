import enLang from './entries/en';
import esLang from './entries/es';
import frLang from './entries/fr';
import brLang from './entries/pt-BR';

export enum Locates {
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  BR = 'br',
}

const Lang = {
  en: enLang,
  es: esLang,
  fr: frLang,
  br: brLang
};

export default Lang;
