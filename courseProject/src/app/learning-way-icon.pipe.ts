import { Pipe, PipeTransform } from '@angular/core';
import { LearningWay } from './entities/course.model';

@Pipe({
  name: 'learningWayIcon',
  standalone: true
})
export class LearningWayIconPipe implements PipeTransform {

  transform(value: LearningWay): string {
    if (value === LearningWay.frontal) {
      return 'frontal-icon';
    } else if (value === LearningWay.Zoom) {
      return 'zoom-icon';
    } else {
      return 'default-icon';
    }
  }
}
