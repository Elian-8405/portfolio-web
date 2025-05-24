
const supportedLangague = ['pt',   'en']


const userLang = navigator.language || navigator.userLanguage;

const langPrefix = userLang.split('-')[0]
const basePath = window.location.pathname.split('/')[1];

if(langPrefix !== 'pt' && supportedLangague.includes(langPrefix)){
   window.location.href = '/' + basePath + '/' + langPrefix + '/'
}