function FormRepeater(place,component,options={}){
    this.place = $(place);
    this.component = component;
    this.options = options;

    var defaults = {
        add: '.add',
        remove: '.remove'
    }

    this.options = $.extend({}, defaults, this.options);

    this.add = function(){
        var newComponent = this.component;
        this.place.append(newComponent);
        newComponent.find('.remove').click(function(){
            $(this).parent().remove();
        });
    }

    this.remove = function(){
        $(this).parent().remove();
    }

    this.init = function(){
        var that = this;
        this.place.find('.add').click(function(){
           
            that.add();
        });
        this.place.find('.remove').click(function(){
            that.remove();
        });
    }
    this.init();

    


}