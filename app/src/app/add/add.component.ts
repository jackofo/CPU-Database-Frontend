import { Component, OnInit } from '@angular/core';
import { CpuService } from '../_services/cpu.service';
import { SocketService } from '../_services/socket.service';
import { Socket } from '../_models/socket';
import { Cpu } from '../_models/cpu';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cpuService : CpuService, private socketService : SocketService) { }

  socketList : Socket[];

  ngOnInit()
  {
    this.socketService.All().subscribe(response => this.socketList = response);
  }

  add(c : NgForm)
  {
    if(c.value.socket >= 0)
    {
      this.socketService.Get(c.value.socket).subscribe(response1 => 
      {
        c.value.socket = response1;
        this.cpuService.Add(c.value).subscribe(response2 => console.log(response2));
      });
    }
  }
}
