export function Moda(arr) {
    let frequencia = {};
    let maxFrequencia = 0;
    let moda = [];

    for (let num of arr) {
        frequencia[num] = (frequencia[num] || 0) + 1;
        if (frequencia[num] > maxFrequencia) {
            maxFrequencia = frequencia[num];
        }
    }

    for (let num in frequencia) {
        if (frequencia[num] === maxFrequencia) {
            moda.push(Number(num));
        }
    }

    if (moda.length > 1) {
        return "Não há moda";
    }

    return moda[0];
}
