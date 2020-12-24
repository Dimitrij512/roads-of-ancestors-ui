import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
    selector: 'app-garold-elizabeth',
    templateUrl: './garold-elizabeth.component.html',
    styleUrls: ['./garold-elizabeth.component.scss']
})
export class GaroldElizabethComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryGaroldImages: NgxGalleryImage[];
    galleryElizabethImages: NgxGalleryImage[];

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

        this.galleryGaroldImages = [
            {
                small: './assets/img/projects/garold/1.jpg',
                medium: './assets/img/projects/garold/1.jpg',
                big: './assets/img/projects/garold/1.jpg'
            },
            {
                small: './assets/img/projects/garold/2.jpg',
                medium: './assets/img/projects/garold/2.jpg',
                big: './assets/img/projects/garold/2.jpg'
            },
            {
                small: './assets/img/projects/garold/4.jpg',
                medium: './assets/img/projects/garold/4.jpg',
                big: './assets/img/projects/garold/4.jpg'
            },
            {
                small: './assets/img/projects/garold/5.jpg',
                medium: './assets/img/projects/garold/5.jpg',
                big: './assets/img/projects/garold/5.jpg'
            },
            {
                small: './assets/img/projects/garold/6.jpg',
                medium: './assets/img/projects/garold/6.jpg',
                big: './assets/img/projects/garold/6.jpg'
            },
            {
                small: './assets/img/projects/garold/7.jpg',
                medium: './assets/img/projects/garold/7.jpg',
                big: './assets/img/projects/garold/7.jpg'
            },
            {
                small: './assets/img/projects/garold/8.jpg',
                medium: './assets/img/projects/garold/8.jpg',
                big: './assets/img/projects/garold/8.jpg'
            },
            {
                small: './assets/img/projects/garold/9.jpg',
                medium: './assets/img/projects/garold/9.jpg',
                big: './assets/img/projects/garold/9.jpg'
            },
            {
                small: './assets/img/projects/garold/10.jpg',
                medium: './assets/img/projects/garold/10.jpg',
                big: './assets/img/projects/garold/10.jpg'
            },
            {
                small: './assets/img/projects/garold/3.jpg',
                medium: './assets/img/projects/garold/3.jpg',
                big: './assets/img/projects/garold/3.jpg'
            },
        ];

        this.galleryElizabethImages = [
            {
                small: './assets/img/projects/elizabeth/1.jpg',
                medium: './assets/img/projects/elizabeth/1.jpg',
                big: './assets/img/projects/elizabeth/1.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/2.jpg',
                medium: './assets/img/projects/elizabeth/2.jpg',
                big: './assets/img/projects/elizabeth/2.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/4.jpg',
                medium: './assets/img/projects/elizabeth/4.jpg',
                big: './assets/img/projects/elizabeth/4.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/5.jpg',
                medium: './assets/img/projects/elizabeth/5.jpg',
                big: './assets/img/projects/elizabeth/5.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/6.jpg',
                medium: './assets/img/projects/elizabeth/6.jpg',
                big: './assets/img/projects/elizabeth/6.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/7.jpg',
                medium: './assets/img/projects/elizabeth/7.jpg',
                big: './assets/img/projects/elizabeth/7.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/8.jpg',
                medium: './assets/img/projects/elizabeth/8.jpg',
                big: './assets/img/projects/elizabeth/8.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/9.jpg',
                medium: './assets/img/projects/elizabeth/9.jpg',
                big: './assets/img/projects/elizabeth/9.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/10.jpg',
                medium: './assets/img/projects/elizabeth/10.jpg',
                big: './assets/img/projects/elizabeth/10.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/3.jpg',
                medium: './assets/img/projects/elizabeth/3.jpg',
                big: './assets/img/projects/elizabeth/3.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/11.jpg',
                medium: './assets/img/projects/elizabeth/11.jpg',
                big: './assets/img/projects/elizabeth/11.jpg'
            },
            {
                small: './assets/img/projects/elizabeth/12.jpg',
                medium: './assets/img/projects/elizabeth/12.jpg',
                big: './assets/img/projects/elizabeth/12.jpg'
            }
        ];
    }

}
