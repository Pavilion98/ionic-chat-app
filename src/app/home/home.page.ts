// import { Component, OnInit } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// import { ToastController } from '@ionic/angular';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   message = '';
//   messages = [];
//   currentUser = '';

//   constructor(private socket: Socket, private toastCtrl: ToastController){}
  
//   ngOnInit()
//   {
//     this.socket.connect();

//     let name = `user-${new Date().getTime()}`;
//     this.currentUser = name;

//     this.socket.emit('set-name', name);

//     this.socket.fromEvent("users-changed").subscribe(data => {
//       let user = data['user'];
//       if (data['event'] === 'left') {
//         this.showToast('User left: ' + user);
//       } else {
//         this.showToast('User joined: ' + user);
//       }
//     });

//     this.socket.fromEvent('message').subscribe(message => {
//       this.messages.push(message);
//     });
//   }

//   sendMessage() {
//     this.socket.emit('send-message', { text: this.message });
//     this.message = '';
//   }

//   ionViewWillLeave() {
//     this.socket.disconnect();
//   }

//   async showToast(msg) {
//     let toast = await this.toastCtrl.create({
//       message: msg,
//       position: 'top',
//       duration: 2000
//     });
//     toast.present();
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController } from '@ionic/angular';
// import { NavigationExtras } from '@angular/router';
import { Socket } from 'ngx-socket-io';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  nickname:string;
 
  constructor(private socket: Socket, private router: Router) { }
  
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    // this.navCtrl.navigateForward(['chat-room'], navigationExtras);
    this.router.navigate(['chat-room', { nickname: this.nickname }]);

    
  }
}

