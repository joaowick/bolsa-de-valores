System.register(["./logarTempoDeExecucao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                const retorno = metodoOriginal.apply(this, args);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    var exportedNames_1 = {
        "logarTempoDeExecucao": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (logarTempoDeExecucao_1_1) {
                exportStar_1(logarTempoDeExecucao_1_1);
            }
        ],
        execute: function () {
        }
    };
});
