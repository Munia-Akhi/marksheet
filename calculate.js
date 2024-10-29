$(function(){
    $('button').click(function(){
       
        var name = $('#name-text').val();
        var roll =$('#roll-text').val();
        var cls=$('#class-text').val();
        var section=$('#sec-text').val();
       
       var bangla=$('#bangla').val();
       var english=$('#english').val();
       var math=$('#math').val();
       var physics=$('#physics').val();
       var chemistry=$('#chemistry').val();
       var biology=$('#biology').val();
        
        
       $('#dis-name').text(name);
       $('#dis-roll').text(roll);
       $('#dis-class').text(cls);
       $('#dis-sec').text(section);
       
       
        $('#mbangla').text(bangla);
        $('#menglish').text(english);
        $('#mmath').text(math);
        $('#mphysics').text(physics);
        $('#mchemistry').text(chemistry);
        $('#mbiology').text(biology);
       
    }); 
    });