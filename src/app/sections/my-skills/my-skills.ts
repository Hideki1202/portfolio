import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: false,
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css'
})
export class MySkills {
  selectedSkill: { name: string; description: string } = { name:"Language", description:"Language description"};

  skills = [
    { name: 'HTML', icon: 'skills/html.png', description: 'Markup language for structuring web content.' },
    { name: 'CSS', icon: 'skills/css.png', description: 'Stylesheet language for designing UI.' },
    { name: 'JavaScript', icon: 'skills/javascript.png', description: 'Language for web interactivity and logic.' },
    { name: 'TypeScript', icon: 'skills/typescript.png', description: 'Typed superset of JavaScript for scalable apps.' },
    { name: 'Flask', icon: 'skills/flask.png', description: 'Lightweight Python web framework.' },
    { name: 'NestJS', icon: 'skills/nestjs.png', description: 'Node.js framework built with TypeScript.' },
    { name: 'Spring', icon: 'skills/spring.png', description: 'Java framework for building enterprise apps.' },
    { name: 'Laravel', icon: 'skills/laravel.png', description: 'PHP framework with elegant syntax.' },
    { name: 'React', icon: 'skills/react.png', description: 'JavaScript library for building user interfaces.' },
    { name: 'Java', icon: 'skills/java.png', description: 'Object-oriented programming language.' },
    { name: 'Kotlin', icon: 'skills/kotlin.png', description: 'Modern language for Android development.' },
    { name: 'Angular', icon: 'skills/angular.png', description: 'Front-end framework by Google.' },
    { name: 'MongoDB', icon: 'skills/mongodb.png', description: 'NoSQL document-oriented database.' },
    { name: 'PostgreSQL', icon: 'skills/postgresql.png', description: 'Advanced open-source SQL database.' },
    { name: 'Docker', icon: 'skills/docker.png', description: 'Tool for containerizing applications.' },
    { name: 'Git', icon: 'skills/git.png', description: 'Version control system for tracking changes.' }
  ];

  selectSkill(index: number) {
    this.selectedSkill = this.skills[index];
  }
}
