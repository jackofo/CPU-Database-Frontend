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
  isOpen : boolean;
  cpuList : CpuShort[];

  constructor(private service : CpuService)
  {
    this.isOpen = false;
  }

  ngOnInit()
  {
    this.service.All().subscribe(response => this.cpuList = response);
  }

  openAddForm()
  {
    this.isOpen = true;
  }

  closeAddForm()
  {
    this.isOpen = false;
  }
}
