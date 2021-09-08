<<<<<<< HEAD
   <div class="fundo">
        <h1 class="titulo">CALCULADORA COLORIDA</h1>
        <div class="calculadora">
            <h3>Vamos calcular!</h3>
            <p id="resultado"></p>
            <table>
                <tr>
                    <td><button class="buttonC" onclick="clean()">C</button></td>
                    <td><button class="buttonsinal" onclick="back()"><</button></td>
                    <td><button class="buttontraco" onclick="insert('/')">/</button></td>
                    <td><button class="buttonX" onclick="insert('*')">X</button></td>
                </tr>
                <tr>
                    <td><button class="button7" onclick="insert('7')">7</button></td>
                    <td><button class="button8" onclick="insert('8')">8</button></td>
                    <td><button class="button9" onclick="insert('9')">9</button></td>
                    <td><button class="button-" onclick="insert('-')">-</button></td>
                </tr>
                <tr>
                    <td><button class="button4" onclick="insert('4')">4</button></td>
                    <td><button class="button5" onclick="insert('5')">5</button></td>
                    <td><button class="button6" onclick="insert('6')">6</button></td>
                    <td><button class="buttonmais" onclick="insert('+')">+</button></td>
                </tr>
                <tr>
                    <td><button class="button1" onclick="insert('1')">1</button></td>
                    <td><button class="button2" onclick="insert('2')">2</button></td>
                    <td><button class="button3" onclick="insert('3')">3</button></td>
                    <td rowspan="2"><button class="buttonigual" style="height:106px;" onclick="calcular()">=</button></td>
                </tr>
                <tr>
                    <td colspan="2"><button class="button0" style="width: 106px;" onclick="insert('0')">0</button></td>
                    <td><button class="buttonponto" onclick="insert('.')">.</button></td>
                </tr>
        </div>
        </table>
    </div>
    <script>
        function insert(num) {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }

        function clean() {
            document.getElementById('resultado').innerHTML = "";
        }

        function back() {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
        }

        function calcular() {
            var resultado = document.getElementById('resultado').innerHTML;
            if (resultado) {
                document.getElementById('resultado').innerHTML = eval(resultado)
            } else {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
        }
=======
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
>>>>>>> f74eb15 (Script)
