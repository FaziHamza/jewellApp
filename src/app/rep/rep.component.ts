import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;
@Component({
  selector: 'app-rep',
  templateUrl: './rep.component.html',
  styleUrls: ['./rep.component.css']
})
export class RepComponent implements OnInit {
  @ViewChild('dataTable',{static:false}) table : ElementRef;
  dataTable: any;
  messgae ="sssssss";
  constructor() { }

  ngOnInit():void {
    
    $('button').click(function(){
      alert('Wass up');
       });
/* Formatting function for row details - modify as you need */
this.dataTable =$(this.table.nativeElement);

/* Formatting function for row details - modify as you need */
var html ='';
    var pId =0;
        function format ( dataSource ) {
        //   alert(pId);
            // console.log(dataSource[0])
            html = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
                $.map(dataSource,function(values,keys){
                   
                    $.map(values,function(value,key){
// console.log(value);
                        $.map(value,function(val,ke){
                            
                            if(ke == 'PurchaseDetails'){

                               $.map(val,function(val1,ke1)
                                 {
                                     html += '<tr>';
                                                $.map(val1,function(va,ky)
                                                {
                                                    if (ke1 == 0 && pId == val1.PurchaseId)
                                                    html += '<th>' + ky + '</th>';      
                                                })
                                                html += '</tr> <tr>';
                                                $.map(val1, function (va, ky) {
                                                   if(pId== val1.PurchaseId)
                                      
                                                    html +=
                                                        '<td>' + va + '</td>';
                                                })
                                                html +='</tr></tr>';
                                            });
                            }
                               if (ke == 'PurchaseStoneDetails') {

                                $.map(val, function (val1, ke1) {
                                    html += '<tr>';
                                    $.map(val1, function (va, ky) {
                                        if (ke1 == 0 && pId == val1.PurchaseId)
                                            html += '<th>' + ky + '</th>';
                                    })
                                    html += '</tr> <tr>';
                                    $.map(val1, function (va, ky) {
                                        if (pId == val1.PurchaseId)

                                            html +=
                                                '<td>' + va + '</td>';
                                    })
                                    html += '</tr></tr>';
                                });
                            }
                    })
                        
                    })
                })
            // $.map(dataSource,function(value,key)
            // {   
            //     $.map(value,function(va,ke)
            //     {
            //      html += '<tr>';
            //         $.map(va,function(v,k)
            //         {   
            //             if(ke==0)
            //             html +='<th>' + k+'</th>';                
            //         })
            //         html += '</tr> <tr>';
            //         $.map(va,function(v,k)
            //         {   
            //         html +=
            //         '<td>' + v +'</td>';

            //         })
            //     })
            //     html +='</tr></tr>';
            // });
return html += '</table>'; } 

    var table;
    var getData=[];
    // var getData1=[];
    $.ajax({
                type:'GET',
                url: 'http://localhost:35257/api/purchaselist',
                dataType :'JSON',
                success: function(html){
                    getData.push(html);

                    table = this.dataTable.DataTable({
                         //aaData: data,
                         data : html,
                         "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "PurchaseId" },
            { "data": "PurchaseId" },
            { "data": "PurchaseId" },
            { "data": "PurchaseId" }
        ],
        "order": [[1, 'asc']]
    } );}
            });


            $('#example').on('click', 'td.details-control', function () {
          var tr = $(this).closest('tr');
             pId=  tr.find('td').eq(1).text();
          var row = table.row(tr);
          if (row.child.isShown()) {
              // This row is already open - close it
              row.child.hide();
    
              html ='';
              tr.removeClass('shown');
          } else {
              // Open this row
            //   row.child(format(getData1)).show();
              row.child(format(getData)).show();
              tr.addClass('shown');
          }
      });
      $("#Collaps1").on("click", function () {

        //Open all of the child rows
        $("td.details-control").click();

    })
  }
  }


