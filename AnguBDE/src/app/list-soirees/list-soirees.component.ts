import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { Soiree } from '../models/soiree.model';
import { SoireesService } from '../services/soirees.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-list-soirees',
  standalone: true,
  templateUrl: './list-soirees.component.html',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatIconModule, CommonModule, RouterModule],
  styleUrl: './list-soirees.component.scss'
})
export class ListSoireesComponent implements OnInit{
  dataSource!: Soiree[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private mySoireesService: SoireesService) {}

  ngOnInit() {
    this.mySoireesService.getSoirees().subscribe((soirees: Soiree[]) => {
      this.dataSource = soirees;
      console.log(this.dataSource);
    });
  }
}
