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
    { name: 'HTML', icon: 'skills/html.png', description: 'A markup language used to structure content on the web, forming the backbone of web pages.' },
    { name: 'CSS', icon: 'skills/css.png', description: 'A stylesheet language used to control layout, colors, fonts, and the visual appearance of web pages.' },
    { name: 'JavaScript', icon: 'skills/javascript.png', description: 'A dynamic programming language used to create interactive and responsive web applications.' },
    { name: 'TypeScript', icon: 'skills/typescript.png', description: 'A typed superset of JavaScript that enables scalable and maintainable web application development.' },
    { name: 'Flask', icon: 'skills/flask.png', description: 'A lightweight Python web framework ideal for small to medium web applications.' },
    { name: 'NestJS', icon: 'skills/nestjs.png', description: 'A scalable Node.js framework built with TypeScript for building efficient backend systems.' },
    { name: 'Spring', icon: 'skills/spring.png', description: 'A robust Java framework for building enterprise-level applications and APIs.' },
    { name: 'Laravel', icon: 'skills/laravel.png', description: 'A modern PHP framework offering an elegant syntax and tools for web application development.' },
    { name: 'React', icon: 'skills/react.png', description: 'A JavaScript library for building fast, dynamic user interfaces, maintained by Facebook.' },
    { name: 'Java', icon: 'skills/java.png', description: 'A versatile language used in enterprise systems and widely adopted for Android mobile development.' },
    { name: 'Kotlin', icon: 'skills/kotlin.png', description: 'A modern, expressive programming language used primarily for Android development and fully interoperable with Java.' },
    { name: 'Angular', icon: 'skills/angular.png', description: 'A front-end framework powered by TypeScript for building single-page applications, developed by Google.' },
    { name: 'MongoDB', icon: 'skills/mongodb.png', description: 'A NoSQL database that stores data in flexible, JSON-like documents.' },
    { name: 'PostgreSQL', icon: 'skills/postgresql.png', description: 'An open-source SQL database known for reliability, scalability, and standards compliance.' },
    { name: 'Docker', icon: 'skills/docker.png', description: 'A containerization tool that enables consistent environments for application development and deployment.' },
    { name: 'Git', icon: 'skills/git.png', description: 'A distributed version control system used to manage source code history and collaboration.' }
  ];

  
  selectSkill(index: number) {
    this.selectedSkill = this.skills[index];
  }
}
