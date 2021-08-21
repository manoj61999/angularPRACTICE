import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  biodata = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      age: new FormControl('',[Validators.required]),
      number:new FormControl('',[Validators.required, Validators.minLength(10)]),
      Degree:new FormControl(''),
      DateoBirth:new FormControl(''),
      gender:new FormControl(['']),
      email: new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      password2:new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      Country:new FormControl(''),
      City:new FormControl(''),
      Address:new FormControl(''),
      Designation:new FormControl(''),
      Experiance:new FormControl(''),
      COCurriculam:new FormControl(''),
      PinCode:new FormControl('')
  });
  constructor(private route: ActivatedRoute,private router: Router,private data: DataService) { }

  ngOnInit(): void {
  }
  get getControl(){
    return this.biodata.controls;
  }
 
  callFunction() {
    console.log(this.biodata.value);
    this.router.navigate(['wishlist'],{ queryParams: {
      firstName:this.biodata.value.firstName,
      lastName:this.biodata.value.lastName,
      age:this.biodata.value.age,
      Number:this.biodata.value.number,
      Degree:this.biodata.value.Degree,
      DOB:this.biodata.value.DateoBirth,
      gender:this.biodata.value.gender,

      email:this.biodata.value.email,
      password:this.biodata.value.password,
      country:this.biodata.value.country,
      City:this.biodata.value.City,
      Address:this.biodata.value.Address,

      Designation:this.biodata.value.Designation,
      Experiance:this.biodata.value.Experiance,
      COCurriculam:this.biodata.value.COCurriculam,
      PinCode:this.biodata.value.PinCode
      } });
}
addUser() {
  this.data.addUser(this.biodata).subscribe((data: {}) => {
    //this.router.navigate(['/list'])
  })
}
}
