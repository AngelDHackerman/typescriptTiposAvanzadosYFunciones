import { User, ROLES } from './01Enum';

const currentUser: User = {
  username: 'Hackerman',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole:  ', rta);



export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole:', rta2);



export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);    // * pasamos los parametros dentro de un array.
console.log('checkRoleV2:', rta3);



      // ? Rest params, usamos el spread operator "..." y ya NO pasamos los parametros de la funcion como un array

export const checkRoleV3 = (...roles: string[]) => { // ! usando el ... para ya NO pasar los parametros dentro de un array
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3 (ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER); // todo: Ya NO pasamos los paramentros dentro de un array, TS lo hace automaticamente por nosotros
console.log('checkRoleV3', rta4);
