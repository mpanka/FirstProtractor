// exports.config = {
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['./src/test/spec2.js'],
//     multiCapabilities: [{
//         browserName: 'firefox'
//     }, {
//         browserName: 'chrome'
//     }]
// }


//multiple spec files.
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/test/spec.js', './src/test/spec3.js'],
    capabilities: {
        browserName: 'chrome'
    }
}