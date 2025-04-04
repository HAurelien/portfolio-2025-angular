import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent implements OnInit {
  
  categoryList: string[] = []
  selectedCategories: string[] = []
  filteredList$: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  searchQuery: string = '';
  selectedImage: string | null = null;

  constructor(private readonly activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.categoryList = [...new Set(this.project_list.flatMap(project => project.categories))];
    this.filteredList$.next(this.project_list);
    let types : string[] = this.activatedRoute.snapshot.queryParams['type']
    if (typeof types == 'string'){
      types = [types]
    }
    if(types != null) this.selectedCategories = types
  }

  onSearchQueryChange(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.updateFilteredList();
  }

  onCategoriesChanged(selectedCategories: string[]): void {
    this.selectedCategories = selectedCategories;
    this.updateFilteredList();
  }

  updateFilteredList(): void {
    let filteredProjects : Project[] = this.project_list;

    if (this.selectedCategories.length > 0) {
      filteredProjects = this.project_list.filter(project => this.selectedCategories.every(category => project.categories.includes(category)))
    }
    if (this.searchQuery) {
      let lowercaseSearch = this.searchQuery.toLowerCase()
      filteredProjects = filteredProjects.filter(project =>
        project.name.toLowerCase().includes(lowercaseSearch) ||
        project.description.toLowerCase().includes(lowercaseSearch) ||
        project.catchphrase.toLocaleLowerCase().includes(lowercaseSearch)
      );
    }
    this.filteredList$.next(filteredProjects);
  }

  project_list : Project[] = [
    {
      name: "Mobile Business Tracking",
      collapsed: false,
      categories: ["Backend", "Phone", "Framework", "Frontend", "Mobile"],
      catchphrase: "An app to allow building caretakers to work on the ERP from their phones",
      description: "During my internship at ACG-SYNERGIES, I had the opportunity to work on this project alongside an incredible team. Thanks to our collaborative efforts and agile methodology, we were able to deliver a high-quality product all by meeting the deadlines.",
      features: [
        {
          title: "All in one place",
          description: "Display and edit a personalised set of data for every employee",
          image: "projects/SAM/sam-phone.png"
        }
      ],
      technologies: [
        {
          name:"Java",
          icon:"icons/java-logo.svg"
        },
        {
          name:"SpringBoot",
          icon:"icons/springboot-logo.svg"
        },
        {
          name: "Angular",
          icon: "icons/angular-logo.svg"
        },
      ]
    },
    {
      name: "RPG-AI",
      collapsed: false,
      categories: ["Backend", "AI", "Framework", "Frontend"],
      catchphrase: "An AI-powered tool for game masters to create amazing worlds faster than ever",
      description: "This was the final project I led during my scholarship, where I managed a team of three. Despite the complexity of the task and our limited expertise in AI, we were able to deliver a robust tool within a relatively short timeframe, overcoming the technical challenges",
      features: [
        {
          title: "Idea repository...",
          description: "Holds all your ideas and projects in an intuitive interface",
          image: "projects/rpg-ai/world-list.png"
        },
        {
          title: "And generation",
          description: "Allow personalised description for the perfect generation",
          image: "projects/rpg-ai/world-generation-menu.png"
        },
      ],
      technologies: [{
        name: "Python",
        icon: "icons/python-logo.svg"
      },
      {
        name: "Angular",
        icon: "icons/angular-logo.svg"
      },
      {
        name: "Flask",
        icon: "icons/flask-logo.svg"
      },
      {
        name: "PostgreSQL",
        icon: "icons/postgresql-logo.svg"
      },
      {
        name: "llamacpp",
        icon: "icons/llamacpp-logo.png"
      }
    ]
    },
    {
      name: "FileChat",
      collapsed: false,
      categories: ["Backend", "Framework", "Frontend"],
      catchphrase: "A chat application to help students create amazing projects toguether",
      description: "This was our first major project during my scholarship. Leading a project that spanned several months was an incredibly valuable experience. It provided me with a clear understanding of the critical importance of planning and documentation in managing a long-term project",
      features: [
        {
          title: "Authentication",
          description: "An secure authentication system with an csv import script for teachers to add all their students at once",
          image: "projects/messaging/register.png",
        },
        {
          title: "Messaging",
          description: "A chat system with the possibility to edit, remove messages and add friends",
          image: "projects/messaging/conversation_trimmed.png",
        },
        {
          title: "File storage",
        description: "A file system for students to easily manage and share their work with one another, independant in every personal or group conversation",
        image: "projects/messaging/file_trimmed.png",
      }
      ],
      technologies: [
        {
          name:"Python", 
          icon: "icons/python-logo.svg"
        }, 
        {
          name:"Django", 
          icon: "icons/django-logo.svg"
        }, 
        {
          name:"JavaScript", 
          icon: "icons/js-logo.svg"
        }, 
        {
          name:"Ajax", 
          icon: "icons/ajax-logo.svg"
        },
        {
          name: "PostgreSQL",
          icon: "icons/postgresql-logo.svg"
        }
      ]
    },
    {
      name: "Tampir Surtator",
      collapsed: false,
      categories: ["Backend", "Mobile", "Game", "Tools"],
      catchphrase: "A mobile survivor game",
      description: "This was a one-week project I developed during the final year of my scholarship. Despite the short timeframe, the experience was highly enriching, as we had the opportunity to gain valuable insights from an industry game developer, which greatly influenced our approach and the project’s outcome.",
      features: [
        {
        title: "Wave management",
        image: "projects/tampir-surtator/waves.png",
        description: "Waves of enemies the player has to go through to win the game",
      },
      {
        title: "Perks and upgrades",
        image: "projects/tampir-surtator/upgrades.png",
        description: "Different stat and gameplay upgrades to unlock to get even stronger",
      },
      ],
      technologies: [
        {
          name:"C#",
          icon: "icons/csharp-logo.svg"
        }, 
        {
          name:"Unity",
          icon: "icons/unity-logo.svg"
        },
        {
          name:"Blender",
          icon: "icons/blender-logo.svg"
        }
      ]
    }
  ]

  openModal(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeModal(): void {
    this.selectedImage = null;
  }

  toggleContent(project: any): void {
    project.collapsed = !project.collapsed;
  }
}
