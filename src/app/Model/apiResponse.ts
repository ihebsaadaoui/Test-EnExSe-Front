import { Agent } from "./Agent";

export interface ApiResponse{
  LocalDateTime: Date;
  statusCode: number;
  HttpStatus: string;
  message: string;
  results: Agent[];
}
