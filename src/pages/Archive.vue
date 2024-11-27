<template>
  <div class="content">   
    
    <!-- TED Feed -->

    <template>        
      <div class="d-flex justify-content-between align-items-center">

        <card> 
          <div class="d-flex justify-content-between align-items-center">
            
              <div class="text-left">
                Derzeit {{ numberPicked }} inaktive Tenders  -- Davon {{ numberRv }} zu erneuten Überprüfung
                </div>                  
                <base-button type="info float-right" size="sm" icon>
                  <i class="tim-icons icon-refresh-01"></i>
                </base-button>                  
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
              <th>active</th>
              <th @click="toggleSort" class="sortable">Review <span>{{ sortOrder === 'asc' ? '▲' : '▼' }}</span></th>
              
              <th class="text-left">Title</th>
              <th>Lots</th>
              <th @click="toggleSort" class="sortable">PLZ <span>{{ sortOrder === 'asc' ? '▲' : '▼' }}</span></th>
              <th class="">Deadline</th>
              <th class="">Info</th>

            </template>  

            <template slot-scope="{row}">
              <td>
                <input type="checkbox" v-model="row.pick" />
              </td>
              <td><input type="checkbox" v-model="row.rv" /></td>
              
              <td class="text-left">{{row.title}}</td>
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
          id: "Stefan",
          title: "Generalsanierung Berufliche Schulen Landsberg - 209 Medientechnik TB AV, E, T",
          lots:"4",
          plz: "86899",
          deadline: "21/01/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "Computeranlagen und Zubehör",
          lots:"1",
          plz: "81675",
          deadline: "15/11/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Dienstleistungen von Architektur-, Konstruktions- und Ingenieurbüros und Prüfstellen",
          lots:"2",
          plz: "47053",
          deadline: "03/12/2024 ",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Kim",
          title: "Rahmenvereinbarung zur Beschaffung von IT-Arbeitsplatzaustattung",
          lots:"3",
          plz: "81675",
          deadline: "15/11/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Diverse Maschinen und Geräte für besondere Zwecke",
          lots:"4",
          plz: "70569",
          deadline: "28/11/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "IT-Spezifisch für Laptops - 123 ABC",
          lots: "1",
          plz: "86899",
          deadline: "15/12/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "Server-Systeme und Netzwerke für Unternehmen",
          lots: "2",
          plz: "81675",
          deadline: "10/01/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "EDV-Ausstattung für Schulen und Institutionen",
          lots: "3",
          plz: "47053",
          deadline: "20/11/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Kim",
          title: "Audio-Technik für professionelle Anwendungen",
          lots: "4",
          plz: "81675",
          deadline: "25/11/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Videokonferenz-Technologie für Unternehmen",
          lots: "1",
          plz: "70569",
          deadline: "28/11/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "IT-Hardware für Webentwicklung und Programmierung",
          lots: "2",
          plz: "80331",
          deadline: "05/12/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Netzwerktechnologie für große Unternehmen",
          lots: "3",
          plz: "94032",
          deadline: "22/12/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Kim",
          title: "Server-Backup und Datenarchivierung",
          lots: "4",
          plz: "72108",
          deadline: "30/12/2024",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Audio-Aufnahmetechnologie für Studios",
          lots: "1",
          plz: "40470",
          deadline: "10/01/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "IT-Sicherheit und Netzwerkschutzsysteme",
          lots: "2",
          plz: "80333",
          deadline: "20/01/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Kim",
          title: "Professionelle Videotechnik für Eventproduktionen",
          lots: "3",
          plz: "50667",
          deadline: "15/02/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Laptop- und Server-Wartung und Support",
          lots: "4",
          plz: "22303",
          deadline: "28/02/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "IT-Infrastruktur für digitale Arbeitsplätze",
          lots: "1",
          plz: "89073",
          deadline: "10/03/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "IT-Consulting für Unternehmen im digitalen Wandel",
          lots: "2",
          plz: "90762",
          deadline: "15/04/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Kim",
          title: "Audio-Streaming Systeme für digitale Konferenzen",
          lots: "3",
          plz: "40210",
          deadline: "20/05/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "Server-Management für Unternehmensnetzwerke",
          lots: "4",
          plz: "82110",
          deadline: "15/06/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "PC-Peripherie für kreative Profis",
          lots: "1",
          plz: "65439",
          deadline: "25/07/2025",
          edit: "",
        },
        {
          pick: false,
          rv: true,
          id: "Stefan",
          title: "Digitale Audio-Technik für Musikproduktionen",
          lots: "2",
          plz: "99084",
          deadline: "15/08/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Kim",
          title: "Videokonferenz-Software für Unternehmen",
          lots: "3",
          plz: "31303",
          deadline: "01/09/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Stefan",
          title: "IT-Support für Laptops und mobile Geräte",
          lots: "4",
          plz: "56201",
          deadline: "10/10/2025",
          edit: "",
        },
        {
          pick: false,
          rv: false,
          id: "Marvin",
          title: "Netzwerk-Optimierung für Server-Farmen",
          lots: "1",
          plz: "22089",
          deadline: "30/11/2025",
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
    return this.tableData.filter(row => !row.pick).length;
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
    // Wenn 'true' oben sein soll:
    return a.rv ? -1 : 1;
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
