import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-dictadores',
  templateUrl: './dictadores.page.html',
  styleUrls: ['./dictadores.page.scss'],
})
export class DictadoresPage implements OnInit {
  dictadores = []
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://61ae24a6a7c7f3001786f67f.mockapi.io/usuarios')
    .subscribe(res => {
      console.log(res);
      this.dictadores = res.results;
    })
  }

}
