
const supportedLangague = ['pt',   'en']


const userLang = navigator.language || navigator.userLanguage;

const langPrefix = userLang.split('-')[0]
const basePath = window.location.pathname.split('/')[1];

console.log("Aqui:" +  basePath + langPrefix)

if(langPrefix !== 'pt' && supportedLangague.includes(langPrefix)){
   window.location.href = '/' + basePath + '/' + langPrefix + '/'
}