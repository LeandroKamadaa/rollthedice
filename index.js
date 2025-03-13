import cool from 'cool-ascii-faces';
import chalk from 'chalk';

export default function rollthedice(nome) {
    const dado = Math.floor(Math.random() * 20) + 1;

    if (dado == 1) {
        console.log(chalk.red(`${cool()} ${nome}, você tirou ${dado} e teve um erro crítico!`));
    } else if (dado == 20) {
        console.log(chalk.green(`${cool()}  ${nome}, você tirou ${dado} e teve um acerto crítico!`));
    } else if (dado < 10) {
        console.log(chalk.yellow(`${cool()}  ${nome}, você tirou ${dado} e não passou no teste!`));
    } else {
        console.log(chalk.blue(`${cool()}  ${nome}, você tirou ${dado} e passou no teste!`));
    }
}
 


