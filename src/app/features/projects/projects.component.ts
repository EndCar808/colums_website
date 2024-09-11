import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Financial Planning',
      description:
        'Everything starts with your financial plan. Your plan incorporates everything to ensure you reach your goals. I work closely with you to create a tailored plan that aligns with your needs and adapts to your evolving financial situation, ensuring your long-term security and peace of mind.',
    },

    {
      title: 'Retirement Planning',
      description:
        'Not just pensions, retirement planning involves preparing financially for life after work by setting goals, estimating future expenses, and creating strategies to save and invest. It helps ensure a comfortable and secure retirement by providing a clear roadmap to achieving financial independence in later years. Making sure that your future is protected, and you can live a comfortable retirement needs planning.',
    },

    {
      title: 'Purpose-based Investments',
      description:
        'Investments involve allocating money into assets like stocks, bonds and/or real estate with the goal of generating returns over time. Purpose-based investments start with the end goal, ‘what is this money for?’ This process includes selecting suitable investment options based on your financial plan, your goals, need for growth, attitude to volatility, and capacity for loss. Effective investment strategies help grow wealth, diversify assets, and achieve both short-term and long-term financial objectives.',
    }

    // This is the old version of the project elemnts
    // {
    //   title: 'Attendance Android App',
    //   description:
    //     'Attendance app for teacher to track attendance of different classes by adding timetable and attendance of the student.',
    //   techList: ['Android', 'Java', 'XML', 'Firebase'],
    //   github: 'https://github.com/pravinmane1/AttendanceApp',
    //   screenshot:
    //     'https://www.radicallogix.com/assets/img/student-attendance-features.png',
    //   live: 'https://github.com/pravinmane1/AttendanceApp/',
    // },
  ];

  public visibleProjects = this.projects.slice(0, 3);

  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 3
      );
    }
  }
}
