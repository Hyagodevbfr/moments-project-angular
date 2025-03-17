import { MomentService } from './../../../services/moment.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moment } from 'src/app/interfaces/moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  constructor(private momentService: MomentService) {}
  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
  }

  btnText = 'Compartilhar';
}
