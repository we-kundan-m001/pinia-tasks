import { defineStore } from "pinia";

export const usetaskstore =  defineStore('taskstore',{
     state : () =>({
        // tasks:[
        //     {id:1, title: 'buy some milk', isFav:false},
        //     {id:2, title: 'This is new task ', isFav:true},
        // ]
        tasks:[],
        isLoading: false 
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
        async getData(){
            this.isLoading = true
            try{
            const res=await fetch('http://localhost:3000/tasks');
            const data= await res.json();
            this.tasks=data;
            }catch(error){
                console.log(error);
            }finally{
                this.isLoading = false 
            }
        },
        addTask(task){
            this.tasks.push(task);
        },
        deleteTask(id){
            this.tasks= this.tasks.filter(t =>{
                return id !== t.id
            })
        },
        addFav(id){
           const task=this.tasks.find(t=> id == t.id)
           task.isFav = !task.isFav
        }
     }

})