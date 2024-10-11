class cellRenderer {
    init(params) {
      this.eGui = document.createElement('span');
      this.eGui.innerHTML = '<b>'+params.value+'</b>';
    }
    getGui() {
      return this.eGui;
    }
  }