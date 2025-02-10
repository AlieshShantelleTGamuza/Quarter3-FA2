function add(a, b) { return a + b; }
        function sub(a, b) { return a - b; }
        function multiply(a, b) { return a * b; }
        function divide(a, b) { return b !== 0 ? a / b : 'Undefined'; }
        function modu(a, b) { return b !== 0 ? a % b : 'Undefined'; }

        function displayRes(opp, sym) {
            let num1 = parseFloat(document.getElementById('num1').value) || 0;
            let num2 = parseFloat(document.getElementById('num2').value) || 0;
            let res = opp(num1, num2);
            document.getElementById('res').innerHTML = `The result of ${num1} ${sym} ${num2} is ${res}.`;
        }