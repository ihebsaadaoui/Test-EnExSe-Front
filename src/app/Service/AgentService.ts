import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../Model/apiResponse";


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  url: string = "http://localhost:8089/api/v1"
  constructor(private http: HttpClient) { }

  getAgents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.url}/agents`)
  }
}
