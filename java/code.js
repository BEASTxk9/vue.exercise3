const app = Vue.createApp({
    template: `
    <div class="text-center" id="pop">
    <label class="py-2"><b>Please enter any key</b></label><br>
        <input class="text-center py-2 w-25" id="input" type="name" required v-model="key" maxlength="1" placeholder="Enter a key"><br>
        <button v-on:click="getData()">Click</button>
        <p class="py-2">You have pressed <b>"<span id="output"></span>"</b>.</p>
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