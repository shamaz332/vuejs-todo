<template>
  <div class="pa-6">
    <v-list class="pt-0" flat>
      <v-list-item-group v-model="settings" multiple>
        <div v-for="task in tasks" :key="task.id">
          <v-list-item @click="doneTask(task.id)">
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ task.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>


<script>
export default {
  name: "Todo",
  data() {
    return {
      tasks: [
        {
          id: "1",
          title: "Monday Gym",
          done: true,
        },
        {
          id: "2",
          title: "Tuesday Gym",
          done: false,
        },
      ],
    };
  },
  methods:{
    doneTask(id){
      console.log(id)
      let task = this.tasks.filter(task => task.id = id)[0]

      task.done = !task.done
    }
  }
};
</script>
