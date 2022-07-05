const app = Vue.createApp({
    template: `
    <div class="text-center ">
    <label class="py-2">Please enter any key</label><br>
        <input class="text-center py-2" id="input" type="name" required v-model="key" maxlength="1" placeholder="Enter a key"><br>
        <button v-on:click="getData()">Click</button>
        <p class="py-2">You have entered the <b>"<span id="output"></span>"</b> key.</p>
        </div>
        `,
    
        data(){
            return{
                key: '',
            }
        },

        methods: {
getData(){
    let info = document.getElementById("input").value;
    document.getElementById("output").innerHTML = info;
}
        }
    
    
        
    })
    
    app.mount("#app");