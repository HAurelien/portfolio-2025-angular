import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss'
})
export class BiographyComponent {

  constructor(private readonly router : Router){}
  
  click_contact_me(){
    this.router.navigate(["/", "contact"])
  }

  carouselImages : { image: string, title: string, link: string }[][] =  [[    
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
