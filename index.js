function calculate(a, b, operation) {
    let result;
    
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
        
            if (b === 0) {
                return "Помилка (ділення на 0)";
            }
            result = a / b;
            break;
        default:
            result = "Невідома операція";
    }
    
    return result;
}


document.getElementById('calcBtn').addEventListener('click', function() {
    let n1Raw = document.getElementById('num1').value;
    let n2Raw = document.getElementById('num2').value;
    let op = document.getElementById('operator').value;
    let resSpan = document.getElementById('calcResult');
    
    if (n1Raw === "" || n2Raw === "") {
        resSpan.textContent = "Введіть обидва числа!";
        return;
    }
    
    let num1 = Number(n1Raw);
    let num2 = Number(n2Raw);
    
    let calculationResult = calculate(num1, num2, op);
    
    resSpan.textContent = calculationResult;
});
