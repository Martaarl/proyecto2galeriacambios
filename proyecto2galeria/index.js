
const header = document.querySelector("header");

const logo = document.createElement('img');
logo.src='./assets/logo.png';
logo.alt='Logo de la tienda JS';

const nav = document.createElement('nav');

const menu = document.createElement('img');
menu.classList.add('menudesplegable')
menu.src ='./assets/menu.png';
menu.alt = 'menú desplegable';

const menuPrincipal = document.createElement('ul');
menuPrincipal.classList.add('mainmenu');

const apartadosMenu = ['Hombre', 'Mujer', 'Niños', 'Ofertas'];
apartadosMenu.forEach(apartado=>{
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = apartado;
  li.appendChild(a);
  menuPrincipal.appendChild(li)
});

nav.appendChild(menu);
nav.appendChild(menuPrincipal);

const menuAcceso = document.createElement('ul');
menuAcceso.classList.add('access');

const elementosAcceso = [
  {src: './assets/filters.png', alt: 'filtros de búsqueda'},
  {src: './assets/cesta.png', alt: 'cesta compra'},
  {src: './assets/usuario.png', alt: 'usuario login'}
];

elementosAcceso.forEach(elemento => {
  const li = document.createElement ('li');
  const a = document.createElement ('a');
  
  const img = document.createElement ('img');
  img.src = elemento.src;
  img.alt = elemento.alt;
  
  a.appendChild(img);
  li.appendChild(a);
  menuAcceso.appendChild(li);
});

header.append(logo, nav, menuAcceso);


const firstSection = document.createElement('section');
firstSection.id='formulary';

const formulary = document.createElement('form');
formulary.id = 'theForm';

const firstDiv = document.createElement("div");

const firstLabel = document.createElement("label");
firstLabel.classList.add('marca');
firstLabel.textContent = 'Marca';

const firstSelect = document.createElement('select');
firstSelect.classList.add('marca');
firstSelect.id = 'marca';

const options = ['Nike Original', 'New Balance', 'Adidas Original', 'Todas'];
options.forEach(optionBrand=>{
  const option = document.createElement('option');
  option.value = optionBrand;
  option.textContent = optionBrand;
  firstSelect.appendChild(option);
});

firstDiv.append(firstLabel, firstSelect);

const secondDiv = document.createElement('div');

const secondLabel = document.createElement('label');
secondLabel.classList = 'preciomaximo';
secondLabel.textContent = 'Precio máximo';

const inputPrecio = document.createElement('input');
inputPrecio.placeholder= 'Precio máximo';
inputPrecio.id= 'preciomaximo';
inputPrecio.type='number';

secondDiv.append(secondLabel, inputPrecio);

const divFiltrado = document.createElement('div');
const botonFiltrado = document.createElement('button');
botonFiltrado.type='button';
botonFiltrado.id = 'filtrar'
botonFiltrado.textContent='Filtrar';

divFiltrado.appendChild(botonFiltrado);

const divBorrado = document.createElement('div');
const botonBorrado = document.createElement('button');
botonBorrado.type= 'button';
botonBorrado.id= 'borrar';
botonBorrado.textContent = 'Borrar';

divBorrado.appendChild(botonBorrado);

const divFlecha = document.createElement('div');
divFlecha.classList.add('flecha');

const imgFlecha = document.createElement('img');
imgFlecha.id = 'clickForm';
imgFlecha.src = './assets/flecha.png';
imgFlecha.alt = 'flecha desplegable';

divFlecha.appendChild(imgFlecha);
formulary.appendChild(divFlecha);
firstSection.appendChild(formulary);

formulary.append(firstDiv, secondDiv, divFiltrado, divBorrado);
document.querySelector('#formulary').append(formulary, divFlecha);

const ZAPATOS = [
  {
    imagen: './assets/airmax1.png', 
    marca: 'Nike Original', 
    nombre: 'Nike AirMax1', 
    precio: '180.00€', 
    boton: '<button onclick="comprar(\'Air Max 270\')">Comprar</button>'
  },
  {
    imagen: './assets/nb6090.png', 
    marca: 'New Balance', 
    nombre: 'NB9060', 
    precio: '80.00€', 
    boton: '<button onclick="comprar(\'UltraBoost 22\')">Comprar</button>'
  },
  {
    imagen: './assets/nikerevolution.png', 
    marca: 'Nike Original', 
    nombre: 'Nike Revolution', 
    precio: '80.00€', 
    boton: '<button onclick="comprar(\'RS-X3\')">Comprar</button>'
  },
  {
    imagen: './assets/forumbuckle.png', 
    marca: 'Adidas Original', 
    nombre: 'Forum Buckle', 
    precio: '100.00€', 
    boton: '<button onclick="comprar(\'Nano X1\')">Comprar</button>'
  },
  {
    imagen: './assets/campus.png', 
    marca: 'Adidas Original', 
    nombre: 'Campus', 
    precio: '120.00€', 
    boton: '<button onclick="comprar(\'574\')">Comprar</button>'
  },
  {
    imagen: './assets/nb327.png', 
    marca: 'New Balance', 
    nombre: 'NB327', 
    precio: '120.00€', 
    boton: '<button onclick="comprar(\'Chuck Taylor All Star\')">Comprar</button>'
  },
  {
    imagen: './assets/dunklow.png', 
    marca: 'Nike Original', 
    nombre: 'Dunk Low', 
    precio: '100.00€', 
    boton: '<button onclick="comprar(\'Old Skool\')">Comprar</button>'
  },
  {
    imagen: './assets/gazelle.png', 
    marca: 'Adidas Original', 
    nombre: 'Gazelle', 
    precio: '90.00€', 
    boton: '<button onclick="comprar(\'HOVR Phantom\')">Comprar</button>'
  },
  {
    imagen: './assets/airmaxsc.png', 
    marca: 'Nike Original', 
    nombre: 'Air Max SC', 
    precio: '150.00€', 
    boton: '<button onclick="comprar(\'Gel Kayano 27\')">Comprar</button>'
  },
  {
    imagen: './assets/handballspezial.png', 
    marca: 'Adidas Original', 
    nombre: 'Handball Spezial', 
    precio: '120.00€', 
    boton: '<button onclick="comprar(\'Cortez Classic\')">Comprar</button>'
  },
  {
    imagen: './assets/airforce.png', 
    marca: 'Nike Original', 
    nombre: 'Air Force', 
    precio: '130.00€', 
    boton: '<button onclick="comprar(\'Superstar\')">Comprar</button>'
  },
  {
    imagen: './assets/nb9060.png', 
    marca: 'New Balance', 
    nombre: 'NB 9060', 
    precio: '100.00€', 
    boton: '<button onclick="comprar(\'Future Rider\')">Comprar</button>'
  },
  {
    imagen: './assets/nb480.png', 
    marca: 'New Balance', 
    nombre: 'NB 9060', 
    precio: '100.00€', 
    boton: '<button onclick="comprar(\'Club C 85\')">Comprar</button>'
  },
  {
    imagen: './assets/fullforcelow.png', 
    marca: 'Nike Original', 
    nombre: 'Full Force low', 
    precio: '70.00€', 
    boton: '<button onclick="comprar(\'990v5\')">Comprar</button>'
  },
  {
    imagen: './assets/airmaxsc2.png', 
    marca: 'Nike Original', 
    nombre: 'Air Max SC', 
    precio: '160.00€', 
    boton: '<button onclick="comprar(\'Jack Purcell\')">Comprar</button>'
  },
  {
    imagen: './assets/handballspezial2.png', 
    marca: 'Adidas Original', 
    nombre: 'Handball Spezial', 
    precio: '140.00€', 
    boton: '<button onclick="comprar(\'Authentic\')">Comprar</button>'
  }
];

const printZapatos = (zapatosMostrar) => {
  const zapatosSection = document.querySelector("#Zapatos");
  zapatosSection.innerHTML = '';  

  if (zapatosMostrar.length === 0) {
      zapatosSection.innerHTML = '<p>No se han encontrado zapatos que correspondan con los filtros aplicados.</p>';
      return;
  }

  zapatosMostrar.forEach(zapato => {
      const divZapatitos = document.createElement("div");

      const imgZapa = document.createElement("img");
      imgZapa.src = zapato.imagen;
      imgZapa.alt = zapato.nombre;

      const brandZapa = document.createElement("p");
      brandZapa.textContent = zapato.marca;

      const nameZapa = document.createElement("h3");
      nameZapa.textContent = zapato.nombre;

      const priceZapa = document.createElement("p");
      priceZapa.textContent = zapato.precio;

      const buyZapa = document.createElement("button");
      buyZapa.innerHTML = zapato.boton;

      divZapatitos.append(imgZapa,brandZapa,nameZapa,priceZapa,buyZapa);
      
      zapatosSection.appendChild(divZapatitos);
  });
};


printZapatos(ZAPATOS);

const flecha = document.getElementById("clickForm");
const form = document.getElementById("theForm");

flecha.addEventListener("click", () => {
form.style.display = form.style.display === "none" ? "block" : "none";
});


const filtrarZapatos = () => {
  const marcaSeleccionada = document.querySelector("#marca").value;
  const precioMaximo = parseFloat(document.getElementById('preciomaximo').value);

   console.log(marcaSeleccionada);

  const zapatosFiltrados = ZAPATOS.filter(zapato => {
      const cumpleMarca = marcaSeleccionada === 'Todas' || zapato.marca === marcaSeleccionada;
      const cumplePrecio = isNaN(precioMaximo) || parseFloat(zapato.precio.replace('€', '').replace(',', '.')) <= precioMaximo;
      return cumpleMarca && cumplePrecio;
  });

  if (zapatosFiltrados.length=== 0){
    const zapatosAleatorios = ZAPATOS.sort(()=>0.5 - Math.random()).slice(0,3);
    printZapatos(zapatosAleatorios);
  } else {
    printZapatos(zapatosFiltrados);
  } 
  return zapatosFiltrados;
};



document.querySelector('#filtrar').addEventListener('click', filtrarZapatos);


document.getElementById('borrar').addEventListener('click', () => {
  document.getElementById('marca').value = 'Todas';
  document.getElementById('preciomaximo').value = '';
  printZapatos(ZAPATOS); 
});

const sectionBuy = document.createElement('section');
sectionBuy.classList.add('others');

const titleBuy = document.createElement('h4');
titleBuy.textContent = 'Compra con JD';

const ulBuy = document.createElement('ul');

const itemsBuy = ['Guía de tallas', 'Buscador de tallas', 'Descuento estudiantes', 'Calendario lanzamientos', 'Inscríbete a JDX', 'JD Blog'];

itemsBuy.forEach(itemBuy=>{
 const li = document.createElement('li');
 const a = document.createElement('a');
 a.href = '#';
 a.textContent = itemBuy;
 li.appendChild(a);
 ulBuy.appendChild(li);
})

sectionBuy.appendChild(titleBuy);
sectionBuy.appendChild(ulBuy);

const sectionAtention = document.createElement('section');
sectionAtention.classList.add('others');

const titleAtention = document.createElement('h4');
titleAtention.textContent='Atención al cliente';

const ulAtention = document.createElement('ul');

const itemsAtention = ['Preguntas frecuentes', 'Envíos y devoluciones', 'Seguimiento del envío', 'Contacto'];

itemsAtention.forEach(itemAtention=>{
 const li = document.createElement('li');
 const a = document.createElement('a');
 a.href= '#';
 a.textContent= itemAtention;
 li.appendChild(a);
 ulAtention.appendChild(li);
})

sectionAtention.appendChild(titleAtention);
sectionAtention.appendChild(ulAtention);

const sectionAdvice = document.createElement('section');
sectionAdvice.classList.add('others');

const titleAdvice = document.createElement('h4');
titleAdvice.textContent= 'Aviso legal';

const ulAdvice = document.createElement('ul');

const itemsAdvice = ['Términos y condiciones', 'Promociones y condiciones', 'Política de privacidad', 'Política de cookies', 'Ajustes de cookies', 'Accesibilidad'];

itemsAdvice.forEach(itemAdvice=>{
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href='#';
  a.textContent= itemAdvice;
  li.appendChild(a);
  ulAdvice.appendChild(li);
});

sectionAdvice.appendChild(titleAdvice);
sectionAdvice.appendChild(ulAdvice);

const footer = document.querySelector('footer');

footer.append(sectionBuy, sectionAtention, sectionAdvice);
document.body.appendChild(footer);



