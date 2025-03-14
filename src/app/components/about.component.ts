import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-20 bg-bg-light">
      <div class="container mx-auto px-6">
        <h2 class="section-title text-center text-text-primary">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg mb-6 text-text-primary">
              With over 15 years of experience in technology education and project management,
              I specialize in bridging the gap between technical innovation and educational excellence.
              My passion lies in developing comprehensive training programs and mentoring the next
              generation of tech leaders.
            </p>
            <p class="text-lg mb-6 text-text-primary">
              As a Project Manager, I've successfully led numerous initiatives
              that have revolutionized how organizations approach technical education and
              professional development.
            </p>
          </div>
          <div class="space-y-6">
            <div class="card border-l-4 border-accent">
              <h3 class="text-xl font-bold mb-2 text-text-primary">Vision</h3>
              <p class="text-text-secondary">Empowering individuals through innovative technology education</p>
            </div>
            <div class="card border-l-4 border-primary">
              <h3 class="text-xl font-bold mb-2 text-text-primary">Mission</h3>
              <p class="text-text-secondary">Creating accessible, impactful learning experiences that drive digital transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="vision" class="py-20 bg-bg-light">
  <div class="container mx-auto px-6">
    <h2 class="section-title text-center text-text-primary">Vision</h2>
    <p class="text-lg mb-6 text-text-primary">
      My vision is to lead high-performing teams in delivering impactful, innovative solutions that drive business success and create lasting value for clients. I aim to continuously enhance my ability to navigate complex project landscapes, embrace emerging technologies, and foster a collaborative environment where stakeholders, teams, and clients are aligned toward shared goals.
    </p>
    <p class="text-lg mb-6 text-text-primary">
      Ultimately, I strive to be a trusted leader in project delivery, known for my commitment to excellence, integrity, and the ability to turn challenges into opportunities.
    </p>
  </div>
</section>
  `
})
export class AboutComponent {}