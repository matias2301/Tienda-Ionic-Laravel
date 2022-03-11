export interface NavItem {
  displayName: string;  
  iconName: string;
  route?: string;
  show?: string;
  argument?: string;
  children?: NavItem[];
}
