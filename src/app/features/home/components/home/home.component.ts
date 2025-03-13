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

  skills : DataBlockModel[] = [
    {
      title: 'Software Development',
      description: 'My experience, mostly in OOP: from java server apps to python softwares or C# games',
      icon: 'icons/brain_cogwheel.png',
      onClick: () => {this.router.navigateByUrl("home/skills/backend")}
    },
    {
      title: 'Frontend Dev',
      description: 'My experience in developing frontend of my server apps',
      icon: 'icons/angular.png',
      onClick: () => {this.router.navigateByUrl("home/skills/frontend")}
    },
  ];

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: 'images/project1.png',
      link: 'https://github.com/HAurelien/portfolio-2025-angular',
    },
    {
      title: 'Task Manager App',
      description: 'A task management application built with Angular.',
      image: 'images/project2.jpg',
      link: 'https://github.com/your-username/task-manager',
    },
    {
      title: 'E-commerce Website',
      description: 'An e-commerce site built with Angular and Firebase.',
      image: 'images/project3.png',
      link: 'https://github.com/your-username/e-commerce',
    },
  ];
}
