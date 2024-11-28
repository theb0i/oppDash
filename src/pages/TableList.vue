<template>
  <div class="content">   
    
    <!-- TED Feed -->

    <template>        
      <div class="d-flex justify-content-between align-items-center">

        <card> 
          <div class="d-flex justify-content-between align-items-center">
            
              <div class="text-left">
                <b>Last TED Import 10:00:00 am</b> -- <em>Data-Feed of the last 7 days</em>
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



      <card style="width: 20rem; min-width: 200px; min-height: 180px; margin-right: 5px;">
          <h4 class="card-title">Filter</h4>
          <div>
            <base-checkbox inline class="mb-3" v-model="checkboxes.filterDeutschland" :id="'filterDeutschland'">
                Deutschland
            </base-checkbox>
            <base-checkbox inline class="mb-3" v-model="checkboxes.filterNato" :id="'filterNato'">
                Nato
            </base-checkbox>
            <base-checkbox inline class="mb-3" v-model="checkboxes.filterEU" :id="'filterEU'">
                EU
            </base-checkbox>
          </div>  
      </card>



      <!-- PLZ Toggle -->
      <card style="width: 20rem; min-width: 200px; min-height: 180px; margin-left: 5px; margin-right: 5px;">
          <h4 class="card-title">PLZ Toggle</h4>
          
          <div class="content">
    <div class="range-slider">
      <!-- Bereichsgrenzen und Slider -->
        <div class="slider-container">
              
              
              <!-- Slider zur Auswahl des Bereichswertes -->
              <input
                type="range"
                v-model="selectedRange"
                :min="0"
                :max="99999"
                step="1"
                class="slider"
              />
              <span class="range-label float-left">00000</span>
              <span class="range-label float-right">99999</span>         
            </div>
          </div>
        </div>
      </card>



      <!-- Archivierte Tenders -->
      <card style="width: 20rem; min-width: 200px; min-height: 180px; margin-left: 5px;">
          <h4 class="card-title">Show Archived Tenders </h4>
          
          <div>
          <base-checkbox inline class="mb-3" v-model="checkboxes.checked">
              Hide Archived
          </base-checkbox>
          <base-checkbox inline class="mb-3" v-model="checkboxes.unchecked">
              Show Archived
          </base-checkbox>
          </div>
   
      </card>

    
    
      </div>
    </template>

  <template>        
      <div class="d-flex justify-content-between align-items-center">

        <card> 
          <div class="d-flex justify-content-between align-items-center">
            <div class="text-left">
              Move <b>{{ numberPicked }}</b> tenders to  <router-link to="/activetenders">'Active Tenders'</router-link>
            </div>  
            <router-link to="/activetenders">
            <base-button  type="info float-right" size="sm" icon>
            <i class="tim-icons icon-check-2"></i>
            </base-button>  </router-link>                
          </div>
        </card>
      
      </div>
    </template>

    <!-- Tabelle -->

    <div class="row-12">
      <card>
        <template>
          <!-- base table daten -->
          <base-table :data="combinedData" :columns="columns" :key="sortOrder">

            <template slot="columns">
              <th>picked</th>
              <th @click="toggleSortRv" class="sortable">RV <span>{{ sortOrderRv ? '✔' : '✘' }}</span></th>
              <th>ID</th>
              <th class="text-left">Title</th>
              <th>Lots</th>
              <th @click="toggleSort" class="sortable">PLZ <span>{{ sortOrder === 'asc' ? '▲' : '▼' }}</span></th>
              <th class="">Deadline</th>
              <th class="">Info</th>
              <th class="">Delete</th>
            </template>  

            <template slot-scope="{row}">
              <td>
                <input type="checkbox" v-model="row.pick" />
              </td>
              <td><input type="checkbox" v-model="row.rv" /></td>
              <td>{{row.id}}</td>
              <td class="text-left">{{row.title}}</td>
              <td>{{row.lots}}</td>
              <td>{{row.plz}}</td>
              <td>{{row.deadline}}</td>
              <td>
                <router-link to="/tableOpen">
                  <base-button type="success" size="sm" icon>
                    <i class="tim-icons icon-minimal-down"></i>
                  </base-button>
                </router-link>
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
      sortOrderRv: undefined, // initial true order for rv sorting
      tableData: [
            {
          pick: false,
          rv: false,
          id: "684280-2024",
          title: "Generalsanierung Berufliche Schulen Landsberg - 209 Medientechnik TB AV, E, T",
          lots: "4",
          plz: "86899",
          deadline: "21/01/2025",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "664792-2024",
          title: "Computeranlagen und Zubehör",
          lots: "1",
          plz: "81675",
          deadline: "15/11/2024",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "665425-2024",
          title: "Dienstleistungen von Architektur-, Konstruktions- und Ingenieurbüros und Prüfstellen",
          lots: "2",
          plz: "47053",
          deadline: "03/12/2024 ",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "664792-2024",
          title: "Rahmenvereinbarung zur Beschaffung von IT-Arbeitsplatzaustattung",
          lots: "3",
          plz: "81675",
          deadline: "15/11/2024",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "661278-2024",
          title: "Diverse Maschinen und Geräte für besondere Zwecke",
          lots: "4",
          plz: "70569",
          deadline: "28/11/2024",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "684280-2024",
          title: "Beschaffung neuer IT-Geräte für die Stadtbibliothek München",
          lots: "5",
          plz: "80331",
          deadline: "10/02/2025",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "664792-2024",
          title: "Installation neuer Computerarbeitsplätze in der Messehalle Stuttgart",
          lots: "3",
          plz: "70173",
          deadline: "25/11/2024",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "665425-2024",
          title: "Einkauf von IT-Infrastruktur für die Straßenbeleuchtung Frankfurt",
          lots: "4",
          plz: "60311",
          deadline: "15/12/2024",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "664792-2024",
          title: "IT-Ausstattung und Software für die Universitätsbibliothek Heidelberg",
          lots: "2",
          plz: "69117",
          deadline: "05/01/2025",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "661278-2024",
          title: "Beschaffung von Computern und Netzwerkhardware für den Flughafen Frankfurt",
          lots: "6",
          plz: "60549",
          deadline: "30/12/2024",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "672534-2024",
          title: "Neubau eines Rechenzentrums in Wiesbaden",
          lots: "8",
          plz: "65183",
          deadline: "01/02/2025",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "678492-2024",
          title: "IT-Sicherheitsmaßnahmen und Netzwerkinfrastruktur für die Altstadt Augsburg",
          lots: "7",
          plz: "86150",
          deadline: "20/01/2025",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "687234-2024",
          title: "Erweiterung der IT-Infrastruktur im Technikzentrum München",
          lots: "9",
          plz: "80335",
          deadline: "12/02/2025",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "695827-2024",
          title: "Neubau und IT-Ausstattung der Kunsthalle Hamburg",
          lots: "3",
          plz: "20457",
          deadline: "17/12/2024",
          edit: ""
        },
        {
          pick: true,
          rv: true,
          id: "701234-2024",
          title: "IT-Infrastruktur und Software für den Bahnhof Dresden",
          lots: "2",
          plz: "01067",
          deadline: "22/11/2024",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "725839-2024",
          title: "Beschaffung von Servern und Netzwerkkomponenten für die Stadtverwaltung Leipzig",
          lots: "4",
          plz: "04109",
          deadline: "15/02/2025",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "734872-2024",
          title: "Aufrüstung der IT-Infrastruktur für das Universitätsklinikum Dresden",
          lots: "6",
          plz: "01307",
          deadline: "28/01/2025",
          edit: ""
        },
        {
          pick: false,
          rv: true,
          id: "748592-2024",
          title: "Einkauf von mobilen Endgeräten und Laptops für das Landratsamt Köln",
          lots: "5",
          plz: "50667",
          deadline: "12/12/2024",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "759320-2024",
          title: "Installation von Videoüberwachungsanlagen und IT-Systemen im Flughafen Berlin",
          lots: "3",
          plz: "12529",
          deadline: "20/03/2025",
          edit: ""
        },
        {
          pick: false,
          rv: false,
          id: "762139-2024",
          title: "Neubau eines Data Centers und IT-Ausstattung für das BSI Bonn",
          lots: "7",
          plz: "53113",
          deadline: "30/04/2025",
          edit: ""
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
    if (this.sortOrderRv === undefined) {
      return this.tableData; // Keine Sortierung, wenn sortOrderRv nicht definiert ist
    }

    return [...this.tableData].sort((a, b) => {
      if (a.rv === b.rv) return 0;
      return this.sortOrderRv ? (a.rv ? -1 : 1) : (a.rv ? 1 : -1);
    });
  },
  
  combinedData() {
    // Verwende `sortedDataRv`, wenn `rv` sortiert wird, andernfalls `sortedData`
    return this.sortOrderRv !== undefined ? this.sortedDataRv : this.sortedData;
  }
  },


  methods: {
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
