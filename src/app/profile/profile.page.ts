import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  profileId: string;
  dictador;
  constructor(
    private activatedRoute:ActivatedRoute,
    private http: HttpClient) {
   }

  ngOnInit() {
    
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://61ae24a6a7c7f3001786f67f.mockapi.io/usuarios/'+ this.profileId)
      .subscribe(res => {
        this.dictador = res;
      })
  }

}
