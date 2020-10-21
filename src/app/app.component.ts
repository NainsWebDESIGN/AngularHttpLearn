import { Component, OnInit } from '@angular/core';
import { RetService } from './ret.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RetService]
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient, private ret: RetService) { }
  ngOnInit() {
    this.ret.getData().subscribe(json => {
      this.data = json.ret[0].league_id;
      console.log(this.data);
    })
  }

}
