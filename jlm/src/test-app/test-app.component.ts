import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { UserProfile } from './user/user-profile';
import { SwitchUser } from './user/switch-user';

@Component({
  selector: 'app-root',
  imports: [SwitchUser],
  templateUrl: './test-app.html',
  // styleUrl: '../app.component.scss'
})
export class TestAppComponent {
  title = 'jlm';
}
