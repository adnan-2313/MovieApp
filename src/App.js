import React from 'react';


import Card from "./Components/Cards";
function App() {
  return (
    <>
    <div className = "heading">
    <h1>List Of Marvel Movies</h1>
    </div>
    <Card src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a8a6131-48da-4feb-9bfe-3a555b3312c2/deez3m0-5acff1a5-bcf5-4995-885e-570dfa9cdc1d.jpg/v1/fill/w_734,h_1088,q_70,strp/captain_america__the_winter_soldier_by_darksideofdesign_deez3m0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMzNCIsInBhdGgiOiJcL2ZcLzVhOGE2MTMxLTQ4ZGEtNGZlYi05YmZlLTNhNTU1YjMzMTJjMlwvZGVlejNtMC01YWNmZjFhNS1iY2Y1LTQ5OTUtODg1ZS01NzBkZmE5Y2RjMWQuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DS1ltmgbBzDwWF9Cafq3b_h0u9aCTaNdsqv9CVS9qjs" 
    title="Marvel Cinematic Universe" sname="Captain America:Winter Soilder" href="https://www.hotstar.com/in/movies/captain-america-the-winter-soldier/1260016410"/>
    <Card src="https://images-cdn.ubuy.co.in/65809c8a3976f525d26ef0ea-movie-poster-iron-man-3-2-sided-rare.jpg" 
    href="https://www.hotstar.com/in/movies/iron-man-3/1660000042?filters=content_type%3Dmovie" title="Marvel Cinematic Universe" sname="Iron Man 3"/>
    <Card src="https://c8.alamy.com/comp/PM83GB/marvels-the-avengers-2012-poster-PM83GB.jpg"
     href="https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015?filters=content_type%3Dmovie"
     title="Marvel Cinematic Universe" sname="The Avengers"/>
    <Card src="https://m.media-amazon.com/images/I/81mf3QQFA2L._AC_UF1000,1000_QL80_.jpg" title="Marvel Cinematic Universe" sname="Avengers Age Of Ultron"
     href="https://www.hotstar.com/in/movies/marvels-avengers-age-of-ultron/1260018315?filters=content_type%3Dmovie"/>
    </>
  )
}

export default App
