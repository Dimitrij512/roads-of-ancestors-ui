import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
    selector: 'app-boat-credo',
    templateUrl: './boat-credo.component.html',
    styleUrls: ['./boat-credo.component.scss']
})
export class BoatCredoComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor() {
    }

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
                small: './assets/img/projects/credo/2-min.jpg',
                medium: './assets/img/projects/credo/2-min.jpg',
                big: './assets/img/projects/credo/2-min.jpg'
            },
            {
                small: './assets/img/projects/credo/3-min.jpg',
                medium: './assets/img/projects/credo/3-min.jpg',
                big: './assets/img/projects/credo/3-min.jpg'
            },
            {
                small: './assets/img/projects/credo/4-min.jpg',
                medium: './assets/img/projects/credo/4-min.jpg',
                big: './assets/img/projects/credo/4-min.jpg'
            },
            {
                small: './assets/img/projects/credo/5-min.jpg',
                medium: './assets/img/projects/credo/5-min.jpg',
                big: './assets/img/projects/credo/5-min.jpg'
            },
            {
                small: './assets/img/projects/credo/6-min.jpg',
                medium: './assets/img/projects/credo/6-min.jpg',
                big: './assets/img/projects/credo/6-min.jpg'
            },
            {
                small: './assets/img/projects/credo/7-min.jpg',
                medium: './assets/img/projects/credo/7-min.jpg',
                big: './assets/img/projects/credo/7-min.jpg'
            },
            {
                small: './assets/img/projects/credo/8-min.jpg',
                medium: './assets/img/projects/credo/8-min.jpg',
                big: './assets/img/projects/credo/8-min.jpg'
            },
            {
                small: './assets/img/projects/credo/9-min.jpg',
                medium: './assets/img/projects/credo/9-min.jpg',
                big: './assets/img/projects/credo/9-min.jpg'
            },
            {
                small: './assets/img/projects/credo/10-min.jpg',
                medium: './assets/img/projects/credo/10-min.jpg',
                big: './assets/img/projects/credo/10-min.jpg'
            },
            {
                small: './assets/img/projects/credo/11-min.jpg',
                medium: './assets/img/projects/credo/11-min.jpg',
                big: './assets/img/projects/credo/11-min.jpg'
            },
            {
                small: './assets/img/projects/credo/12-min.jpg',
                medium: './assets/img/projects/credo/12-min.jpg',
                big: './assets/img/projects/credo/12-min.jpg'
            },
        ];
    }

}
