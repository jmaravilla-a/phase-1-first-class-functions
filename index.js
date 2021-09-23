function receivesAFunction(a) {
    return a();
}

function returnsANamedFunction() {
    return function aNamedFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}