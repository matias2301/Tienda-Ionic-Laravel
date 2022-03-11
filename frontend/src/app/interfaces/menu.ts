import { NavItem } from './navItem';;

export let menu: NavItem[] = [
  {
    displayName: 'Inicio',
    iconName: 'home',
    route: 'home',
    show: 'always'
  },
  {
    displayName: 'Productos',
    iconName: 'business_center',
    route: 'home',
    show: 'always'
  },
  {
    displayName: 'Contacto',
    iconName: 'contact_mail',
    route: 'contact',
    show: 'always'
  },
  {
    displayName: 'Acerca de...',
    iconName: 'person_pin_circle',
    route: 'about',
    show: 'always'
  },
  {
    displayName: 'Panel Admin',
    iconName: 'settings',
    route: 'panelAdmin',
    show: 'always'
  },
  {
    displayName: 'Ingresar',
    iconName: 'flag',
    route: 'login',
    show: 'false'
  },
  {
    displayName: 'Registrarme',
    iconName: 'person_add',
    route: 'register',
    show: 'false'
  },
  {
    displayName: 'Salir',
    iconName: 'exit_to_app',
    route: 'signout',
    show: 'true'
  }
];
