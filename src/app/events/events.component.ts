import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    galleryBuildConstruction: NgxGalleryImage[];
    galleryWalkByRiver: NgxGalleryImage[];
    galleryTravelByRiver: NgxGalleryImage[];
    galleryWalkByAncientBoat: NgxGalleryImage[];
    @Input() text: string;
    @Input() max = 200;
    seeMore = false;

  constructor() { }

  ngOnInit() {
    this.text = 'Благодійний фонд "Дороги предків" дає унікальну можливість усім хто бажає приєднатися до нашої культури,\n' +
        '            зробити це через навчання середньовічним ремеслам. В багатьох музеях відвідувачам надається можливість лише\n' +
        '            споглядати на витвори мистецтва та на побутові речі пращурів, а ми даємо можливість зробити те ж\n' +
        '            саме, що робили колись наші діди-прадіди. Після того, як зі шматочка глини у ваших руках народжується\n' +
        '            справжній глиняний посуд; шматок металу стає цвяхом або підковою; солома стає прикрасою, а звичайні шматки\n' +
        '            старого одягу перетворюються на вишукану ляльку-мотанку – ви зовсім по-іншому почнете сприймати культуру і\n' +
        '            побут своїх предків, адже самі зробили те, що вже стало шедевром рідної культури. \n' +
        '            Досвідчені майстри народних промислів і ремесел, проводячи майстер-клас, навчать будь-кого і будь-якого\n' +
        '            віку, хто лише має бажання, так само майстерно працювати у ремеслі. ' +
        'Захід для груп проводиться за попередньою домовленістю. У нас ви зможете здобути навички таких ремесел як:\n'

     this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },

            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },

            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: './assets/img/projects/hand-made/1.jpg',
                medium: './assets/img/projects/hand-made/1.jpg',
                big: './assets/img/projects/hand-made/1.jpg'
            },
            {
                small: './assets/img/projects/hand-made/2.jpg',
                medium: './assets/img/projects/hand-made/2.jpg',
                big: './assets/img/projects/hand-made/2.jpg'
            },
            {
                small: './assets/img/projects/hand-made/3.jpg',
                medium: './assets/img/projects/hand-made/3.jpg',
                big: './assets/img/projects/hand-made/3.jpg'
            },
            {
                small: './assets/img/projects/hand-made/4.jpg',
                medium: './assets/img/projects/hand-made/4.jpg',
                big: './assets/img/projects/hand-made/4.jpg'
            },
            {
                small: './assets/img/projects/hand-made/5.jpg',
                medium: './assets/img/projects/hand-made/5.jpg',
                big: './assets/img/projects/hand-made/5.jpg'
            },
            {
                small: './assets/img/projects/hand-made/6.jpg',
                medium: './assets/img/projects/hand-made/6.jpg',
                big: './assets/img/projects/hand-made/6.jpg'
            },
            {
                small: './assets/img/projects/hand-made/7.png',
                medium: './assets/img/projects/hand-made/7.png',
                big: './assets/img/projects/hand-made/7.png'
            },
            {
                small: './assets/img/projects/hand-made/8.jpg',
                medium: './assets/img/projects/hand-made/8.jpg',
                big: './assets/img/projects/hand-made/8.jpg'
            },
            {
                small: './assets/img/projects/hand-made/9.jpg',
                medium: './assets/img/projects/hand-made/9.jpg',
                big: './assets/img/projects/hand-made/9.jpg'
            },
            {
                small: './assets/img/projects/hand-made/10.jpg',
                medium: './assets/img/projects/hand-made/10.jpg',
                big: './assets/img/projects/hand-made/10.jpg'
            }
        ];

      this.galleryBuildConstruction = [
          {
              small: './assets/img/events/construction/1.jpg',
              medium: './assets/img/events/construction/1.jpg',
              big: './assets/img/events/construction/1.jpg'
          },
          {
              small: './assets/img/events/construction/2.jpg',
              medium: './assets/img/events/construction/2.jpg',
              big: './assets/img/events/construction/2.jpg'
          },
          {
              small: './assets/img/events/construction/3.jpg',
              medium: './assets/img/events/construction/3.jpg',
              big: './assets/img/events/construction/3.jpg'
          },
          {
              small: './assets/img/events/construction/4.jpg',
              medium: './assets/img/events/construction/4.jpg',
              big: './assets/img/events/construction/4.jpg'
          },
          {
              small: './assets/img/events/construction/5.jpg',
              medium: './assets/img/events/construction/5.jpg',
              big: './assets/img/events/construction/5.jpg'
          },
          {
              small: './assets/img/events/construction/6.jpg',
              medium: './assets/img/events/construction/6.jpg',
              big: './assets/img/events/construction/6.jpg'
          },
          {
              small: './assets/img/events/construction/7.jpg',
              medium: './assets/img/events/construction/7.jpg',
              big: './assets/img/events/construction/7.jpg'
          },
          {
              small: './assets/img/events/construction/8.jpg',
              medium: './assets/img/events/construction/8.jpg',
              big: './assets/img/events/construction/8.jpg'
          }
      ];
      this.galleryWalkByRiver = [
          {
              small: './assets/img/events/walkByRiver/1.jpg',
              medium: './assets/img/events/walkByRiver/1.jpg',
              big: './assets/img/events/walkByRiver/1.jpg'
          },
          {
              small: './assets/img/events/walkByRiver/2.jpg',
              medium: './assets/img/events/walkByRiver/2.jpg',
              big: './assets/img/events/walkByRiver/2.jpg'
          },
          {
              small: './assets/img/events/walkByRiver/3.jpg',
              medium: './assets/img/events/walkByRiver/3.jpg',
              big: './assets/img/events/walkByRiver/3.jpg'
          },
          {
              small: './assets/img/events/walkByRiver/4.jpg',
              medium: './assets/img/events/walkByRiver/4.jpg',
              big: './assets/img/events/walkByRiver/4.jpg'
          },
          {
              small: './assets/img/events/walkByRiver/5.jpg',
              medium: './assets/img/events/walkByRiver/5.jpg',
              big: './assets/img/events/walkByRiver/5.jpg'
          },
          {
              small: './assets/img/events/walkByRiver/6.jpg',
              medium: './assets/img/events/walkByRiver/6.jpg',
              big: './assets/img/events/walkByRiver/6.jpg'
          }
      ];

      this.galleryTravelByRiver = [
          {
              small: './assets/img/events/travelByRiver/1.jpg',
              medium: './assets/img/events/travelByRiver/1.jpg',
              big: './assets/img/events/travelByRiver/1.jpg'
          },
          {
              small: './assets/img/events/travelByRiver/2.jpg',
              medium: './assets/img/events/travelByRiver/2.jpg',
              big: './assets/img/events/travelByRiver/2.jpg'
          },
          {
              small: './assets/img/events/travelByRiver/3.jpg',
              medium: './assets/img/events/travelByRiver/3.jpg',
              big: './assets/img/events/travelByRiver/3.jpg'
          },
          {
              small: './assets/img/events/travelByRiver/4.jpg',
              medium: './assets/img/events/travelByRiver/4.jpg',
              big: './assets/img/events/travelByRiver/4.jpg'
          },
          {
              small: './assets/img/events/travelByRiver/5.jpg',
              medium: './assets/img/events/travelByRiver/5.jpg',
              big: './assets/img/events/travelByRiver/5.jpg'
          },
          {
              small: './assets/img/events/travelByRiver/6.jpg',
              medium: './assets/img/events/travelByRiver/6.jpg',
              big: './assets/img/events/travelByRiver/6.jpg'
          }
      ];
      this.galleryWalkByAncientBoat = [
          {
              small: './assets/img/events/walkByAncientBoat/1.jpg',
              medium: './assets/img/events/walkByAncientBoat/1.jpg',
              big: './assets/img/events/walkByAncientBoat/1.jpg'
          },
          {
              small: './assets/img/events/walkByAncientBoat/2.jpg',
              medium: './assets/img/events/walkByAncientBoat/2.jpg',
              big: './assets/img/events/walkByAncientBoat/2.jpg'
          },
          {
              small: './assets/img/events/walkByAncientBoat/3.jpg',
              medium: './assets/img/events/walkByAncientBoat/3.jpg',
              big: './assets/img/events/walkByAncientBoat/3.jpg'
          },
          {
              small: './assets/img/events/walkByAncientBoat/4.jpg',
              medium: './assets/img/events/walkByAncientBoat/4.jpg',
              big: './assets/img/events/walkByAncientBoat/4.jpg'
          }
      ];
  }

}
