<template>
  <div class="content">   
    
    <!-- TED Feed -->

    <template>        
      <div class="d-flex justify-content-between align-items-center">

        <card> 
          <div class="d-flex justify-content-between align-items-center">
            
              <div class="text-left">
                <b>Derzeit {{ numberPicked }} gewonne Tenders </b> -- Davon {{ numberRv }} mit vierjähriger Rahmenvereinbarung
                </div>                  
                <base-button type="info float-right" size="sm" icon>
                  <i class="tim-icons icon-refresh-01"></i>
                </base-button>                  
              </div>
            
        </card>
      
      </div>
    </template>

    <!-- Filter -->

    <template>        
      <div class="d-flex justify-content-between align-items-center">


        <div>
        <card type="nav-tabs" style="width: 20rem; min-width: 20rem; min-height: 143px; text-align: left; gap: 10px;">
          <h4 class="card-title ">Filter</h4>
          <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterDeutschland" :id="'filterDeutschland'">
                Eigene Tenders
            </base-checkbox>
          </div>
          <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterNato" :id="'filterNato'">
                Nicht zugewiesene
            </base-checkbox>
          </div>
        <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterEU" :id="'filterEU'">
                Anderer AccountManager
            </base-checkbox>
          </div>  
      </card>
    </div>

    <div>
      <card  type="nav-tabs" style=" width: 20rem; min-width: 20rem; min-height: 143px; text-align: left; gap: 10px;">
          <h4 class="card-title ">Weitere Filter</h4>
          <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterDeutschland" :id="'filterDeutschland'">
                Eigene Tenders
            </base-checkbox>
          </div>
          <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterNato" :id="'filterNato'">
                Nicht zugewiesene
            </base-checkbox>
          </div>
        <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterEU" :id="'filterEU'">
                Anderer AccountManager
            </base-checkbox>
          </div>  
      </card>
    </div>

<div>
      <card style="width: 20rem; min-width: 20rem; min-height: 143px; text-align: left; gap: 10px;">
          <h4 class="card-title ">Weitere Filter</h4>
          <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterDeutschland" :id="'filterDeutschland'">
                Eigene Tenders
            </base-checkbox>
          </div>
          <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterNato" :id="'filterNato'">
                Nicht zugewiesene
            </base-checkbox>
          </div>
        <div>
            <base-checkbox inline class="mb-3 float-left" v-model="checkboxes.filterEU" :id="'filterEU'">
                Anderer AccountManager
            </base-checkbox>
          </div>  
      </card>
    </div>








    
    
      </div>
    </template>



    <!-- Tabelle -->

    <div class="row-12">
      <card>
        <template>
          <!-- base table daten -->
          <base-table :data="combinedData" :columns="columns" :key="sortOrder">

            <template slot="columns">
              <th>Won</th>
              <th class="sortable">4J. RV </th>
              <th>RV-ID</th>
              <th class="">Zuschlagsdatum</th>
              <th class="">Laufzeit</th>
              <th>Title</th>
              <th>V. 1+1</th>
              <th>Hersteller</th>
              <th class="">Info</th>

            </template>  

            <template slot-scope="{row}">
              <td>
                <input type="checkbox" v-model="row.pick" />
              </td>
              <td><input type="checkbox" v-model="row.rv" /></td>
              <td>{{row.id}}</td>
              <td class="text-center">01/01/2024</td>
              <td>{{row.deadline}}</td>
              <td>{{row.title}}</td>
              <td><input type="checkbox" v-model="row.rv" /></td>
              <td>{{row.hersteller}}</td>
              <td>
                <router-link to="/tableOpenAt">
                  <base-button type="success" size="sm" icon>
                    <i class="tim-icons icon-minimal-down"></i>
                  </base-button>
                </router-link>
              </td> 


            </template>    
          </base-table>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import { Card } from "@/components/index";
import BaseTable from "@/components/BaseTable";

export default {
  components: {
    Card,
    BaseTable,
  },
  data() {
    return {
      columns: ["pick", "rv", "id", "title","lots", "plz", "deadline","hersteller", "edit"],
      sortOrder: 'asc', // initial ascending order for sorting
      sortOrderRv: true, // initial true order for rv sorting
      tableData: [
        {
          pick: true,
          rv: false,
          id: "-",
          title: "Generalsanierung Berufliche Schulen Landsberg - 209 Medientechnik TB AV, E, T",
          lots:"4",
          plz: "86899",
          deadline: "21/01/2028",
          hersteller:"Hitachi",
          edit: "",
        },
        {
          pick: true,
          rv: false,
          id: "-",
          title: "Computeranlagen und Zubehör",
          lots:"1",
          plz: "81675",
          deadline: "15/11/2028",
          hersteller:"Fujitsu",
          edit: "",
        },
        {
          pick: true,
          rv: true,
          id: "RV-103",
          title: "Dienstleistungen von Architektur-, Konstruktions- und Ingenieurbüros und Prüfstellen",
          lots:"2",
          plz: "47053",
          deadline: "03/12/2029 ",
          hersteller:"Hitachi",
          edit: "",
        },
        {
          pick: true,
          rv: true,
          id: "RV-104",
          title: "Rahmenvereinbarung zur Beschaffung von IT-Arbeitsplatzaustattung",
          lots:"3",
          plz: "81675",
          deadline: "15/11/2028",
          hersteller:"Samsung",
          edit: "",
        },
        {
          pick: true,
          rv: true,
          id: "RV-105",
          title: "Diverse Maschinen und Geräte für besondere Zwecke",
          lots:"4",
          plz: "70569",
          deadline: "28/11/2029",
          hersteller:"Xiaomi",
          edit: "",
        },
      ],
      checkboxes: {
        filterDeutschland: true,
        filterNato: false, 
        filterEU: false,
        unchecked: false,
        checked: true,
      }
    };
  },
  computed: {

    numberPicked() {
    return this.tableData.filter(row => row.pick).length;
    },

    numberRv() {
    return this.tableData.filter(row => row.rv).length;
    },

    sortedData() {
      return [...this.tableData].sort((a, b) => {
        const plzA = a.plz;
        const plzB = b.plz;
        
        if (this.sortOrder === 'asc') {
          return plzA > plzB ? 1 : -1;
        } else {
          return plzA < plzB ? 1 : -1;
        }
      });
    },

    sortedDataRv() {
      return [...this.tableData].sort((a, b) => {
        if (a.rv === b.rv) return 0;
        return this.sortOrderRv ? (a.rv ? -1 : 1) : (a.rv ? 1 : -1);
      });
    },

    // Kombinierte Daten für die Tabelle
    combinedData() {
      // Verwende `sortedDataRv`, wenn `rv` sortiert wird, andernfalls `sortedData`
      return this.sortOrderRv !== undefined ? this.sortedDataRv : this.sortedData;
    }
  },
  methods: {
    cloneRow(row) {
    const index = this.tableData.indexOf(row); // Index der aktuellen Zeile
    const clonedRow = { ...row }; // Dupliziere die Zeile
    this.tableData.splice(index + 1, 0, clonedRow); // Füge die duplizierte Zeile nach der aktuellen Zeile ein
  },

  deleteRow(row) {
    const index = this.tableData.indexOf(row); // Index der Zeile, die gelöscht werden soll
    if (index !== -1) {
      this.tableData.splice(index, 1); // Entferne die Zeile aus dem Array
    }
  },

    toggleSort() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.sortOrderRv = undefined; // Deaktiviere `rv`-Sortierung
    },
    toggleSortRv() {
      this.sortOrderRv = !this.sortOrderRv;
      this.sortOrder = undefined; // Deaktiviere `plz`-Sortierung
    }
  }
};
</script>

<style scoped>
  .sortable {
    cursor: pointer;
    user-select: none;
  }

  .range-slider {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.slider {
  width: 100%;
  margin: 20px 0;
}

.range-display {
  font-weight: bold;
  margin-top: 10px;
}

</style>
