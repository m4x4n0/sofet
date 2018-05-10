var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;
build_path = 'build';
front_path = '../front/src/';

var config = {
    env: 'development',
    production: production,
    index_page: 'index.html',
    build_path: build_path,

    src: {
        root         : 'app',
        templates    : 'app/templates',
        templatesData: 'app/templates/data',
        pagelist     : 'app/index.yaml',
        sass         : 'app/sass',
        sass_file    : 'app/sass/main.sass',
        sassGen      : 'app/sass/generated',
        js           : 'app/js',
        images       : 'app/images',
        svg          : 'app/images/svg',
        icons        : 'app/icons',
        iconsPng     : 'app/icons',
        iconsSvg     : 'app/icons',
        iconsFont    : 'app/icons',
        fonts        : 'app/fonts',
        lib          : 'app/lib',
    },
    build: {
        root : build_path,
        html : build_path,
        static  : build_path + '/static/',
        css  : build_path + '/static/css',
        js   : build_path + '/static/js',
        images  : build_path + '/static/images',
        fonts: build_path + '/static/fonts',
        lib  : build_path + '/lib'
    },

    front: {
        root : front_path,
        html : front_path,
        static  : front_path + '/static/',
        css  : front_path + '/static/css',
        js   : front_path + '/static/js',
        images  : front_path + '/static/images',
        fonts: front_path + '/static/fonts',
        lib  : front_path + '/lib'
    },

    setEnv: function(env) {
        if (typeof env !== 'string') return;
        this.env = env;
        this.production = env === 'production';
        process.env.NODE_ENV = env;
    },

    logEnv: function() {
        util.log(
            'Environment:',
            util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        );
    },

    errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
