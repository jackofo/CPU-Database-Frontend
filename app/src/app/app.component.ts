import { Component, OnInit } from '@angular/core';
import { Cpu, CpuShort } from './_models/cpu';
import { CpuService } from './_services/cpu.service';
import { from } from 'rxjs';
import { Socket } from './_models/socket';
import { SocketService } from './_services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  title = 'CPU Database';
  isFormOpen : boolean;
  cpuList : CpuShort[];
  socketList : Socket[];
  editId : number;
  adding : boolean;

  constructor(private cpuService : CpuService, private socketService : SocketService)
  {
    this.isFormOpen = false;
  }

  ngOnInit()
  {
    this.socketService.All().subscribe(response => this.socketList = response);
    this.cpuService.All().subscribe(response => this.cpuList = response);
  }

  openForm(id : number)
  {
    if(id == null)
    {
      this.adding = true;
    }
    else
    {
      this.adding = false;
    }
    this.editId = id;
    this.isFormOpen = true;
  }

  delete(id : number)
  {
    this.cpuService.Delete(id).subscribe(response => console.log(response));
    window.location.reload();
  }

  closeForm()
  {
    this.isFormOpen = false;
  }

  idToSocket(id) : string
  {
    let socketName : string;
    this.socketList.forEach(s => {
      if(s.id == id)
      {
        socketName = s.name;
      }
    });

    return socketName;
  }
}
