import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ContactsService } from '../../services/contacts.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private _contactsService: ContactsService,
    private _alertsService: AlertsService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.titleService.setTitle('Formulario de Contacto');
    this.metaService.updateTag({ content: 'Formulario de envio de pedido o comentarios'} , 'name="description"' );
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl(''),
      subject: new FormControl('', Validators.compose([        
        Validators.required,
      ])),
      comment: new FormControl('', Validators.compose([        
        Validators.required,
      ]))
    });
  }

  sendEmail(){
    
    if( this.contactForm.invalid ){
      Object.values( this.contactForm.controls ).forEach( control => control.markAsTouched() );
      return
    }

    var formData = new FormData();

    formData.append('userName', this.contactForm.controls.name.value);
    formData.append('email', this.contactForm.controls.email.value);
    formData.append('subject', this.contactForm.controls.subject.value);
    formData.append('comment', this.contactForm.controls.comment.value);

    this._contactsService.sendEmail(formData)
      .subscribe((res: any) => {        
        this._alertsService.showToast(`El mensaje fue enviado con exito. Si ingresaste un correo pronto te estaremos respondiendo.`, 'success');
        this.contactForm.reset();
      }, ( err ) => {      
        let errorMsg = 'Ha ocurrido un problema, intente nuevamente mas tarde';
        this._alertsService.showToast(errorMsg, 'tertiary');
        }                        
      );
  }

}
