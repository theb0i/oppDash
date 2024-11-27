<template>
  <div class="content">

        <card>          
              <div class="text-left d-flex align-items-center justify-content-between">
                    
                <input class="suche" placeholder="Search...">    
                <p>extended search</p>
              </div>           
        </card>

    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title">delivered Tenders</h4>
          </template>
          <div class="table-responsive text-left">
            <base-table
              :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary"
            >
            </base-table>
          </div>
        </card>
      </div>

    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";

import BaseTable from "@/components/BaseTable";

const tableColumns = ["Number", "authority", "Delivered", "Deadline", "Edit" ];
const tableData = [
  {
    id: 1,
       
    number: "671345-2024",
    authority: "Freistaat Bayern",
    delivered: "05/11/2024",
    deadline: "15/11/2024",
    edit: "O", 
  },
  {
    id: 2,
     
    number: "665425-2024",
    authority: "Wirtschaftsbetriebe Duisburg",
 
    delivered: "31/10/2024",
    deadline: "03/12/2024",
    edit: "X",
  },
  {
    id: 3,
    
    number: "664792-2024",
    authority: "Freistaat Bayern",
 
    delivered: "31/10/2024",
    deadline: "15/11/2024",
    edit: "O", 
  },
  {
    id: 4,
     
    number: "661278-2024",
    authority: "Universität Stuttgart",
 
    delivered: "30/10/2024",
    deadline: "28/11/2024",
    edit: "O", 
  },
  {
    id: 5,
     
    number: "660579-2024",
    authority: "Universität der Bundeswehr Hamburg",
 
    delivered: "30/10/2024",
    deadline: "11/11/2024",
    edit: "O", 
  },
  {
    id: 6,
     
    number: "646962-2024",
    authority: "Kreis Steinfurt",
 
    delivered: "24/10/2024",
    deadline: "25/11/2024",
    edit: "O", 
  },
  {
    id: 7,
    
    number: "632294-2024",
    authority: "Stadtverwaltung Hohnstein",
 
    delivered: "18/10/2024",
    deadline: "18/11/2024",
    edit: "O", 
  },
  {
    id: 8,
     
    number: "632294-2024",
    authority: "Stadtverwaltung Hohnstein",
 
    delivered: "18/10/2024",
    deadline: "18/11/2024",
    edit: "O", 
  },
  {
    id: 9,
     
    number: "661278-2024",
    authority: "Universität Stuttgart",
 
    delivered: "30/10/2024",
    deadline: "28/11/2024",
    edit: "O", 
  },
  {
    id: 10,
     
    number: "660579-2024",
    authority: "Universität der Bundeswehr Hamburg",
 
    delivered: "30/10/2024",
    deadline: "11/11/2024",
    edit: "O", 
  },
  {
    id: 11,
     
    number: "646962-2024",
    authority: "Kreis Steinfurt",
 
    delivered: "24/10/2024",
    deadline: "25/11/2024",
    edit: "O", 
  },
];

export default {
  components: {
    Card,
    BaseTable,
  },
  data() {
    return {
      table1: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style>
  .suche {
    border-radius: 10px;
    padding: 5px;
  }
</style>
