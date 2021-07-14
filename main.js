

Vue.component('movie', {
  'props': {
    'movie':{
  }
  },
	'template': `<div class="col-lg-3" >
          <div class="card" style="; width: 300px;">
            <img class="card-img-top" :src="movie.Poster" :alt="movie.name" 
            style="height: 300px;
            width: 300px;">
        
            <div class="card-body">
            <h6 class="card-title">{{movie.Location}},<span>   {{movie.Year}}</span></h6>
              <h4 class="card-title">{{movie.Title}}</h4> 
              <p> <i <a target="_blank" :href="movie.Url"  color=#F5C518 class="fab fa-imdb fa-2x" > </a> </i>{{movie.imdbRate}} <br> 
              <span> {{movie.Type}}</span> </p>
            </div>
          </div>
        </div>
        `
});


new Vue({
	'el': '#movies-app',
  'created':function(){
    console.log('created hock');
    this.getmovies();
  },
  'methods':{
    getmovies: function(){
      {

        //Vue.axios.get(api).then((response) => {
       //  console.log(response.data)
       // })
            // GET /someUrl
            axios.get('movies.json').then(response => {
              console.log("response" , response.data.movies);
          
              // get body data
              this.movies = response.data.movies;
          
            });
      }
    }
  },
  'data': {
    'movies':[],
		
	},
	'template': `<div class="row"> 
			<movie :movie="firstmovie"></movie> 
			<movie v-for="movie in movies" :movie="movie"></movie> 
		</div>
    `
});