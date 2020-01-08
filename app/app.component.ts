import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../app/data/database.service';
import {DatashareService } from '../app/data/datashare.service';
import { MatDialog } from '@angular/material';
import { DialogcompComponent} from '../app/dialogcomp/dialogcomp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'app';

    columnDefs: any[];
    rowData: any[];

    gridOptions = {
        columnDefs: this.columnDefs,
        rowData: this.rowData        
    };

    constructor(private _dbService: DatabaseService, private _dataShare: DatashareService,
        private dialog:  MatDialog) {

        this.columnDefs = [            
            { headerName: 'Title', field: 'title', width: 100 },
            { headerName: 'URL', field: 'url', width: 150 },
            { headerName: 'Created At', field: 'created_at', width: 150 },
            { headerName: 'Author', field: 'author', width: 80 },
            {
                headerName: 'Show',
                template:
                    `<mat-icon class="material-icons" style="margin:-4px 10px;color:darkblue;font-size: 22px; " data-action-type='edit'>Show</mat-icon>`,
                width: 130

            }
        ];
    }

    ngOnInit() {
        setTimeout(() => {
            this.rowData = null;
            this.getData();
        }, 4000);
    }

    getData() {
        this._dbService.getData().subscribe((_data: any) => {
            console.log(_data);
            this.rowData = _data.hits;
        });
    }

    datarow: any;
    public onCellClicked(e: any) {

        if (e.event.target !== undefined) {
            let data = e.data
            let actionType = e.event.target.getAttribute("data-action-type");

            switch (actionType) {
                case "edit":
                    return this.onActionEditClick(data);
                
            }
        }

        //console.log(e.data);
        //this.datarow= e.data;

        //this.dialog.open(DialogcompComponent, { height: '450px', width: '650px', e });
    }

    public onActionEditClick(data: any) {
        this.dialog.open(DialogcompComponent, { height: '450px', width: '650px', data });
    }

}
