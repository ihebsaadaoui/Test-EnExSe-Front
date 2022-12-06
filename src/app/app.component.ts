import { Component } from '@angular/core';
import {Observable, take} from "rxjs";
import {ApiResponse} from "./Model/apiResponse";
import {AgentService} from "./Service/AgentService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-EnExSe-Front';
  public AgentStatus = AgentStatus;

  // agents!: Agent[];
  response$! : Observable<ApiResponse>

  constructor(private agentService: AgentService){

  }
  ngOnInit(){
    this.response$ = this.agentService.getAgents().pipe(
      take(1)
    )

  }

}

export enum AgentStatus {
  active = "Active agents",
  disconnected = "Disconnected agents",
  pending = "Pending agents",
  never_connected = "Never connected agents"
}
