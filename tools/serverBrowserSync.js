import browserSync from 'browser-sync';
import proxy from 'http-proxy-middleware';

const proxyOpts = {
    target: 'http://localhost:4000' // where express is running (src/bin/www)
};

browserSync({
    'files': [
        '!**/*.scss',
        '!src/assets/javascript/**/*',
        'src/**/*'
    ],
    'watchOptions': {
        'ignoreInitial': true
    },
    'server': {
        'baseDir': 'src',
    },
    'port': 9000,
    'middleware': [proxy('/', proxyOpts)],
    'reloadOnRestart': false,
    'notify': false,
    'open': false
});
