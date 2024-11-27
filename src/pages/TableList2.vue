<template>
  <div class="content">

        <card>          
              <div class="text-left d-flex align-items-center justify-content-between">
                <p>expired tenders</p>             
               <button @click="updateTime" class="btn float-right">Refresh</button>
              </div>           
        </card>
    

      <div class="col-12">
        <card class="card-plain">
          <template slot="header">
            <h4 class="card-title"></h4>
            <p class="category"></p>
          </template>
          <div class="table-full-width table-responsive text-left">
            <base-table
              :title="table2.title"
              :sub-title="table2.subTitle"
              :data="table2.data"
              :columns="table2.columns"
            >
            </base-table>
          </div>
        </card>
      </div>
    </div>
  
</template>
<script>
import { Card } from "@/components/index";

import BaseTable from "@/components/BaseTable";

const tableColumns = ["Pick", "Number", "Authority", "Country","Published", "Deadline"];
const tableData = [
  {
    id: 1,
    pick: "O",    
    number: "671345-2024",
    authority: "Freistaat Bayern",
    country: "GER",
    published: "05/11/2024",
    deadline: "15/11/2024",
  },
  {
    id: 2,
    pick: "X", 
    number: "665425-2024",
    authority: "Wirtschaftsbetriebe Duisburg",
    country: "GER",
    published: "31/10/2024",
    deadline: "03/12/2024",
  },
  {
    id: 3,
    pick: "O", 
    number: "664792-2024",
    authority: "Freistaat Bayern",
    country: "GER",
    published: "31/10/2024",
    deadline: "15/11/2024",
  },
  {
    id: 4,
    pick: "O", 
    number: "661278-2024",
    authority: "Universität Stuttgart",
    country: "GER",
    published: "30/10/2024",
    deadline: "28/11/2024",
  },
  {
    id: 5,
    pick: "O", 
    number: "660579-2024",
    authority: "Universität der Bundeswehr Hamburg",
    country: "GER",
    published: "30/10/2024",
    deadline: "11/11/2024",
  },
  {
    id: 6,
    pick: "O", 
    number: "646962-2024",
    authority: "Kreis Steinfurt",
    country: "GER",
    published: "24/10/2024",
    deadline: "25/11/2024",
  },
  {
    id: 7,
    pick: "O", 
    number: "632294-2024",
    authority: "Stadtverwaltung Hohnstein",
    country: "GER",
    published: "18/10/2024",
    deadline: "18/11/2024",
  },
  {
    id: 8,
    pick: "O", 
    number: "632294-2024",
    authority: "Stadtverwaltung Hohnstein",
    country: "GER",
    published: "18/10/2024",
    deadline: "18/11/2024",
  },
  {
    id: 9,
    pick: "O", 
    number: "661278-2024",
    authority: "Universität Stuttgart",
    country: "GER",
    published: "30/10/2024",
    deadline: "28/11/2024",
  },
  {
    id: 10,
    pick: "O", 
    number: "660579-2024",
    authority: "Universität der Bundeswehr Hamburg",
    country: "GER",
    published: "30/10/2024",
    deadline: "11/11/2024",
  },
  {
    id: 11,
    pick: "O", 
    number: "646962-2024",
    authority: "Kreis Steinfurt",
    country: "GER",
    published: "24/10/2024",
    deadline: "25/11/2024",
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
<style></style>
