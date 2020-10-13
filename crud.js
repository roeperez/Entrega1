var app = new function() {
    this.el = document.getElementById('listado');
  
    this.listadop = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.listadop.length > 0) {
        for (i = 0; i < this.listadop.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.listadop[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Editar</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Eliminar</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.listadop.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('productoid');
      el = document.getElementById('productotipo');
      el = document.getElementById('productoanno');
      el = document.getElementById('productoprecio');
      el = document.getElementById('productomodelo');
      // Get the value
      var listadop = el.value;
  
      if (listadop) {
        // Add the new value
        this.listadop.push(listadop.trim());
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      // Display value in the field
      el.value = this.listadop[item];
      // Display fields
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        // Get value
        var listadop = el.value;
  
        if (listadop) {
          // Edit value
          self.listadop.splice(item, 1, listadop.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Delete the current row
      this.listadop.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = '';
  
      if (data) {
          if(data ==1){
              name = ''
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = '0 ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }