import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-unsaved-changes',
  templateUrl: './unsaved-changes.page.html',
  styleUrls: ['./unsaved-changes.page.scss'],
})
export class UnsavedChangesPage {
  formLib: { myForm: FormGroup };
  formJson = { isUploaded: false };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {
    this.formLib = {
      myForm: this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
    };
  }

  async canPageLeave(){
    if (this.formLib && !this.formLib?.myForm.pristine) {
      const alert = await this.alertController.create({
        header: 'Save Data?',
        message: 'You have unsaved data, would you like to save it before exiting?',
        buttons: [
          {
            text: "Don't Save",
            cssClass: 'secondary-button',
            role: 'exit',
            handler: () => {
              this.navCtrl.back();
            }
          },
          {
            text: 'Save',
            cssClass: 'primary-button',
            role: 'cancel',
            handler: () => {
              this.updateProfile();
            }
          }
        ]
      });
  
      await alert.present();
      return false; // Prevent immediate navigation until a decision is made in the alert
    } else {
      // If the form is pristine, go back directly
      this.navCtrl.back();
      return true;
    }
  }
  

  updateProfile() {
    if (this.formLib?.myForm.valid) {
      console.log('Profile data saved:', this.formLib.myForm.value);
      this.formLib?.myForm.markAsPristine();  // Mark form as pristine after saving
    }
  }
}