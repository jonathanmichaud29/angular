import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
import { TestAppComponent } from './test-app/test-app.component';
import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(AppComponent, config);
const bootstrap = () => bootstrapApplication(TestAppComponent, config);

export default bootstrap;
