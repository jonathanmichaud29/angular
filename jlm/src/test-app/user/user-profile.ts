import { Component } from "@angular/core";
import { ProfilePhoto } from "./profile-photo";

// user-profile.ts
@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}