async function initI18n() {
  await i18next.use(i18nextHttpBackend).init({
    fallbackLng: 'en',
    
    backend: {
        loadPath: 'src/locales/{{lng}}/localization.json'
    }
  });
  jqueryI18next.init(i18next, $);
}

function translatePage() {
  $("body").localize();
}

function changeLanguage(lng){
    i18next.changeLanguage(lng, () => {
        $('body').localize();
    });
}

(async function () {
  await initI18n();
  translatePage();
})();