const getGeoLanguage = (): "turkish" | "english" => {
  const lang = navigator.language;

  if (lang.startsWith("tr")) return "turkish";
  if (lang.startsWith("en")) return "english";

  return "english";
};

export default getGeoLanguage;