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
              <th>picked</th>
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
                    <i class="tim-icons icon-minimal-up"></i>
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

        <!-- Inputfelder für ausgewählte Tabelle -->
      
        <div style="background-color:#f1f1f1; border-bottom:5px solid #bbb; border-radius: 0 0 5px 5px; margin: -30px 0 0 0; padding: 10px;"> 
        
          

            <div class="d-flex justify-content-around ">
           
            
              <form>
                
                <!-- Top Info Row -->
                <div class="row" style="padding: 0 5px 0 5px;">
                  
                  <card style="width: 20rem; margin:10px; text-align: left;">

                      <h4 class="card-title" style="border-bottom: 1px solid #ccc;"><b>Wettbewerb</b></h4>
                      <p class="card-text">Deutschland: Bauarbeiten für Schulgebäude</p>
                      <p class="card-text">Generalsanierung Berufliche Schulen Landsberg - 209 Medientechnik TB AV, E, T</p>
                      <p class="card-text">Deutschland, Landsberg am Lech (DE21E)</p>
                      <p class="card-text">Geschätzter Wert ohne MwSt.: 0,00 EUR</p>
                      <p class="card-text">Verfahrensart: Offenes Verfahren</p>

                      <br><br>

                      <h4 class="card-title" style="border-bottom: 1px solid #ccc;"><b>Beschaffer</b></h4>
                      <p class="card-text">Beschaffer: Landratsamt Landsberg am Lech</p>
                      <p class="card-text">E-Mail: Hochbau@lra-ll.bayern.de</p>
                      <p class="card-text">Deutschland, Landsberg am Lech (DE21E)</p>

                                            
                  </card>

                  <card style="width: 20rem; margin:10px; text-align: left;">


                  <h4 class="card-title" style="border-bottom: 1px solid #ccc;"><b>Zweck</b></h4>
                  <p class="card-text">Art des Auftrags: Bauleistung</p>
                  <p class="card-text"><b>Haupteinstufung (cpv):</b> 45214200 Bauarbeiten für Schulgebäude</p>
                  <p class="card-text"><b>Zusätzliche Einstufung (cpv):</b> 30213100 Tragbare Computer, 32340000 Mikrofone und Lautsprecher, 32350000 Teile für Ton- und Videoanlagen</p>
                  <br><br><br><br><br>

                  <h4 class="card-title" style="border-bottom: 1px solid #ccc;"><b>Ausschreibung</b></h4>
                  <p class="card-text">684280-2024</p>
                  <p class="card-text"><a href="/">im TED ansehen</a></p>
                                 
                  </card>

                  <card style="width: 20rem; margin:10px; text-align: left;">

                  <h4 class="card-title" style="border-bottom: 1px solid #ccc;"><b>Generalsanierung Berufliche Schulen Landsberg - 209 Medientechnik TB AV, E, T</b></h4>
                  <p class="card-text">Beschreibung: Das Landratsamt Landsberg am Lech plant den Rückbau mit Neubau der Verwaltung in einem Bestandsgebäude, die Sanierung der Turnhalle und den Neubau einer Mensa mit fünf Klassenzimmern. Hierbei ist die Turnhalle mit einer fest installierten und einer mobilen Beschallungsanlage auszustatten. Die Klassenzimmer sind jeweils mit einem Laptop und Dokumentenkameras zu installieren. In den Fluren sind Digitale Schwarze Bretter (als Erweiterung zum Bestand) vorgesehen.</p>
                  <p class="card-text">Interne Kennung: 0001</p>
                                        
                  </card>
                  

                </div>

                <!-- Top Info Row -->

                <div class="row" style="margin: auto; display: flex; align-items: left; gap: 10px;">
                  


                  <card style="display: flex;  justify-content: space-around !important;" >
                  
                  <div style="float:left;">
                    <label style="padding:10px;" for="dropdown">Status</label>
                    <select id="dropdownbox" aria-placeholder="test" v-model="selectedOption1">
                      <option value="option1">in Prüfung</option>
                      <option value="option2">in Bearbeitung</option>
                      <option value="option3">AN abgegeben</option>
                      <option value="option2">gewonnen</option>
                      <option value="option3">verloren</option>
                      <option value="option2">keine Teilnahme</option>
                      <option value="option3">aufgehoben</option>
                    </select>
                  </div>



                  <div style="float:left;">
                    <label style="padding:10px;" for="dropdown">VB</label>
                    <select id="dropdown" aria-placeholder="test" v-model="selectedOption2">
                      <option value="option1">Stefan Gajduk</option>
                      <option value="option2">Werner</option>
                      <option value="option3">Sven</option>
                    </select>
                  </div>

                  <div style="float:left;">
                    <label style="padding:10px;" for="dropdown">Hersteller</label>
                    <select id="dropdown" aria-placeholder="test" v-model="selectedOption3">
                      <option value="option1">Hitachi</option>
                      <option value="option2">Samsung</option>
                      <option value="option3">Apple</option>
                    </select>
                  </div>

                  <div style="float:left;">
                    <label style="padding:10px;" for="dropdown">EDV / ITS</label>
                    <select id="dropdown" aria-placeholder="test" v-model="selectedOption4">
                      <option value="option1">ITS</option>
                      <option value="option2">EDV</option>
                    </select>
                  </div>

                  <div style="float:left;">
                    <label style="padding:10px;" for="dropdown">RV</label>
                    <select id="dropdown" aria-placeholder="test" v-model="selectedOption5">
                      <option value="option1">Ja</option>
                      <option value="option2">Nein</option>
                    </select>
                  </div>

                  
                
              </card>
                    
            </div>
                
<!-- Input Felder --> 
            <div class="row justify-content-around" style="gap: 10px; padding: 0 5px 0 5px;" >

                <card style="width: 20rem;margin: auto; display: flex;  gap: 10px;">
                               
                  <div class="row">                    
                    <div class="col" style="width: 20rem; min-width: 200px; max-width: 350px;">                    

                      <div style="display: flex; align-items: center; gap: 10px;">
                        <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">VB</label>
                      <input id="input-vb" class="form-control" placeholder="Landratsamt Landsberg am Lech">
                      </div>
                      
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">PLZ</label>
                        <input id="input-plz" class="form-control" placeholder="PLZ">
                      </div>

                      <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                        <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">Los</label>
                        <input id="input-los" class="form-control" placeholder="Los">
                      </div>

                      <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                        <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">VergabeNr</label>
                        <input id="input-gbsl" class="form-control" placeholder="GBSL 209">
                      </div>

                      <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                        <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">Published</label>
                        <input id="input-veroeffentlicht" class="form-control" placeholder="Veröffentlicht">

                      </div>                      
                    </div>
                  </div>
              </card>

              <card style="width: 20rem; margin: auto; display: flex;  gap: 10px;">
                               
                               <div class="row">                    
                                 <div class="col" style="width: 20rem; min-width: 200px; max-width: 350px;">                    
             
                                   <div style="display: flex; align-items: center; gap: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">VB</label>
                                   <input id="input-vb" class="form-control" placeholder="Landratsamt Landsberg am Lech">
                                   </div>
                                   
                                   <div style="display: flex; align-items: center; gap: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">PLZ</label>
                                     <input id="input-plz" class="form-control" placeholder="PLZ">
                                   </div>
             
                                   <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">Los</label>
                                     <input id="input-los" class="form-control" placeholder="Los">
                                   </div>
             
                                   <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">VergabeNr</label>
                                     <input id="input-gbsl" class="form-control" placeholder="GBSL 209">
                                   </div>
             
                                   <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">Published</label>
                                     <input id="input-veroeffentlicht" class="form-control" placeholder="Veröffentlicht">
                                     
                                   </div>                      
                                 </div>
                               </div>
                           </card>

                           <card style="width: 20rem; margin: auto; display: flex;  gap: 10px;">
                               
                               <div class="row">                    
                                 <div class="col" style="width: 20rem; min-width: 200px; max-width: 350px;">                    
             
                                   <div style="display: flex; align-items: center; gap: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">VB</label>
                                   <input id="input-vb" class="form-control" placeholder="Landratsamt Landsberg am Lech">
                                   </div>
                                   
                                   <div style="display: flex; align-items: center; gap: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">PLZ</label>
                                     <input id="input-plz" class="form-control" placeholder="PLZ">
                                   </div>
             
                                   <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">Los</label>
                                     <input id="input-los" class="form-control" placeholder="Los">
                                   </div>
             
                                   <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">VergabeNr</label>
                                     <input id="input-gbsl" class="form-control" placeholder="GBSL 209">
                                   </div>
             
                                   <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                                     <label for="input-los" style="margin-right: 5px; min-width: 70px; text-align: left;">Published</label>
                                     <input id="input-veroeffentlicht" class="form-control" placeholder="Veröffentlicht">
                                     
                                   </div>                      
                                 </div>
                               </div>
                           </card>


            </div>



            </form>  
    
    
            

            
            
          </div>

        </div>
       


      
      
    

    
    </div>
  </div>

</template>


<script>
import { Card } from "@/components/index";
import BaseTable from "@/components/BaseTable";
import { onErrorCaptured } from "vue";

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

.form-control {
  margin: 5px;
  background-color: #ffffffee;

}



.form-control:hover {
  margin: 5px;
  background-color: #ffffff;
}




</style>
