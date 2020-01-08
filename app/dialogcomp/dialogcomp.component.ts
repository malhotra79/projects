import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatIcon } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialogcomp',
  templateUrl: './dialogcomp.component.html',
  styleUrls: ['./dialogcomp.component.css']
})
export class DialogcompComponent implements OnInit {

    inputdata: any = {};

    constructor(private dialogRef: MatDialogRef<DialogcompComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
           
    ngOnInit() {
        this.inputdata = this.data;
    }

}
