const { createApp } = Vue

  createApp({
    data() {
      return {
        nasa:[],
        url:"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",   
     }
    },
    methods: {
        fetchData(url) {
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
             console.log(data)
             this.nasa=data
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
     this.fetchData(this.url)                                                       //   
    }
  }).mount('#App')
