import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { StatGraphsComponent } from './stat-graphs/stat-graphs.component';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
   declarations: [
    DashboardComponent,
    VideoListComponent,
    VideoViewerComponent,
    StatFiltersComponent,
    StatGraphsComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
