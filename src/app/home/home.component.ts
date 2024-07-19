import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isContentLoading: boolean = false;
  socialMedia = [{
    imageLink: "1aYv_7mLgreOn_Ua6lFVRGxK5hPRJj-FM",
    mediaLink: "https://github.com/jawaharlalnehru1988",
    mediaName: "GitHub"
  },
  {
    imageLink: "1YDJ6WkVJwHMU7TCitsdIagXzbPYvJ0c0",
    mediaLink: "https://www.linkedin.com/in/jawaharlal-nehru-elumalai-96a64a216",
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
    PName: "Javascript Core",
    PImage: "assets/image/videojs.png",
    routerLink: "/javascript",
    intro: "Welcome to my Javascript Blog website. Here you can find some of the gym websites I have designed using TypeScript, HTML, CSS, and other technologies. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName: "Audios/Videos",
    PImage: "assets/image/podcastbanner.png",
    routerLink: "/audiovideo",
    intro:"Welcome to my podcast website. Here you can find audio tutorials I have recorded for you by which you can learn programming, that are really inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
]
staticWebData: Project[] = [
  {
    PName : "Gym website",
    PImage :  "assets/image/gym.png",
    routerLink: "/gymwebpage",
    intro:"Welcome to my gym website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Yoga website",
    PImage :  "assets/image/yoga.png",
    routerLink: "/yoga",
    intro:"Welcome to my yoga website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Shop Products",
    PImage :  "assets/image/shop.png",
    routerLink: "/productshop",
    intro:"Welcome to my Shopping website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  {
    PName : "Food website",
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
    PName : "Fashion website",
    PImage :  "assets/image/fashion.png",
    routerLink: "/fashion",
    intro:"Welcome to my fashion Product website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  },
  // {
  //   PName : "Project Studio",
  //   PImage :  "assets/image/pjstudio.png",
  //   routerLink: "/projectStudio",
  //   intro:"Welcome to my Project Studio website. Here you can find a gym website I have designed using HTML, CSS, and Bootstrap. I create gym websites that are inspiring, engaging, and functional. I hope you appreciate my work and feel free to contact me for any requests."
  // },
];
projectData: Project[] =[
  {
    PName : "Portfolio",
    PImage :  "assets/image/portfolio.png",
    routerLink: "/profile",
    intro: "Welcome to my portfolio website. I am Jawaharlal, a web developer who loves Angular. Here you can see my webpage I have created using TypeScript, HTML, CSS, and other technologies. I hope you enjoy my work and contact me for any inquiries."
  },
  // {
  //   PName: "Articles/Essays",
  //   PImage: "assets/image/article.png",
  //   routerLink: "/articles",
  //   intro: "Explore articles covering Data Structures, Algorithms, prominent Angular features, Unit Testing, Java Spring Boot REST APIs, and various other technology stacks. Dive into these topics, enjoy the read, and feel free to share your thoughts."
  // }
];
loginForm!:FormGroup;
  minValidate: boolean = false;
  patternValidata: boolean = false;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      firstName: ["", Validators.required]
    })
   }
  labelPosition = 'now';
  checked= false;
  indeterminate = false;
  beans : boolean = false;
  Carrot : boolean = false;
  Beetroot : boolean = false;
  apple : boolean = false;
  itemsq: { name: string, checked: boolean }[] = [
    { name: 'Beans', checked: false },
    { name: 'Carrot', checked: false },
    { name: 'Beet Root', checked: false },
    { name: 'Apple', checked: false },
  ];
  items: string[] = ['ram', 'krishna' , 'govinda']
  fontStyle?: string;
  isConditionTrue : boolean = true;
  items1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA',
  };

  categories = [
    {
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange'],
    },
    {
      name: 'Vegetables',
      items: ['Carrot', 'Broccoli', 'Spinach'],
    },
    {
      name: 'Dairy',
      items: ['Milk', 'Cheese', 'Yogurt'],
    },
  ];
  ngOnInit() {
    
    
    this.api.setLoginData(true);
    this.api.fetchData().subscribe(data => {
      // Handle API response
      console.log(data);
    });

    this.loginForm.get('firstName')?.valueChanges.subscribe((res: any) => {
      const resValue = res;
      console.log('resValue :', resValue);
      this.minValidate = resValue.length < 3;
      this.patternValidata = !/^[a-zA-Z\s]+$/.test(resValue);
    });
    
  }
  OnSubmit(){
   if ( this.loginForm.value) {
   console.log('this.loginForm.value :', this.loginForm.value);
    
   }
  }
  
}
