function iterativo(m, n) {
    let result = 1;

    for (let i = m; i <= n; i++) {
        result *= (i + (1 / i))
    }

    return result
}

function recursivo(m, n, value) {
    if (m <= n) {
        value *= (m + (1 / m))
        m++
        return recursivo(m, n, value)
    }

    return value
}

module.exports = {iterativo, recursivo};