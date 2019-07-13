function clearScreen() {
    document.getElementById('formula').innerHTML = '';
    document.getElementById('number').innerHTML = 0;
}

function del() {
    let number = document.getElementById('number').innerHTML;
    if (number.length === 1) {
        if (number !== '0') {
            number = '0';
        }
    } else {
        number = number.slice(0, -1);
    }
    document.getElementById('number').innerHTML = number;
}

function clickNumber(number) {
    let curNum = document.getElementById('number').innerHTML;
    if (curNum === '0') {
        if (number === '0') {
            return;
        } else if (number === '.') {
            curNum += number;
        } else {
            curNum = number;
        }
    } else if (number === '.') {
        for (i in curNum) {
            if (curNum[i] === '.') {
                return;
            }
        }
        curNum += '.';
    } else {
        curNum += number;
    }
    document.getElementById('number').innerHTML = curNum;
}

function clickOperator(operator) {
    if (operator === '=') {
        let formula = document.getElementById('formula').innerHTML;
        formula = formula.replace(/×/g, '*').replace(/÷/g, '/').replace(/mod/g, '%');
        console.log(formula);
        document.getElementById('number').innerHTML = eval(formula + document.getElementById('number').innerHTML);
        document.getElementById('formula').innerHTML = '';
    } else {
        document.getElementById('formula').innerHTML += document.getElementById('number').innerHTML + operator;
        document.getElementById('number').innerHTML = '0';
    }
}
