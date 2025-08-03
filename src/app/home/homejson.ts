export interface Project {
    PName: string;
    routerLink : string;
    PImage: string;
    intro: string;
  }
  
  export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
export class Homejson {
    socialMedia = [{
        imageLink: "1aYv_7mLgreOn_Ua6lFVRGxK5hPRJj-FM",
        mediaLink: "https://github.com/jawaharlalnehru1988",
        mediaName: "GitHub"
      }, 
      {
        imageLink: "1YDJ6WkVJwHMU7TCitsdIagXzbPYvJ0c0",
        mediaLink: "https://www.linkedin.com/in/jawaharlal-nehru-elumalai",
        mediaName: "LinkedIn"
      },
      {
        imageLink: "1OCMRBlx6X_FwUw2iHAC9bRjvwdfp2Uko",
        mediaLink: "+91 6382043976",
        mediaName: "Whatsapp"
      },
      {
        imageLink: "1M5IaI5kh-Akzm16ZeMzLV7LFdigB1R4w",
        mediaLink: "https://twitter.com/Jawahar58240946",
        mediaName: "Twitter"
      },
      {
        imageLink: "12qeABCTwCFg48Jm1FLuC_d6NzqIi_CTA",
        mediaLink: "+91 63820 43976",
        mediaName: "+91 63820 43976"
      },
    ];
    
    blogArticleData: Project[] = [
        {
            PName: "CSS Shapes and Layouts",
            PImage: "assets/image/css.png",
            routerLink: "/css",
            intro: "Learn CSS's Layouts, Animations and Shapes"
        },
        {
            PName: "Javascript Concepts",
            PImage: "assets/image/javascript.png",
            routerLink: "/jsconcepts",
            intro: "Watch and learn javascript concepts"
        },
        {
            PName: "TS zero to hero",
            PImage: "assets/image/ts.png",
            routerLink: "/typescript",
            intro: "Learn TS to be a good developer"
        },
        {
            PName: "Angular Blogs",
            PImage: "assets/image/angular.png",
            routerLink: "/angular-demystified",
            intro: "Core topics in Angular"
        },
        {
            PName: "Rxjs Masterclass",
            PImage: "assets/image/rxjs.png",
            routerLink: "/rxjs",
            intro: "Watch and learn Rxjs"
        },
        {
            PName: "Jasmine Framework with Karma",
            PImage: "assets/image/jasmine.png",
            routerLink: "/jasmine",
            intro: "Learn how to write test cases"
        },
        {
            PName: "Java Core and DSA",
            PImage: "assets/image/java.png",
            routerLink: "/java",
            intro: "Master Java's Core and DSA"
        },
        {
            PName: "Spring Boot",
            PImage: "assets/image/springboot.png",
            routerLink: "/springboot",
            intro: "Learn Spring Boot's In-depth concepts"
        },
        {
            PName: "SQL",
            PImage: "assets/image/sql.png",
            routerLink: "/sql",
            intro: "Learn SQL's commands and concepts"
        },
        {
            PName: "Git and Github",
            PImage: "assets/image/git.png",
            routerLink: "/git",
            intro: "Learn Git and Github"
        },
        {
            PName: "Soft Skill Podcast",
            PImage: "assets/image/podcastbanner.png",
            routerLink: "/spotify",
            intro: "Hear and learn Softskills"
        },
        {
            PName: "React",
            PImage: "assets/image/react.png",
            routerLink: "/react",
            intro: "Master React's core concepts"
        },
        {
            PName: "LLM Engineering Road Map",
            PImage: "https://res.cloudinary.com/dbmkctsda/image/upload/v1754196646/0_zUGGFYAUKtzUmBJ7_nhp96h.jpg",
            routerLink: "/llm",
            intro: "Zero to Hero Master Guidance"
        }

    ]
    staticWebsites: Project[] = [
      {
        PName : "Gym",
        PImage :  "assets/image/gym.png",
        routerLink: "/gymwebpage",
        intro:"Welcome to my gym website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
      },
      {
        PName : "Yoga",
        PImage :  "assets/image/yoga.png",
        routerLink: "/yoga",
        intro:"Welcome to my yoga website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
      },
      {
        PName : "Shop",
        PImage :  "assets/image/shop.png",
        routerLink: "/productshop",
        intro:"Welcome to my Shopping website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
      },
      {
        PName : "Food",
        PImage :  "assets/image/food.png",
        routerLink: "/food",
        intro:"Welcome to my food website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
      },
      {
        PName : "Tech Expert",
        PImage :  "assets/image/tecxprt.png",
        routerLink: "/techexpert",
        intro:"Welcome to my Tech Expert website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
      },
      {
        PName : "Fashion",
        PImage :  "assets/image/fashion.png",
        routerLink: "/fashion",
        intro:"Welcome to my fashion Product website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
      },
     
    ];
    
    
    
    techStacks = {
      rebit: [
        {imgsrc: "assets/image/angular.png", techName: "Angular 16+" },
        {imgsrc: "assets/image/jasmine.png", techName: "Jasmine" },
        {imgsrc: "assets/image/karma.png", techName: "Karma" },
        {imgsrc: "assets/image/oracledb.png", techName: "Oracle DB" },
        {imgsrc: "assets/image/sql.png", techName: "SQL" },
        {imgsrc: "assets/image/agile.png", techName: "Agile Workflow" },
      ]
    }
    projects = {
      rebit: [
        {pjtName: "MDMS", pjtDetails: "This Application is meant to maintain master datas which will be available for all other applications ReBIT. Here I developed new modules to manage Resilience alerts and maintained other modules for feature enhancements"},
        {pjtName: "EFD-MIS Report", pjtDetails: "This application generates MIS - reports based on data given in the forms. I have helped in Developing complex forms with form arrays of reactive form modules"},
        {pjtName: "NGCB-GPX", pjtDetails: "In this application I have integrated APIs and developed CBDT flow with complex functionalities."},
      ]
    }
    webTechs: string[] =["Gym", "Yoga", "Shop", "Food", "Tech Expert", "Fashion"];
}