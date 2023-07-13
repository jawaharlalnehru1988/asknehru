import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseDetails: any;
  isContentLoading: boolean = false;
  socialMedia = [{
    imageLink: "1aYv_7mLgreOn_Ua6lFVRGxK5hPRJj-FM",
    mediaLink: "https://github.com/jawaharlalnehru1988",
    mediaName: "GitHub"
  },
  {
    imageLink: "1_lpLpoIxlvkwVgj8CGALzORSzlPFpNmF",
    mediaLink: "https://www.instagram.com/invites/contact/?i=1mxqvd8i3ualr&utm_content=ln0e248",
    mediaName: "Insta Gram"
  },
  {
    imageLink: "1M5IaI5kh-Akzm16ZeMzLV7LFdigB1R4w",
    mediaLink: "https://twitter.com/Jawahar68291122?t=jXmngm4oSnVRFrqpVLKzYA&s=09",
    mediaName: "Twitter"
  },
  {
    imageLink: "12qeABCTwCFg48Jm1FLuC_d6NzqIi_CTA",
    mediaLink: "+91 63820 43976",
    mediaName: "Voice Call"
  },
  {
    imageLink: "1YDJ6WkVJwHMU7TCitsdIagXzbPYvJ0c0",
    mediaLink: "https://www.linkedin.com/in/jawaharlal-nehru-elumalai-96a64a216",
    mediaName: "LinkedIn"
  }
]
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCourse();
  }
getCourse(){
  this.isContentLoading = true;
  this.api.getCourses().subscribe({
    next: (res)=>{
      
      this.isContentLoading = false;
      this.courseDetails = res.courses;  
    },
    error: (err)=>{
      alert("database source is not found");
    }
  })
}
}
