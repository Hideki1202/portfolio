import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  servicesList = [
    {
      title: "FrontEnd",
      description: "I craft engaging and responsive user interfaces that bring ideas to life. Using technologies like Angular, React, and TypeScript, I focus on building intuitive, accessible, and high-performance interfaces that enhance the user experience and align with your brand’s identity.",
      image: "services/frontend.png"
    },
    {
      title: "BackEnd",
      description: "I build robust and scalable backend solutions tailored to your business needs. With experience in frameworks, I design secure APIs, manage databases, and ensure efficient communication between systems. My goal is to deliver fast, reliable, and maintainable server-side applications.",
      image: "services/backend.svg"
    },
    {
      title: "Mobile",
      description: "I develop native and cross-platform mobile applications with clean architecture and modern design. Specializing in Android with Kotlin and Java, I deliver apps that are optimized for performance, usability, and seamless user interaction on mobile devices.",
      image: "services/mobile.png"
    },
  ]
}
