import { NgOptimizedImage, CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Financial Planning',
      description:
        'Everything starts with your financial plan. Your plan incorporates everything to ensure you reach your goals. I work closely with you to create a tailored plan that aligns with your needs and adapts to your evolving financial situation, ensuring your long-term security and peace of mind.',
      extraInfo:
      "Test Info."
    },

    {
      title: 'Purpose-based Investments',
      description:
        'Investments involve allocating money into assets like stocks, bonds and/or real estate with the goal of generating returns over time. Purpose-based investments start with the end goal, ‘what is this money for?’ This process includes selecting suitable investment options based on your financial plan, your goals, need for growth, attitude to volatility, and capacity for loss. Effective investment strategies help grow wealth, diversify assets, and achieve both short-term and long-term financial objectives.',
    },

    {
      title: 'Retirement Planning',
      description:
        'Not just pensions, retirement planning involves preparing financially for life after work by setting goals, estimating future expenses, and creating strategies to save and invest. It helps ensure a comfortable and secure retirement by providing a clear roadmap to achieving financial independence in later years. Making sure that your future is protected, and you can live a comfortable retirement needs planning.',
    },

    { 
      title: 'Regular Savings Investments',
      description: 'Children’s education costs, deposit for a house, wedding costs, renovations; all things we might potential save for throughout our lives. Regular savings investments involve consistently putting money into savings or investment accounts. By making steady, periodic contributions, you can build wealth over time and take advantage of compound interest. This approach helps you reach your financial goals gradually and improves your overall financial stability.',
    },

    { 
      title: 'Life Insurance ',
      description: 'Life insurance provides crucial financial protection for you and your loved ones in the event of an unexpected passing, illness or being unable to work. Tailored policies are available to meet specific needs, ensuring financial security with coverage for living expenses, debts, and other obligations providing lasting peace of mind.',
    },

    { 
      title: 'Personal Tax Planning',
      description: 'Personal tax planning involves strategising to minimise tax liabilities and optimise tax efficiency for individuals. It includes analysing financial situations, identifying tax-saving opportunities, and implementing strategies to ensure compliance while maximising deductions and credits.',
    },

    { 
      title: 'Estate Planning',
      description: "Estate planning involves organising and managing the distribution of assets after one's passing. It includes creating wills, trusts, and other legal documents to ensure that assets are transferred according to one's wishes. A key aspect of estate planning is minimising inheritance taxes and other associated costs. By employing strategies such as tax-efficient trusts and strategic asset distribution, it is possible to reduce the tax burden on beneficiaries and maximise the value of the estate that is passed on.",
    },

    { 
      title: 'Business Exit Strategies',
      description: 'Business exit strategies involve planning and executing a well-defined approach for transitioning out of a business. This includes preparing for the sale, transfer, or closure of the business, with a focus on maximising value, minimising tax implications, and ensuring a smooth transition. Effective exit strategies help business owners achieve their financial and personal goals while preserving the continuity and success of the business.',
    },

    { 
      title: 'Accounting and Auditing',
      description: "Accounting and auditing services involve managing financial records and ensuring accuracy and compliance. Accounting includes tracking, recording, and analysing financial transactions to provide a clear picture of a business's financial health. Auditing involves examining these records and financial statements to verify their accuracy and adherence to regulations. Together, these services help ensure transparency, identify potential issues, and support informed financial decision-making.",
    },

    { 
      title: 'Trust Planning',
      description: 'Trust planning involves creating and managing trusts to protect and efficiently distribute assets according to one’s wishes. It includes establishing legal structures that help manage, preserve, and transfer wealth while minimising taxes and avoiding probate. Effective trust planning ensures that assets are allocated according to specific goals and provides financial security for beneficiaries.',
    },

    { 
    title: ' Wills',
      description: "Wills are legal documents that outline how an individual's assets and estate should be distributed upon their death. They provide clear instructions for the allocation of property, appoint executors to manage the estate, and designate guardians for dependents. A well-drafted will ensures that an individual’s wishes are carried out, helps avoid potential disputes, and simplifies the estate settlement process.",
    },

    { 
      title: 'Foreign Exchange',
      description: 'Foreign exchange refers to the process of converting one currency into another, which can be crucial for international transactions and investments. Effective foreign exchange management helps individuals and businesses optimise currency exchange rates, manage currency risk, and enhance financial planning. For many expatriates, you can minimise costs, protect against market fluctuations, and improve overall financial outcomes when sending money overseas.',
    },

    { 
      title: 'Property Investments',
      description: 'Property investments involve purchasing real estate to generate income or achieve capital growth. This can include buying residential, commercial, or rental properties with the aim of earning rental income or benefiting from property value appreciation. Effective property investment strategies help build wealth, diversify portfolios, and achieve long-term financial goals through real estate. A mortgage can be used for leveraging for further growth.',
    },
    
    //---------------------------- Ignoring these for now
    // { 
    //   title: 'Critical Illness Cover',
    //   description: 'Critical illness cover is insurance that provides financial support if you are diagnosed with a serious illness covered by the policy. It offers a lump sum payment to help with medical costs, living expenses, or other financial needs during a challenging time. This coverage helps ease the financial burden and provides peace of mind when facing major health issues.',
    // },

    // { 
    // title: ' Income protection',
    //   description: 'Income protection insurance provides financial support if you are unable to work due to illness or injury. It offers a regular income to cover essential expenses and maintain your standard of living while you’re unable to earn. This coverage helps ensure financial stability during periods of temporary or long-term disability.',
    // },

    // { 
    //   title: 'Key Person Insurance',
    //   description: 'Key person insurance provides financial protection for a business in the event that a crucial employee, such as a founder or top executive, becomes unable to work due to illness or death. It offers a payout to help cover the costs of hiring a replacement, compensating for lost revenue, and managing other financial impacts. This coverage helps stabilize the business during challenging times and ensures continuity.',
    // },

    // { 
    //   title: 'Children’s education planning',
    //   description: 'Children’s education planning involves setting aside funds and creating strategies to cover future education expenses. It includes saving for tuition, books, and other related costs through dedicated savings accounts or investment plans. Effective education planning helps ensure that you can provide financial support for your children’s academic goals and secure their educational future.',
    // },

    // { 
    //   title: 'Corporate Services',
    //   description: 'Corporate services encompass a range of professional solutions designed to support and manage business operations. These services include company formation, governance, compliance, and advisory on corporate strategy. They aim to streamline business processes, ensure regulatory adherence, and enhance overall operational efficiency.',
    // },




    // { 
    //   title: 'Risk Management',
    //   description: 'Risk management involves identifying, assessing, and addressing potential financial risks to protect assets and ensure stability. This includes implementing strategies to mitigate risks related to investments, insurance, and business operations. Effective risk management helps safeguard against unexpected events and uncertainties, ensuring a more secure financial future.',
    // },

    // { 
    //   title: 'Financial Consulting ',
    //   description: 'Financial consulting involves providing expert advice and strategies to help individuals and businesses manage their finances effectively. It includes analysing financial situations, developing customised plans, and offering guidance on investments, budgeting, and financial decision-making to achieve specific financial goals.',
    // },




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

  // Array that tracks if project has been clicked on i.e., expanded
  public expanded: boolean[] = this.projects.map(() => false);
  // Function to toggle/expend for the extra information
  toggleExtraInfo(index: number) {
    this.expanded[index] = !this.expanded[index];
  }
  


  // For displaying only 4 projects at a time and for showing more if button clicked
  public visibleProjects = this.projects.slice(0, 4);
  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 4
      );
    }
  }
}
