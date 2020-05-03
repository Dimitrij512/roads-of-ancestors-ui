import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-dovbanka',
  templateUrl: './dovbanka.component.html',
  styleUrls: ['./dovbanka.component.scss']
})
export class DovbankaComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: './assets/img/projects/dovbanka/2.jpg',
        medium: './assets/img/projects/dovbanka/2.jpg',
        big: './assets/img/projects/dovbanka/2.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/3.jpg',
        medium: './assets/img/projects/dovbanka/3.jpg',
        big: './assets/img/projects/dovbanka/3.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/4.jpg',
        medium: './assets/img/projects/dovbanka/4.jpg',
        big: './assets/img/projects/dovbanka/4.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/5.jpg',
        medium: './assets/img/projects/dovbanka/5.jpg',
        big: './assets/img/projects/dovbanka/5.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/6.jpg',
        medium: './assets/img/projects/dovbanka/6.jpg',
        big: './assets/img/projects/dovbanka/6.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/7.jpg',
        medium: './assets/img/projects/dovbanka/7.jpg',
        big: './assets/img/projects/dovbanka/7.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/8.jpg',
        medium: './assets/img/projects/dovbanka/8.jpg',
        big: './assets/img/projects/dovbanka/8.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/9.jpg',
        medium: './assets/img/projects/dovbanka/9.jpg',
        big: './assets/img/projects/dovbanka/9.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/10.jpg',
        medium: './assets/img/projects/dovbanka/10.jpg',
        big: './assets/img/projects/dovbanka/10.jpg'
      },
      {
        small: './assets/img/projects/dovbanka/1-max.jpg',
        medium: './assets/img/projects/dovbanka/1-max.jpg',
        big: './assets/img/projects/dovbanka/1-max.jpg'
      }
    ];
  }

}
