System.register(["./logarTempoDeExecucao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let divisor = 1;
                let unidade = 'milisegundos';
                if (emSegundos) {
                    divisor = 1000;
                    unidade = 'segundos';
                }
                console.log('--------------------');
                console.log(`Parametros do método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const resultado = metodoOriginal.apply(this, args);
                console.log(`Resultado do método: ${JSON.stringify(resultado)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                console.log('--------------------');
                return resultado;
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
