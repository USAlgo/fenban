export const themeData = JSON.parse("{\"logo\":\"/images/logo32.png\",\"navbar\":[\"/\",\"/get-started\"],\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"navbar\":[{\"text\":\"使用文档\",\"link\":\"/get-started\"},{\"text\":\"关于\",\"link\":\"/about\"}]},\"/en/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Language\",\"navbar\":[{\"text\":\"User Guide\",\"link\":\"/get-started\"},{\"text\":\"About\",\"link\":\"/about\"}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
