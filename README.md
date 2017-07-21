# BSA-JS-07-Webpack
Trying to install and use some Webpack functionality

для того чтоб запустить webpack как задумывалось есть 2 способа, первый создать файл с названием .eslintrc.json с таким содержимым в папке проекта:

{
  "root": true,
  "globals": {
    "wp": true
  },
  "env": {
    "amd": true,
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint"
}

второй способ это скаченный файл eslintrc.json переименовать на .eslintrc.json

проблема с тем что гит игнорирует файлы которые начинаются с точки, это как-то можно решить наверное, но пока так..
