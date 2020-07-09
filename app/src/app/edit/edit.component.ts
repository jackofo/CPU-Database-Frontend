import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CpuService } from '../_services/cpu.service';
import { CpuShort, Cpu } from '../_models/cpu';
import { SocketService } from '../_services/socket.service';
import { Socket } from '../_models/socket';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  socketList : Socket[];
  editedCpu : Cpu;
  @Input() editId : number;

  constructor(private cpuService : CpuService, private socketService : SocketService) { }

  ngOnInit(): void 
  {
    this.socketService.All().subscribe(response => this.socketList = response);
    this.cpuService.Get(this.editId).subscribe(response => this.editedCpu = response);
  }

  update(c : NgForm)
  {
    if(c.value.socket >= 0)
    {
      c.value.id = this.editId;
      this.cpuService.Add(c.value).subscribe(response2 => console.log(response2));
    }
  }
}
