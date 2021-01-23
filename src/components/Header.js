import React from "react";

const Header = props => {
	const {search, onInputChange} = props;
	return (
		<div className="jumbotron">
		<h1 className="display-1">
		<i className="material-icons brand-icon">fastfood</i>Food Recipe</h1>

		<div className="input-group w-50 mx-auto">
        <input
         type="text" 
         className="form-control" 
         placeholder="Search Your Recipe..."
         value={search} 
         onChange={onInputChange}
         />
         <div className="input-group-append">
         <button className="btn btn-dark">Search Recipe</button>
        </div>
     </div>
		</div>

		 ); 
};

export default Header;




    //script solution//

    <html>
    <body onload="myFunction()">

    Date: <input type="text" id="demo"/>

    <script>
      function myFunction() {
        document.getElementById('demo').value= Date();
      }

      </script>
      </body>
      </html>


      ///jquery//

      <html>
      <head>
      <script>
      </script>
      </head>
      <body onload="myFunction()">
    Date: <input type="text" id="demo"/>
<script>
function myFunction(){
    $(document).ready(function(){
        $('demo').attr("placeholder", Date());
    });

}
</script>
</body>
</html>

}      
