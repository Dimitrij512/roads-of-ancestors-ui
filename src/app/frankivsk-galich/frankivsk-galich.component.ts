import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-frankivsk-galich',
  templateUrl: './frankivsk-galich.component.html',
  styleUrls: ['./frankivsk-galich.component.scss']
})
export class FrankivskGalichComponent implements OnInit {
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
        small: './assets/img/expeditions/frankivsk-galich/2.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/2.jpg',
        big: './assets/img/expeditions/frankivsk-galich/2.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/3.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/3.jpg',
        big: './assets/img/expeditions/frankivsk-galich/3.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/4.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/4.jpg',
        big: './assets/img/expeditions/frankivsk-galich/4.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/5.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/5.jpg',
        big: './assets/img/expeditions/frankivsk-galich/5.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/6.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/6.jpg',
        big: './assets/img/expeditions/frankivsk-galich/6.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/7.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/7.jpg',
        big: './assets/img/expeditions/frankivsk-galich/7.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/8.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/8.jpg',
        big: './assets/img/expeditions/frankivsk-galich/8.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/9.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/9.jpg',
        big: './assets/img/expeditions/frankivsk-galich/9.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/10.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/10.jpg',
        big: './assets/img/expeditions/frankivsk-galich/10.jpg'
      },
      {
        small: './assets/img/expeditions/frankivsk-galich/1.jpg',
        medium: './assets/img/expeditions/frankivsk-galich/1.jpg',
        big: './assets/img/expeditions/frankivsk-galich/1.jpg'
      }
    ];
  }

}
