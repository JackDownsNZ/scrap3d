import { Component, OnInit } from '@angular/core';

declare var swal:any;
declare var $:any;


@Component({
    moduleId: module.id,
    selector: 'wizard-cmp',
    templateUrl: 'wizard.component.html'
})

export class WizardComponent implements OnInit{

    onFinishWizard(){
        //here you can do something, sent the form to server via ajax and show a success message with swal
        swal("Good job!", "You clicked the finish button!", "success");
    }
    ngOnInit(){
        // you can also use the nav-pills-[blue | azure | green | orange | red] for a different color of wizard

        $('#wizardCard').bootstrapWizard({
            tabClass: 'nav nav-pills',
            nextSelector: '.btn-next',
            previousSelector: '.btn-back',
            lastSelector: '.btn-finish',
            onNext: function(tab, navigation, index) {
                // do something onNext
            },
            onInit : function(tab, navigation, index){

                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100/$total;

                var $display_width = $(document).width();

                if($display_width < 600 && $total > 3){
                   $width = 50;
                }

                navigation.find('li').css('width',$width + '%');
            },
            onTabClick : function(tab, navigation, index){
                // Disable the posibility to click on tabs
                return false;
            },
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;

                var wizard = navigation.closest('.card-wizard');

                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $(wizard).find('.btn-next').hide();
                    $(wizard).find('.btn-finish').show();
                } else if($current == 1){
                    $(wizard).find('.btn-back').hide();
                } else {
                    $(wizard).find('.btn-back').show();
                    $(wizard).find('.btn-next').show();
                    $(wizard).find('.btn-finish').hide();
                }
            },
            onLast: function(tab,navigation,index){

                //here you can do something, sent the form to server via ajax and show a success message with swal
                swal("Good job!", "You clicked the finish button!", "success");
            }

        });
    }
}
