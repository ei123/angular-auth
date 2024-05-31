import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})

export class SignUpComponent implements OnInit {

  imgSrc: any = './assets/cherry.jpg';
  selectedImg: any;
  userPhoto: any;
  signUpForm! : FormGroup;
  //FormGroup : any;

  constructor(public authService: AuthService){

    this.imgSrc = this.userPhoto.postImgPath;
  }

  ngOnInit(): void {
    // this.signUpForm = new FormGroup ({
    //   email: new FormControl(null, [Validators.required]),
    //   password: new FormControl(null, [Validators.required, Validators.email]),
    //   username: new FormControl(null, [Validators.required]),
    //   userphoto: new FormControl(null, [Validators.required])
    // });
  }

  get fc() {
    return this.userPhoto.controls;
  }

  onSubmit(): void {
    console.log(this.signUpForm.value);
  }

  SignUp(){
    this.signUpForm = new FormGroup ({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      userphoto: new FormControl(null, [Validators.required])
    });

  }
  // $event -> event obj
  showPreview ($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    }  //;
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

}
