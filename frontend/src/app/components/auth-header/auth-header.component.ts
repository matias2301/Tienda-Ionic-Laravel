import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

import { AuthService } from '../../services/auth.service';
import { AlertsService } from '../../services/alerts.service';

import { UserLogin } from '../../interfaces/user';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent implements OnInit {

  ACCESS_TOKEN = 'auth-token';

  loginForm: FormGroup;
  socialUser: SocialUser;
  menuLogin: boolean = false;
  hide: boolean = true;  
  userLogged = {
    name: '',
    method: '',
    role: ''
  }    

  @ViewChild('btnLogin', { read: ElementRef })btnLogin: ElementRef; 
  @Output() userRole = new EventEmitter<string>();
  @Output() showLogin = new EventEmitter<boolean>();
  
  constructor(
    public formBuilder: FormBuilder,
    private _authService: AuthService,
    private socialAuthService: SocialAuthService,
    private _alertsService: AlertsService
  ) {
    this.createForm();
  }

  ngOnInit() {
    
    if(localStorage.getItem(this.ACCESS_TOKEN)){      
      if(localStorage.getItem('method') === 'facebook') {        
        this.userLogged = {
          name: localStorage.getItem('name'),
          method: 'facebook',
          role: 'user'
        } 
        this.socialAuthService.authState
          .subscribe((user) => {
            this.socialUser = user;                
        })
      } else {
        this.checkUserLogged();
      }      
    }
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([        
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9!$%@#£€*?&-_]+$')
      ]))
    });
  }

  hideMenuLogin(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;
    
    const rect = this.btnLogin.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top+2;
    const leftBoundary = rect.left+2;
    const rightBoundary = rect.right-2;
 
    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {      
      this.menuLogin = false;
      this.showLogin.emit(false);
      // if( !this.loginForm.controls.email.value ) this.loginForm.reset();      
    }
  }

  onSubmitLogin(values: UserLogin){
    
    if( this.loginForm.invalid ){
      Object.values( this.loginForm.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();          
        }
      });
      return
    }    
    this._authService.login(values)
    .subscribe((res: any) => {           
      this.checkUserLogged();
      this._alertsService.showToast('Bievenid@ a Tienda Maylu', 'success'); 
       
    }, ( err ) => {       
        let errorMsg = '';
        
        if( err.status == 401 ){
          errorMsg = 'Usuario o contraseña invalidos, verifique los datos ingresados'
        } else {
          errorMsg = 'Ha ocurrido un problema, intente nuevamente mas tarde'
        }
        this._alertsService.showToast(errorMsg, 'tertiary');        
      }                        
    );
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then( (res) => {        
        if(res.authToken){
          this._alertsService.showToast('Bievenid@ a Tienda Maylu', 'success'); 
          localStorage.setItem(this.ACCESS_TOKEN, res.authToken);
          localStorage.setItem('name', res.firstName);
          localStorage.setItem('method', 'facebook');
          this.userLogged = {
            name: res.firstName,
            method: 'facebook',
            role: 'user'
          } 
        }
      })
      .catch( (err) => {
        let errorMsg = 'Ha ocurrido un problema, intente nuevamente mas tarde';
        this._alertsService.showToast(errorMsg, 'tertiary');
      })
  }

  logout() {

    if(this.userLogged.method === 'facebook') {
      this.socialAuthService.signOut()
        .then(() => {
          localStorage.removeItem('name')
          localStorage.removeItem('method')
        })
    } else {
      this._authService.logout()
    }
    localStorage.removeItem(this.ACCESS_TOKEN)
    this.userLogged.name = '';
    this.userLogged.role = '';
    this.shareUserRole(null)
  }

  // CHECK LOGIN STATE
  checkUserLogged(){
    
    this._authService.getAuthUser()
    .subscribe((res: any) => {      
      this.userLogged.name = res.name;
      this.userLogged.method = 'api';
      this.userLogged.role = res.role;
      this.shareUserRole(this.userLogged.role)
      this.menuLogin = false;
      this.showLogin.emit(false);
      this.loginForm.reset();
    }); 
  }

  shareUserRole(role: string) {
    this.userRole.emit(role);
  }
  setMenuLogin(state: boolean) {
    this.loginForm.reset();
    this.menuLogin = state;
    this.showLogin.emit(state);
  }

}
