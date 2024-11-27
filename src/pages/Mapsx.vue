<template>
  <div class="content">
    <card type="plain">
      <template slot="header">
        <h4 class="card-title">Google Maps</h4>
      </template>
      <template>
<base-table :data="tableData"
            :columns="columns">
        <template slot="columns">
          <th class="text-center">#</th>
          <th>Name</th>
          <th>Job Position</th>
          <th>Since</th>
          <th class="text-right">Salary</th>
          <th class="text-right">Actions</th>
        </template>  
        <template slot-scope="{row}">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.job}}</td>
          <td>{{row.since}}</td>
          <td>{{row.salary}}</td>
          <td class="td-actions text-right">
            <base-button type="info" size="sm" icon>
              <i class="tim-icons icon-single-02"></i>
            </base-button>
            <base-button type="success" size="sm" icon>
              <i class="tim-icons icon-settings"></i>
            </base-button>
            <base-button type="danger" size="sm" icon>
              <i class="tim-icons icon-simple-remove"></i>
            </base-button>
          </td>
        </template>    
</base-table>
</template>



    </card>
  </div>

  


</template>
<script>
</script>
<style></style>
