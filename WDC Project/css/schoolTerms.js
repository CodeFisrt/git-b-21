function DemoCtrl() {

    this.foo = 'foo';
    
    CKEDITOR.editorConfig = function (config) {
      config.extraPlugins = 'confighelper';
    };
    CKEDITOR.replace('editor1');
  
  }
  
  angular
    .module('gaigDemo', ['gaigUiBootstrap'])
    .controller('DemoCtrl', DemoCtrl);