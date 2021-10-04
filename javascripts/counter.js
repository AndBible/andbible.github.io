
    var total = $("#bibles"); //[make sure this is a unique variable name]
     
    $({someValue: 0}).animate({someValue: 1800}, {
        delay: 2000,
        duration: 5000,
        easing:'swing', // can be anything
        step: function() { // called on every step
          // Update the element's text with rounded-up value:
          total.text(commaSeparateNumber(Math.round(this.someValue)));
        },
        done: function() {
          total.text(commaSeparateNumber(this.someValue + '+'));
          //alert('finished');
        }
    });

    var langs = $("#langs"); //[make sure this is a unique variable name]
     
    $({someValue: 0}).animate({someValue: 700}, {
        delay: 2000,
        duration: 5000,
        easing:'swing', // can be anything
        step: function() { // called on every step
          // Update the element's text with rounded-up value:
          langs.text(commaSeparateNumber(Math.round(this.someValue)));
        },
        done: function() {
          langs.text(commaSeparateNumber(this.someValue + '+'));
          //alert('finished');
        }
    });

    var users = $("#users"); //[make sure this is a unique variable name]
     
    $({someValue: 0}).animate({someValue: 150000}, {
        delay: 2000,
        duration: 5000,
        easing:'swing', // can be anything
        step: function() { // called on every step
          // Update the element's text with rounded-up value:
          users.text(commaSeparateNumber(Math.round(this.someValue)));
        },
        done: function() {
          users.text(commaSeparateNumber(this.someValue + '+'));
          //alert('finished');
        }
    });

    var app = $("#app"); //[make sure this is a unique variable name]
     
    $({someValue: 0}).animate({someValue: 1}, {
        delay: 2000,
        duration: 5000,
        easing:'swing', // can be anything
        step: function() { // called on every step
          // Update the element's text with rounded-up value:
          app.text(commaSeparateNumber(Math.round(this.someValue)));
        },
        done: function() {
          app.text(commaSeparateNumber(this.someValue));
          //alert('finished');
        }
    });
     
    /**
     * Format the number, so it will be seperated by comma
     */
    function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        return val;
    }

