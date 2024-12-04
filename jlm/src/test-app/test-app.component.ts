import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user/user-profile';

@Component({
  selector: 'app-root',
  imports: [UserProfile],
  templateUrl: './test-app.html',
  // styleUrl: '../app.component.scss'
})
export class TestAppComponent {
  title = 'jlm';
}
