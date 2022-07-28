import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/model/User';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private service: UserServiceService, private router: Router) {
    this.createForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  user: User = new User();

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
      username: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(16) ]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]),
    });
  }
  guardarUsuario() {
    if (this.createForm.valid) {
      this.service.createUser(this.user)
        .subscribe(data => {
          alert("Usuario creado correctamente");
          this.router.navigate(['/login']);
        })
    } else {
      alert("Formulario invalido");
    }

  }

  
  get name() { return this.createForm.get('nombre'); }
  get apellido() { return this.createForm.get('apellido'); }
  get username() { return this.createForm.get('username'); }
  get password() { return this.createForm.get('password'); }

}
