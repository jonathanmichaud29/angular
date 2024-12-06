import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { TestAppComponent } from './test-app/test-app.component';

bootstrapApplication(TestAppComponent, appConfig)
  .catch((err) => console.error(err));
