import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Bienvenid@ a Tienda Maylu');
    this.metaService.addTags([
      { name: 'keywords', content: 'Crochet, Tienda Maylu, Amigurumis' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Matias Bonino' },
      { name: 'description', content: 'Tienda de creacion de productos en crochet'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-06-05', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }
}
