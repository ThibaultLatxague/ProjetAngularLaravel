import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { GoodiesService } from '../services/goodies.service';
import { Goodies } from '../models/goodies.model';

@Component({
  selector: 'app-list-goodies',
  templateUrl: './list-goodies.component.html',
  styleUrl: './list-goodies.component.scss',
  imports: [RouterModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule],
})

export class ListGoodiesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nom', 'quantite', 'description', 'cout', 'action'];
  dataSource = new MatTableDataSource<Goodies>([]); // ✅ Initialise avec un tableau vide

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private myGoodiesService: GoodiesService) {}

  ngOnInit() {
    this.myGoodiesService.getGoodies().subscribe((goodies: Goodies[]) => {
      console.log(goodies);
      this.dataSource.data = goodies;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}