import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  skills = [
    { name: 'Angular', logo: 'images/angular-logo.png' },
    { name: 'TypeScript', logo: 'images/typescript-logo.png' },
    { name: 'JavaScript', logo: 'images/javascript-logo.png' },
    { name: 'CSS', logo: 'images/css-logo.png' },
    { name: 'Git', logo: 'images/git-logo.png' },
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
