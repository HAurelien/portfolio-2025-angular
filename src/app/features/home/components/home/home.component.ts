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

  
  click_contact_me(){
    this.router.navigate(["/", "contact"])
  }

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
      onClick: () => {this.router.navigate(["/skills"], {queryParams: {type: ["backend"]}})}
    },
    {
      title: 'Frontend Dev',
      description: 'My experience in developing frontend of my server apps',
      icon: 'icons/front-end.png',
      onClick: () => {this.router.navigate(["/skills"], {queryParams: {type: ["frontend"]}})}
    },
  ];

  carousel_images : { image: string, title: string, link: string }[][] =  [[    
    {
      image: "biography/games/general_games.png",
      link: "",
      title: ""
    },
    {
      image: "biography/games/galacticraft.png",
      link: "",
      title: ""
    },
    {
      image: "biography/games/ae2.png",
      link: "",
      title: ""
    },
    {
      image: "biography/games/minecraft_mod_failed.png",
      link: "",
      title: ""
    },
  ],
  [
    {
      image: "biography/softwares/rpgmakermv.png",
      link: "",
      title: ""
    },
    {
      image: "biography/softwares/sonyvegaspro14.png",
      link: "",
      title: ""
    },
    {
      image: "biography/softwares/blender.png",
      link: "",
      title: ""
    },
    {
      image: "biography/softwares/unity.png",
      link: "",
      title: ""
    },
  ],
  [
    {
      image: "biography/games/python_text_game_example.png",
      link: "",
      title: ""
    },
    {
      image: "biography/games/graven_python_tutorial.png",
      link: "",
      title: ""
    },
    {
      image: "biography/studies/iutlyon1.png",
      link: "",
      title: ""
    },
    {
      image: "biography/projects/file_full.png",
      link: "",
      title: ""
    },
  ],[
    {
      image: "biography/studies/acgsynergies.png",
      link: "",
      title: ""
    },
    {
      image: "biography/projects/world-list.png",
      link: "",
      title: ""
    },
  ],
  [
    {
      image: "biography/miscellaneous/questionmark.png",
      link: "",
      title: ""
    },
    {
      image: "biography/miscellaneous/sweden.png",
      link: "",
      title: ""
    },
  ]
]
}
