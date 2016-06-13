(function (global) {

    var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

    //map tells the System loader where to look for things
    var map = {
        'app': 'app',

        '@angular': 'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js',
        'ag-grid-ng2': 'https://npmcdn.com/ag-grid-ng2@4.1.3',
        'ag-grid': 'https://npmcdn.com/ag-grid@4.1.5',
        'jquery': 'https://npmcdn.com/jquery@3.0.0',
        'jquery-csv':'https://npmcdn.com/jquery-csv@0.8.1'
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.ts', defaultExtension: 'ts'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'},
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {

        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = {main: pkgName + '.umd.js', defaultExtension: 'js'};

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'typescript',
        typescriptOptions: {
            emitDecoratorMetadata: true
        },

        map: map,
        packages: packages
    }

    System.config(config);

})(this);