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
              With a strong background in project management, operations, and team leadership, I am dedicated to driving successful project execution and operational efficiency. My expertise in planning and delivering complex projects has enabled me to consistently meet deadlines, stay within scope, and align efforts with overarching business goals.
            </p>
            <p class="text-lg mb-6 text-text-primary">
              I have led diverse teams by offering clear strategic guidance in different industries, while fostering a culture of responsibility, collaboration, and continuous growth. I believe that careful planning and collaboration for success are critical to achieving optimal results. By working together across teams, we develop and implement efficient workflows, streamline processes, and manage resources to drive success across multiple projects. I excel at overcoming challenges in high-pressure environments, managing risks, and maintaining proactive communication with stakeholders at all levels.
            </p>
            <p class="text-lg mb-6 text-text-primary">
              Prioritizing client satisfaction, I focus on delivering results that not only meet but exceed expectations, ensuring alignment with client needs and business objectives. I have also overseen recruitment, training, and development efforts to ensure teams are equipped with the right skills for successful project outcomes and sustained high performance.
            </p>
            <p class="text-lg mb-6 text-text-primary">
              I am committed to fostering strong, high-performing teams, driving ongoing improvements, and achieving excellence in every aspect of project execution and organizational transformational efficiency. My leadership philosophy centers on empowering teams, aligning goals with business priorities, and delivering meaningful value to clients and stakeholders through effective planning and collaboration.
            </p>
          </div>
          <div class="space-y-8">
            <div class="card border-l-4 border-accent">
              <h3 class="text-xl font-bold mb-2 text-text-primary">Vision</h3>
              <p class="text-lg mb-6 text-text-primary">
    My vision is to lead high-performing teams in delivering impactful, innovative solutions that drive business success and create lasting value for clients. I aim to continuously enhance my ability to navigate complex project landscapes, embrace emerging technologies, and foster a collaborative environment where stakeholders, teams, and clients are aligned toward shared goals.
    </p>
    <p class="text-lg mb-6 text-text-primary">
    Ultimately, I strive to be a trusted leader in project delivery, known for my commitment to excellence, integrity, and the ability to turn challenges into opportunities.
    </p>
            </div>
            <div class="card border-l-4 border-primary">
              <h3 class="text-xl font-bold mb-2 text-text-primary">Mission</h3>
  <p class="text-lg mb-6 text-text-primary">
     My mission as a is to ensure the successful and efficient delivery of projects by leveraging my expertise in project management, clear communication, and collaborative leadership. I am dedicated to driving projects forward by aligning teams with client goals, managing resources effectively, and mitigating risks.
    </p>
    <p class="text-lg mb-6 text-text-primary">
      By fostering a culture of continuous improvement and delivering exceptional results, I aim to consistently exceed client expectations and contribute to the growth and success of the organizations I work with
    </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
