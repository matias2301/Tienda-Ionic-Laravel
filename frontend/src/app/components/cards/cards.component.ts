import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CategoriesService } from '../../services/categories.service';

import { CardDetailsComponent } from '../../components/card-details/card-details.component';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  
  products = [
    {
      title: 'Manta Zig Zag',
      category: ['manta'],      
      description: `Medidas: 1,10cm de largo por 90cm de ancho.
                    Opción de coleres: a elección.
                    Material: hilo de algodón.`,
      img: [
        "assets/fotos/IMG_20200314_180529_995.jpg"
      ]
    },
    {
      title: 'Manta',
      category: ['manta'],      
      description: `Medidas: 110cm de largo por 85cm de ancho.
                    Opción de colores: a elección.
                    Material: hilo de algodón o lana hipoalergénica para bebé.`,
      img: [
        "assets/fotos/IMG_20200314_180530_002.jpg"
      ]
    },
    {
      title: 'Guirnalda corazones',
      category: ['adorno'],
      description: `Material: hilo de algodón.
                    Relleno: vellón siliconado.
                    Medidas: 120 cm de largo.
                    Cantidad de corazones: 6.
                    Colores: a elección.`,
      img: [
        "assets/fotos/IMG_20200316_113257_688.jpg",       
      ]
    },
    {
      title: 'Elefante Amigurrumi',
      category: ['amigurrumi', 'juguete', 'adorno'],      
      description: `Especial para regalar como primer juguete.
                    Tejido íntegramente a mano.
                    Material: hilo de algodón.
                    Relleno: vellón siliconado.
                    Colores: a elección.`,
      img: [
        "assets/fotos/IMG_20200316_124202_620.jpg"
      ]
    },
    {
      title: 'Nombres',
      category: ['adorno'],      
      description: 'Nombres varios',
      img: [
        "assets/fotos/IMG_20200317_144412319.jpg",
        "assets/fotos/IMG_20200328_191041_541.jpg",
        "assets/fotos/IMG_20200323_172824_636.jpg",
        "assets/fotos/IMG_20200423_143444_167.jpg"
      ]
    },
    {
      title: 'Animalitos Amigurrumi',  
      category: ['amigurrumi', 'juguete'],    
      description: `Los muñecos de apego son fundamentales para el crecimiento de los bebés.
                    La sensación de protección y seguridad que les otorgan los ayuda a crecer en armonía.
                    Los muñecos ideales son sencillos de agarrar, suaves al tacto y cálidos al abrazar.`,
      img: [
        "assets/fotos/IMG_20200320_154429_386.jpg",
        "assets/fotos/IMG_20200331_192456_621.jpg",
        "assets/fotos/IMG_20200403_145558_265.jpg",
        "assets/fotos/IMG_20200401_185711_659.jpg"
      ]
    },
    {
      title: 'Almohadón unicornio',  
      category: ['adorno'],    
      description: `Tejido íntegramente a mano.
                    Material: hilo de algodón.
                    Relleno: vellón siliconado.
                    Medidas: 30cm de diámetro aproximadamente.
                    Colores: únicamente como el de la foto.`,
      img: [
        "assets/fotos/IMG_20200321_195456_762.jpg"
      ]
    },
    {
      title: 'Amigurrumi unicornio',
      category: ['amigurrumi', 'juguete'],
      description: `Especial para regalar como primer juguete.
                    Tejido íntegramente a mano.
                    Material: hilo de algodón.
                    Relleno: vellón siliconado.
                    Colores: a elección.`,
      img: [
        "assets/fotos/IMG_20200328_182527664.jpg",
        "assets/fotos/IMG_20200328_184514995.jpg"
      ]
    },
    {
      title: 'Manta 3 colores',
      category: ['manta'],
      description: `Medidas: 110cm de largo por 85cm de ancho.
                    Opción de colores: consulta por opción.
                    Material: lana hipoalergénica para bebé.`,
      img: [
        "assets/fotos/IMG_20200402_163317_746.jpg",
        "assets/fotos/IMG_20200402_163317_752.jpg"
      ]
    },
    {
      title: 'Conejos',
      category: ['amigurrumi', 'juguete'],
      description: `Tejidos íntegramente a mano.
                    Material: hilo de algodón.
                    Relleno: vellón siliconado.
                    Colores: a elección.`,
      img: [
        "assets/fotos/IMG_20200415_161829_379.jpg",
        "assets/fotos/IMG_20200415_161829_380.jpg",
        "assets/fotos/IMG_20200415_160627603.jpg",
        "assets/fotos/IMG_20200415_160955346.jpg"
      ]
    },
  ]

  @Input() filter: string;
  public showProducts: any[] = this.products;

  constructor(
    public modalController: ModalController,
    private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this._categoriesService.categorySelected.subscribe( category => {
      if( category ){
        this.showProducts = this.products.filter( product => product.category.includes(category));        
      } else {
        this.showProducts = this.products;
      }
    })
  }
  
  resetFilter(){
    this._categoriesService.setCategory(null);
    this.filter = null;
  }

  async showDetails( product: Product ) {
    
    const modal = await this.modalController.create({
      component: CardDetailsComponent,
      // cssClass: 'my-custom-class',
      componentProps: {
        'product': product
      }
    });
    await modal.present();
  }  

}