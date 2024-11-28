<template>
  <div class="content">   
    
    <!-- TED Feed -->

    <template>        
      <div class="d-flex justify-content-between align-items-center">

        <card> 
          <div class="d-flex justify-content-between align-items-center">
            
              <div class="text-left">
                <b>Derzeit {{ numberPicked }} Tenders in bearbeitung </b> -- Davon {{ numberRv }} mit Rahmenvereinbarung
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
              <th>active</th>
              <th @click="toggleSortRv" class="sortable">RV <span>{{ sortOrderRv ? '✔' : '✘' }}</span></th>
              <th>VB</th>
              <th>Title</th>
              <th>Lots</th>
              <th @click="toggleSort" class="sortable">PLZ <span>{{ sortOrder === 'asc' ? '▲' : '▼' }}</span></th>
              <th class="">Deadline</th>
              <th class="">Info</th>
              <th class="">Clone</th>
              <th class="">Delete</th>
            </template>  

            <template slot-scope="{row}">
              <td>
                <input type="checkbox" v-model="row.pick" />
              </td>
              <td><input type="checkbox" v-model="row.rv" /></td>
              <td>{{row.id}}</td>
              <td class="text-center">{{row.title}}</td>
              <td>{{row.lots}}</td>
              <td>{{row.plz}}</td>
              <td>{{row.deadline}}</td>
              <td>
                <router-link to="/tableOpenAt">
                  <base-button type="success" size="sm" icon>
                    <i class="tim-icons icon-minimal-down"></i>
                  </base-button>
                </router-link>
              </td> 
              <td class="td-actions ">
                <base-button type="info" size="sm" icon @click="cloneRow(row)">
                  <i class="tim-icons icon-single-copy-04"></i>
                </base-button>
              </td>
              <td class="td-actions ">
                <base-button type="danger" size="sm" icon @click="deleteRow(row)">
                  <i class="tim-icons icon-trash-simple"></i>
                </base-button>
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
      columns: ["pick", "rv", "id", "title","lots", "plz", "deadline", "edit"],
      sortOrder: 'asc', // initial ascending order for sorting
      sortOrderRv: true, // initial true order for rv sorting
      tableData: [
        {
          pick: true,
          rv: false,
          id: "Stefan",
          title: "Generalsanierung Berufliche Schulen Landsberg - 209 Medientechnik TB AV, E, T",
          lots:"4",
          plz: "86899",
          deadline: "21/01/2025",
          edit: "",
        },
        {
          pick: true,
          rv: false,
          id: "Marvin",
          title: "Computeranlagen und Zubehör",
          lots:"1",
          plz: "81675",
          deadline: "15/11/2024",
          edit: "",
        },
        {
          pick: true,
          rv: true,
          id: "Stefan",
          title: "Dienstleistungen von Architektur-, Konstruktions- und Ingenieurbüros und Prüfstellen",
          lots:"2",
          plz: "47053",
          deadline: "03/12/2024 ",
          edit: "",
        },
        {
          pick: true,
          rv: true,
          id: "Kim",
          title: "Rahmenvereinbarung zur Beschaffung von IT-Arbeitsplatzaustattung",
          lots:"3",
          plz: "81675",
          deadline: "15/11/2024",
          edit: "",
        },
        {
          pick: true,
          rv: true,
          id: "Stefan",
          title: "Diverse Maschinen und Geräte für besondere Zwecke",
          lots:"4",
          plz: "70569",
          deadline: "28/11/2024",
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
  .card {
  display: inline-block; /* Ermöglicht, sich an den Inhalt anzupassen */
  min-width: max-content; /* Mindestens so breit wie der Inhalt (Tabelle) */
  width: 100%; /* Passt sich ansonsten der verfügbaren Breite an */
  overflow-x: auto; /* Verhindert das Abschneiden von Inhalten */
}

.table {
  width: 100%; /* Tabelle nutzt den maximal verfügbaren Platz */
  table-layout: auto; /* Dynamische Spaltenbreite */
}
  
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
