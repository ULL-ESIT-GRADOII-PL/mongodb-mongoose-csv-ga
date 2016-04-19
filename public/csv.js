// See http://en.wikipedia.org/wiki/Comma-separated_values
(() => {
"use strict"; 
const resultTemplate =`
<div class="contenido">
      <table class="center" id="result">
          <% _.each(rows, (row) => { %>
          <tr class="<%=row.type%>">
              <% _.each(row.items, (name) =>{ %>
              <td><%= name %></td>
              <% }); %>
          </tr>
          <% }); %>
      </table>
  </p>
</div>
`;

/* Volcar la tabla con el resultado en el HTML */
const fillTable = (data) => { 
  $("#finaltable").html(_.template(resultTemplate, { rows: data.rows })); 
};

/* Volcar en la textarea de entrada 
 * #original el contenido del fichero fileName */
const dump = (fileName) => {
      
  $.get(fileName, function (data) {
        
      $("#original").val(data);
  });
};
 
const handleFileSelect = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();

 $.get(fileName, function (data) {
       
      $("#original").val(data);
      
  });
}

/* Drag and drop: el fichero arrastrado se vuelca en la textarea de entrada */
const handleDragFileSelect = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files;

  var read = new FileReader();
  read.onload = (e) => {
  
    $("#original").val(e.target.result);
    evt.target.style.background = "white";
  };
  read.readAsText(files[0])
}

const handleDragOver = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  evt.target.style.background = "yellow";
}

$(document).ready(() => {
      
    let original = document.getElementById("original");  
    if (window.localStorage && localStorage.original) {
      original.value = localStorage.original;
    }
    
   $("#parse").click( () => {
         
        if (window.localStorage) localStorage.original = original.value;
        
        $.get("/csv", /* Llamada a AJAX para que calcule la tabla */
        
          { input: original.value }, 
          fillTable,
          'json'
        );
   });
   
   /* botones para rellenar el textarea */
   $('button.example').each( (_,y) => {
         
     $(y).click( () => { dump(`${$(y).text()}.txt`); });
   });


    // Setup the drag and drop listeners.
    //var dropZone = document.getElementsByClassName('drop_zone')[0];
    let dropZone = $('.drop_zone')[0];
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleDragFileSelect, false);
    let inputFile = $('.inputfile')[0];
    inputFile.addEventListener('change', handleFileSelect, false);
 });
 
 
 $("#save").click(() => {
   console.log("CLICK");
   let i = document.getElementById("stored").childElementCount() + 1;
   let element = document.createElement("input");
   let type = "button";
   let name = "File " + i;
   element.setAttribute("button",type);
   element.onclick = function(){
     alert("BUTTON" + i);
   }
    document.getElementById("stored").appendChild(element);
 });
})();
