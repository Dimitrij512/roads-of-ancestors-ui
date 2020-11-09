import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() text: string;
  @Input() max: Number = 200;
  seeMore: Boolean = false;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.text = 'Благодійний фонд "Дороги предків" дає унікальну можливість усім хто бажає приєднатися до нашої культури\n' +
        '            через навчання багатьом середньовічним ремеслам. В багатьох музеях відвідувачам надається можливість лише\n' +
        '            споглядати на витвори мистецтва та на побутові речі своїх пращурів, а ми даємо вам можливість зробити те ж\n' +
        '            саме, що робили колись наші діди-прадіди. Після того, як зі шматочка глини у ваших руках народжується\n' +
        '            справжній глиняний посуд; шматок металу стає цвяхом або підковою; солома стає прикрасою, а звичайні шматки\n' +
        '            старого одягу перетворюються на вишукану ляльку-мотанку – ви зовсім по-інакшому почнете сприймати культуру і\n' +
        '            побут своїх предків, адже ви самі зробили те, що вже стало шедевром рідної культури і стало вже вашим\n' +
        '            надбанням.\n' +
        '            Досвідчені майстри народних промислів і ремесел, проводячи майстер-клас, навчать будь-кого і будь-якого\n' +
        '            віку, хто, лише, має бажання. ' +
        'Захід для груп проводиться за попередньою домовленістю.\n' +
        '            Ми пропонуємо вам прийняти участь і навчитися наступним майстер-класам з прадавніх ремесел:';
  }

}
