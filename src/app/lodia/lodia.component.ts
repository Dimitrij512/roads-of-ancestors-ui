import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
    selector: 'app-lodia',
    templateUrl: './lodia.component.html',
    styleUrls: ['./lodia.component.scss']
})
export class LodiaComponent implements OnInit {
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
                small: './assets/img/projects/lodia/1.jpg',
                medium: './assets/img/projects/lodia/1.jpg',
                big: './assets/img/projects/lodia/1.jpg'
            },
            {
                small: './assets/img/projects/lodia/3.jpg',
                medium: './assets/img/projects/lodia/3.jpg',
                big: './assets/img/projects/lodia/3.jpg'
            },
            {
                small: './assets/img/projects/lodia/4.jpg',
                medium: './assets/img/projects/lodia/4.jpg',
                big: './assets/img/projects/lodia/4.jpg'
            },
            {
                small: './assets/img/projects/lodia/5.jpg',
                medium: './assets/img/projects/lodia/5.jpg',
                big: './assets/img/projects/lodia/5.jpg'
            },
            {
                small: './assets/img/projects/lodia/6.jpg',
                medium: './assets/img/projects/lodia/6.jpg',
                big: './assets/img/projects/lodia/6.jpg'
            },
            {
                small: './assets/img/projects/lodia/7.jpg',
                medium: './assets/img/projects/lodia/7.jpg',
                big: './assets/img/projects/lodia/7.jpg'
            },
            {
                small: './assets/img/projects/lodia/8.jpg',
                medium: './assets/img/projects/lodia/8.jpg',
                big: './assets/img/projects/lodia/8.jpg'
            },
            {
                small: './assets/img/projects/lodia/9.jpg',
                medium: './assets/img/projects/lodia/9.jpg',
                big: './assets/img/projects/lodia/9.jpg'
            },
            {
                small: './assets/img/projects/lodia/10.jpg',
                medium: './assets/img/projects/lodia/10.jpg',
                big: './assets/img/projects/lodia/10.jpg'
            },
            {
                small: './assets/img/projects/lodia/11.jpg',
                medium: './assets/img/projects/lodia/11.jpg',
                big: './assets/img/projects/lodia/11.jpg'
            },
            {
                small: './assets/img/projects/lodia/12.jpg',
                medium: './assets/img/projects/lodia/12.jpg',
                big: './assets/img/projects/lodia/12.jpg'
            },
            {
                small: './assets/img/projects/lodia/13.jpg',
                medium: './assets/img/projects/lodia/13.jpg',
                big: './assets/img/projects/lodia/13.jpg'
            },
            {
                small: './assets/img/projects/lodia/14.jpg',
                medium: './assets/img/projects/lodia/14.jpg',
                big: './assets/img/projects/lodia/14.jpg'
            },
        ];
    }

}
