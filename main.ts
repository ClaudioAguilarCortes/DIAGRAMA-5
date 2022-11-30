import { guest } from "./guest"
import { manager } from "./manager"
import { chef } from './chef'
import { inventory } from './inventory';
import { foodItems } from './food items';
import { rooms } from "./rooms";
import { receptionist } from "./receptionist";
import { housekeeping } from "./housekeeping";
import { bill } from "./bill";


const prueba = new guest ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6");
console.log(prueba);
const prueba2 = new manager ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa");
console.log(prueba2);
const prueba3 = new inventory ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido");
console.log(prueba3);
const prueba4 = new foodItems ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido","2324", "manzana");
console.log(prueba4);
const prueba5 = new chef ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido","2324", "manzana", "Pancho", "3132", "cocina");
console.log(prueba5);
const prueba6 = new housekeeping ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido","2324", "manzana", "Pancho", "3132", "cocina", "Señora limpieza", "26", "baño",);
console.log(prueba6);
const prueba7 = new rooms ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido","2324", "manzana", "Pancho", "3132", "cocina", "Señora limpieza", "26", "baño", "parte de atras");
console.log(prueba7);
const prueba8 = new receptionist ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido","2324", "manzana", "Pancho", "3132", "cocina", "Señora limpieza", "26", "baño", "parte de atras", "Jose", "38", "55 2741378190", "recepcioneria");
console.log(prueba8);
const prueba9 = new bill ("Sofia Gutierrez", "123456", "2741219041", "correo@gamil.com", "cuarto no. 6", "Carlos Perez", "529244", "2743082091", "casa",
"comida", "solido","2324", "manzana", "Pancho", "3132", "cocina", "Señora limpieza", "26", "baño", "parte de atras", "38", "Carla");
console.log(prueba9);