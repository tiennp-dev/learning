import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { TranslateModule } from '@ngx-translate/core';
import { AdminComponent } from './layout/admin/admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// register FullCalendar plugins
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    SideBarComponent,
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    FullCalendarModule
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    AdminComponent,
    FullCalendarModule
  ]
})
export class SharedModule {

}
