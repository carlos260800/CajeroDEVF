var cuentas = [
  { nombre: " Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];

let ingresar_saldo = document.getElementById("ingresar_saldo");
let retirar_saldo = document.getElementById("retirar_saldo");
let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let msg = document.getElementById("msg");
let msg2 = document.getElementById("msg2");
let nombre = document.getElementById("nombre");
let saldo = document.getElementById("saldo");

let cuenta = cuentas[2].saldo;
let usuario = cuentas[2].nombre;

mostrarNombre();
mostrarSaldo();

ingresar_saldo.addEventListener("submit", (evento) => {
  evento.preventDefault();
  agregarSaldo();
});

retirar_saldo.addEventListener("submit", (evento) => {
  evento.preventDefault();
  retirarSaldo();
});

const agregarSaldo = (evento) => {
  if (cuenta + parseInt(input.value) <= 990) {
    if (input.value <= 0) {
      msg.innerHTML = "<h3>Cantidad Invalida</h3>";
    } else {
      cuenta = cuenta + parseInt(input.value);
      msg.innerHTML = `<h3>Se ingresaron ${input.value}$</h3>`;
      mostrarSaldo();
    }
  } else {
    msg.innerHTML = "<h3>Cantidad Invalida, Supera los 990 Permitidos</h3>";
  }
};

const retirarSaldo = (evento) => {
  if (cuenta - parseInt(input2.value) >= 10) {
    if (input2.value <= 0 || input2.value > cuenta) {
      msg2.innerHTML = "<h3>No puedes retirar esa cantidad</h3>";
    } else {
      cuenta = cuenta - parseInt(input2.value);
      msg2.innerHTML = `<h3>Se retiraron ${input2.value}$</h3>`;
      mostrarSaldo();
    }
  } else {
    msg2.innerHTML = "<h3>No Puedes Tener Menos de 10 Pesos en tu Cuenta</h3>";
  }
};

function mostrarNombre() {
  nombre.innerHTML = `
      <h3>${usuario}</h3>
    `;
}

function mostrarSaldo() {
  saldo.outerHTML;
  saldo.innerHTML = `
        <h3>${cuenta}</h3
    `;
}
