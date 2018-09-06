import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(form){
    let formdata = new FormData();
    formdata.append("name",form.value.name);
    formdata.append("email",form.value.email);
    formdata.append("password",form.value.password);
    this._authService.register(formdata).subscribe(res =>{
      
      if(res.ok == true)
     {
      Swal({
        position: 'center',
        type: 'success',
        title: 'Successfully Registered',
        showConfirmButton: false,
        timer: 1500
      })
       let token=res.json().token
       let user=res.json().user.data
      
       this._router.navigate(['/auth/login']);
    }
    else{
      Swal({
        position: 'center',
        type: 'warning',
        title: res.json().error,
        showConfirmButton: false,
        timer: 1500
      })
    }
    },
    error =>{
      Swal({
        position: 'center',
        type: 'warning',
        title: error.json().error,
        showConfirmButton: false,
        timer: 1500
      })
    }
    
  );
    
  }
  

}
