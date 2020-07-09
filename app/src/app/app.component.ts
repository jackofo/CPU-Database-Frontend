import { Component, OnInit } from '@angular/core';
import { Cpu, CpuShort } from './_models/cpu';
import { CpuService } from './_services/cpu.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  title = 'CPU Database';
  isAddWindowOpen : boolean;
  isEditWindowOpen : boolean;
  cpuList : CpuShort[];
  editId : number;

  constructor(private service : CpuService)
  {
    this.isAddWindowOpen = false;
  }

  ngOnInit()
  {
    this.service.All().subscribe(response => this.cpuList = response);
  }

  openAddForm()
  {
    this.isAddWindowOpen = true;
  }

  closeAddForm()
  {
    this.isAddWindowOpen = false;
  }

  openEditForm(id)
  {
    this.editId = id;
    this.isEditWindowOpen = true;
  }

  closeEditForm()
  {
    this.isEditWindowOpen = false;
  }
}
