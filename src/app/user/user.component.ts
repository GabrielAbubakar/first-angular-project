import { Component, signal, Input, input, Output, EventEmitter, output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>()

  // select = output<string>()
  // avatar = input.required<string>();
  // name  = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}

