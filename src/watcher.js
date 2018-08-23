// import chokidar from 'chokidar';

const chokidar = require('chokidar');
const chalk = require('chalk');

import { applyMock } from './apply-mock';
import store from './store';

const createWatcher = ({ server, applyBefore = () => {} }) => {
    const watcher = chokidar.watch(store.path, {
        persistent: true,
        ignored: /(^|[\/\\])\../, //忽略点文件
        cwd: '.', //表示当前目录
        depth: 99 //到位了....
    });
    watcher.on('change', path => {
        console.log(chalk.bgCyan('[DM]'), chalk.red('CHANGED'), store.path);
        watcher.close();
        applyBefore();
        applyMock({ server });
    });
};

export default createWatcher;
