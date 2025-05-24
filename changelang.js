
const supportedLangague = ['pt',   'en']


const userLang = navigator.language || navigator.userLanguage;

const langPrefix = userLang.split('-')[0]

if(langPrefix !== 'pt' && supportedLangague.includes(langPrefix)){
    window.location.href = '/' + langPrefix + '/'
}