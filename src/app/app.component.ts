import { Component,OnInit } from '@angular/core';
//import { DatepickerOptions,  DateModel} from 'ng2-datepicker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'templateforms';
  data:any={};
  arr1:any=[];
 //item:any=[1,2,3,4,545,8];
  arr=[]

  // date:DateModel;
  // options: DatepickerOptions={
  //   format:'DD-MM-YYYY',
  //   todayText:'kjhdj',
  //   style:'big'
  // };
  // constructor(){
  //   this.options=new DatePickerOptions();
  // }
constructor(){
  
}




  onSubmit(){
   // alert(JSON.stringify(this.data))
   alert("succesfully registered");
    this.arr1.push(this.data);

  
    
    console.log(this.arr1);
   // this.arr.push(this.arr1);
   }
   ngOnInit(){
     
   }
 
 
}
