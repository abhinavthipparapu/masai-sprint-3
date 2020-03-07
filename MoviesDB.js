var btn = document.getElementById("btn")
        btn.addEventListener('click',getMovies)

        function getMovies(){
            event.preventDefault()
            var inputMovie = document.getElementById("movie").value
           // console.log(inputMovie)
            if(inputMovie == ""){
                console.log("Please enter Valid Information")
            }
            else{
                var accessKey = "&apikey=6099a598"
                var movie = inputMovie
                var getMovies = new XMLHttpRequest()
                var url = 'http://www.omdbapi.com/'
                getMovies.open("GET",url+"?s="+movie+accessKey)
                getMovies.send()
                
                getMovies.onload = function(){
                   
                    var movieResponse = getMovies.response
                    movieResponse = JSON.parse(movieResponse)
                    // console.log(movieResponse)
                    
                    dipalyDetails(movieResponse)
                }
                function dipalyDetails(movieResponse){
                    
                    var body = document.querySelector('body')
                    if(movieResponse.Response == "False"){
                        var disp = document.createElement('div')
                        disp.setAttribute('class','container')
                        disp.setAttribute('class','card')
                        disp.setAttribute('id','del')
                        var p = document.createElement("p")
                        p.setAttribute('class','display-3 text-center bg-primary')
                        p.textContent = "Please enter a valid Movie Name"
                        disp.appendChild(p)
                        body.appendChild(disp)
                    }
                    else{
                        
                        console.log(movieResponse,typeof movieResponse)
                        // console.log(movieResponse.Search[1].Title)
                        var display = document.createElement('div')
                        display.setAttribute('class','row')
                        var placeHolder = "http://via.placeholder.com/400"
                        for(var i=0;i<movieResponse.Search.length;i++){

                            var imageSource = movieResponse.Search[i].Poster
                            var movieName = movieResponse.Search[i].Title
                            var movieYear = movieResponse.Search[i].Year

                            var displayCol = document.createElement('div')
                            displayCol.setAttribute('class','col-xl-3 col-lg-4 col-md-6 col-sm-12 shadow-lg border border-dark p-5')

                            var displayDetails = document.createElement('div')
                            displayDetails.setAttribute('class','text-center')

                            var displayImage = document.createElement('div')
                            displayImage.setAttribute('class','col-12')

                            var displayImageDiv = document.createElement('img')
                            displayImageDiv.setAttribute('class','img-fluid')

                            if(imageSource == "N/A"){
                                displayImageDiv.setAttribute('src',placeHolder)
                                displayImage.appendChild(displayImageDiv)
                            }
                            else{
                                displayImageDiv.setAttribute('src',imageSource)
                                displayImage.appendChild(displayImageDiv)
                            }

                            var displayMovieName = document.createElement('div')
                            displayMovieName.setAttribute('class','col-12 text-center h3 p-2')
                            displayMovieName.textContent = "Movie Name:  " + movieName

                            var displayYearName = document.createElement('div')
                            displayYearName.setAttribute('class','col-12 text-center h3 p-2')
                            displayYearName.textContent = "Year of Rel:  " + movieYear

                            var btnMoreDetails = document.createElement('button')
                            btnMoreDetails.setAttribute('class','col-12 btn btn-primary eachButton')
                            btnMoreDetails.textContent = "more details"

                            displayDetails.append(displayImage,displayMovieName,displayYearName,btnMoreDetails)
                            displayCol.appendChild(displayDetails)
                            display.appendChild(displayCol)
                            display.setAttribute('id',"det")
                            var br = document.createElement('br')

                        }

                        body.append(br,display)
                        var br = document.createElement('br')
                    }

                }
                rem = document.getElementById('det')
                   console.log(det)
                   rem.remove()
               
            }
            
        }