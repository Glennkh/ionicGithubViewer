import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilesPage } from './profiles';

@NgModule({
  declarations: [
    ProfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilesPage),
  ],
  exports: [
    ProfilesPage
  ]
})
export class ProfilesPageModule {}
