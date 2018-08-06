//Chi cho nhap so
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !=44 && charCode !=46 )
        return false;
    return true;
}
//Dinh dang number

function formatmtcn(mtcn)
{
	var a = mtcn;
	return a.substring(0,3)+'-'+a.substring(3,6)+'-'+a.substring(6)
}
function transfermtcn()
{
	var listMtcn = $('.mtcn')
	for(i=0;i< $(".mtcn").length;i++)
	{
		a = $(".mtcn").eq(i).text();
	    $(".mtcn").eq(i).text(formatmtcn(a));
	}
}
		
		
$(document).ready(function () {
	
	
	 
    // An phan nhap noi dung    
    $('#hideMessage').hide();
   
    $('#temporaryAddressDetailsShow').hide();  
   
    
    //click add message thi hien khung nhap noi dung message
    $('#addMessageLink' ).click(function() {
	  $('#addMessage').hide();
	  $('#hideMessage').show();
	  
	});
   
    //click Choose Name Type thi hien nametype
   
  //click Temporary Address Details thi hien nametype
    $('#temporaryAddressDetails' ).click(function() {  	 
  	  $('#temporaryAddressDetailsShow').show();
  	  $('html, body').animate({
  	        scrollTop: $('#temporaryAddressDetailsShow').offset().top
  	    }, 'slow');	  
  	}); 
  //click add message thi hien khung nhap noi dung message
   
    
    
    
    $('#datetimeBirth').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	});
   
    $('#ExpirationDateSecondaryID').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	});
    $('#ExpirationDate').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	});
    $('#IssueDateSecondaryID').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	});
    $('#FromDate').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	})
    ;
    $('#ToDate').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	})
    ;
    $('#ExpirationPrimaryID').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	});
    $('#IssueDatePrimaryID').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true
	});
    
    $("#datetimeBirthText").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#ExpirationPrimaryIDText").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#ExpirationDateSecondaryIDText").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#ExpirationDateText").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#IssueDateSecondaryIDText").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#FromDateValue").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#ToDateValue").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
    
    $("#IssueDatePrimaryIDText").inputmask("dd/mm/yyyy", {
        placeholder: "__/__/____"
    });
});

