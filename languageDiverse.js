function isLanguageDiverse(list) {
  let java = 0;
  let Python = 0;
  let Ruby = 0;

  list.forEach((ele) => {
    if (ele.language == "JavaScript") {
      java = java + 1;
    } else if (ele.language == "Python") {
      Python++;
    } else {
      Ruby++;
    }
  });

  let maxLang = Math.max(java, Python, Ruby);

  if (maxLang > java * 2 || maxLang > Python * 2 || maxLang > Ruby * 2) {
    return false;
  }

  return true;
}
