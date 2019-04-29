import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks:[
        {task:"Go Shopping", done: false, priority: "High"},
        {task:"Clean Car", done: true, priority: "Low"},
        {task:"Pay Rent", done: false, priority: "Low"}
      ],
      newTask: ""
    },
    methods:{
      addNewTask: function(){
        this.tasks.push({
          task: this.newTask,
          done: false,
          priority: this.radio,
        });
        this.newTask = ""
      },
      completeTask: function(index){
        this.tasks[index].done = true;
      }
      }
  })
})
