import { defineStore } from "pinia";

export const usetaskstore =  defineStore('taskstore',{
     state : () =>({
        tasks:[
            {id:1, title: 'buy some milk', isFav:false},
            {id:2, title: 'This is new task ', isFav:true},
        ]
     }),
     getters: {
        favs(){
            return this.tasks.filter(t => t.isFav)
        },
        favcount(){
            return this.tasks.reduce((counts,tasks) =>{
                return tasks.isFav?counts+1:counts
            },0)
        },
        totalCount:(state) =>{
            return state.tasks.length
        }
     },
     actions:{
        addTask(task){
            this.tasks.push(task);
        },
     }

})