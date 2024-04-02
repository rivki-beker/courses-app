export class Course{
    constructor(
        public id: number,
        public name : string,
        public categoryId : number,
        public countOfLessons : number,
        public start: Date,
        public syllabus : string[],
        public learningWay:LearningWay,
        public lecturerId : number,
        public image : string
    ){}
}

export enum LearningWay{ frontal, Zoom }