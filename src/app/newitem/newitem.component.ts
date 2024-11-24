import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule}   from "@angular/forms";


class Item{
  constructor(public id: number, public name: string){}
}

@Component({
  selector: 'app-newitem',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newitem.component.html',
  styleUrl: './newitem.component.css'
})
export class NewitemComponent {
  @Input() userName: string = "";
  _userAge: number = 0;
  @Output() onChanged = new EventEmitter<boolean>();
  @Input()
  set userAge(age:number) {
      if(age<0)
          this._userAge=0;
      else if(age>100)
          this._userAge=100;
      else
          this._userAge = age;
}
get userAge() { return this._userAge; }

change(increased:boolean) {
    this.onChanged.emit(increased);
}
}
