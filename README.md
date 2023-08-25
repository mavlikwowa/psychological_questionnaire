# AIMME. Психологический тест

## Развёртывание
1. Создать Google Sheet документ;
2. Наименование листа - Sheet1;
3. Перейти в Apps Script (вкладка "Расширения");
4. Создать и опубликовать скрипт из файла GoogleSheetScript;
5. Перейти в файл src/config.jsx, указать ссылку на скрипт, созданный в развёртывании;
6. Создать колонки, указанные в значениях mappingFields (пример можно взять из файла example.xlsx);
7. Колонку с id сформировать через =generateUID();

## Публикация
* `yarn deploy` - на github pages
* `yarn predeploy` - сборка

## Использование
1. Взять идентификатор из колонки id, отдать клиенту ссылку на приложение с указанным id, например hostname?uid=b90hhqdw-rqv6-wuzz-ivz3-ywh0ehkdav6f
2. Строка с используемым идентификатором не должна быть заполнена - в противном случае считается, что клиент отвечал на тест 

# AIMME. Psychological Test

## Deployment
1. Create a Google Sheet document.
2. Name the sheet - Sheet1.
3. Go to Apps Script (Extensions tab).
4. Create and publish the script from the GoogleSheetScript file.
5. Go to the src/config.jsx file, provide the link to the script created during deployment.
6. Create the columns specified in the mappingFields values (you can use the example.xlsx file as a reference).
7. Generate the id column using =generateUID().
## Publication
* `yarn deploy` - for GitHub Pages deployment.
* `yarn predeploy` - build process.
## Usage
1. Take the identifier from the id column, provide the client with a link to the application with the given id, for example, hostname?uid=b90hhqdw-rqv6-wuzz-ivz3-ywh0ehkdav6f.
2. The row with the used identifier should not be filled - otherwise, it is considered that the client has responded to the test.
