function advancedToPascal(str) {
  return str.replace(/[-_ ](\w)/g, (_, char) =>
    char.toUpperCase()
  ).replace(/^\w/, match => match.toUpperCase());
}
// 示例：输出 "UserAge"
console.log(advancedToPascal("user-age"));
