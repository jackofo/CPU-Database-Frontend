import { Component, OnInit, Input } from '@angular/core';
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

  cpu : Cpu;
  socketList : Socket[];
  @Input() editId : number;
  editing : boolean;
  @Input() adding : boolean;
  loading : boolean;

  ngOnInit()
  {
    this.loading = true;
    this.editing = true;
    this.editingSwitch();
    this.socketService.All().subscribe(response => this.socketList = response);
    this.cpu = {
      clockSpeed : 0,
      coreNumber : 1,
      price : 0,
      tdp : 0,
      threadNumber : 1,
      brand : '',
      id : null,
      model : '',
      socket : 1
    };

    if(this.editId != null)
    {
      this.loading = true;
      this.cpuService.Get(this.editId).subscribe(response => { this.cpu = response; this.loading = false; });
    }
    else
    {
      this.loading = false;
    }
  }

  add()
  {
    this.cpuService.Add(this.cpu).subscribe(response => console.log(response));
    window.location.reload();
  }

  editingSwitch()
  {
    if(this.adding)
    {
      this.editing = true;
    }
    else
    {
      this.editing = !this.editing;
    }
  }

  idToSocket(id) : string
  {
    let socketName : string;
    this.socketList?.forEach(s => {
      if(s.id == id)
      {
        socketName = s.name;
      }
    });

    return socketName;
  }
}
