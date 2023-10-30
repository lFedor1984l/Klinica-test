// Поиск и замена
import replace from "gulp-replace";
// Обработка ошибок
import plumber from "gulp-plumber";
// Сообщения(подсказки)
import notify from "gulp-notify";
// Локальный сервер
import browsersync from "browser-sync";
// Проверка обновлений
import newer from 'gulp-newer';

// Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}