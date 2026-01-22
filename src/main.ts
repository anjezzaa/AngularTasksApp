import { bootstrapApplication } from '@angular/platform-browser';

import { InjectionToken } from '@angular/core';
import { AppComponent } from './app/app.component';
import { LoggingService } from './app/logging.service';
import { TasksService } from './app/tasks/tasks-list/tasks.service';

export const TasksServiceToken = new InjectionToken<TasksService>(
    'tasks-service-token'
);

bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TasksService }],
}).catch((err) => console.error(err)
);

// bootstrapApplication(AppComponent, {providers: [LoggingService]})
//     .catch((err) => console.error(err)
// );