import { Markup } from 'telegraf';

export function getMainMenu() {
    return Markup.keyboard([
        ['i am not gay']
    ]).resize();
}