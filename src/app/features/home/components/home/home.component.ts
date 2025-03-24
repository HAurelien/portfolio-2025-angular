import { Component } from '@angular/core';
import { DataBlockModel } from '../../../../shared/models/data-block.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private readonly router: Router){}

  backgroundImageUrl = "images/background_home.jpg"

  words: any[] = [
    { text: 'C++', value: 35 },
    { text: 'C#', value: 30 },
    { text: 'C', value: 25 },
    { text: 'Python', value: 40 },
    { text: 'Java', value: 40 },
    { text: 'Kotlin', value: 35 },
    { text: 'SQL', value: 35 },
    { text: 'TypeScript', value: 25 },

    { text: 'AI', value: 30 },
    { text: 'Angular', value: 25 },
    { text: 'SpringBoot', value: 35 },
    { text: 'Django', value: 20 },

    { text: 'Curiosity', value: 40 },
    { text: 'Communication', value: 35 },
    { text: 'Adaptable', value: 35 },
    { text: 'Passion', value: 40 },
    { text: 'Resilience', value: 30 },
    { text: 'Patience', value: 30},
    { text: 'Responsibility', value: 30},

    { text: 'Agile', value: 30 }, 
    { text: 'Collaboration', value: 30 }, 
    { text: 'Problem-Solving', value: 30 }, 
    { text: 'Leadership', value: 30 }, 
    { text: 'Time Management', value: 25 }, 

    { text: 'Jira', value: 25 },
    { text: 'Git', value: 25 },
    { text: 'Unity', value: 20 },
    { text: 'Blender', value: 20 },
  ];

  skills : DataBlockModel[] = [
    {
      title: 'Software Development',
      description: 'My experience, mostly in OOP: from java server apps to python softwares or C# games',
      icon: 'icons/brain_cogwheel.png',
      onClick: () => {this.router.navigate(["/home", "skills"], {queryParams: {type: ["backend"]}})}
    },
    {
      title: 'Frontend Dev',
      description: 'My experience in developing frontend of my server apps',
      icon: 'icons/front-end.png',
      onClick: () => {this.router.navigate(["/home", "skills"], {queryParams: {type: ["frontend"]}})}
    },
  ];
}
