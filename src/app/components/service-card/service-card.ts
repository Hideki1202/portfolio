import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
 @Input() image: string = "services/backend.svg"
  @Input() title: string = "Backend"
  @Input() description:string = "I build robust and scalable backend solutions tailored to your business needs. With experience in frameworks, I design secure APIs, manage databases, and ensure efficient communication between systems. My goal is to deliver fast, reliable, and maintainable server-side applications."

}
