window.addEventListener("load",function() 
    {         
        document.querySelector("input").addEventListener("change",function()
        {
            Cantidad_ValorUni();            
            CalculosTotales();
        },false);          
        document.querySelector("#txtdescuento").addEventListener("blur",function()
            {
                CalculosTotales();                
            },false); 
            
        for (i = 0; i <10; i++) 
        {
            document.querySelector("#txtpreciounitario"+i).addEventListener("blur",function()
            {                
                Cantidad_ValorUni();
                CalculosTotales();
            },false);        
        }                  
    }
    ,false);
    
    function Cantidad_ValorUni()
    {        
            for (i = 0; i < 10; i++) 
            {
                document.querySelector("#txttotal"+i).value=
                parseFloat(document.querySelector("#txtcantidad"+i).value)  
                *parseFloat(document.querySelector("#txtpreciounitario"+i).value);                                
            }            
    } 
    
    function CalculosTotales()
    {
        var SumaSubtotal=0;
        for(i = 0; i < 10; i++)
        {
            SumaSubtotal += parseFloat(document.querySelector("#txttotal"+i).value);
        }
        document.querySelector("#txtsubtotal").value = SumaSubtotal;
        document.querySelector("#txtiva").value= SumaSubtotal*0.12;
        document.querySelector("#txtpreciototal").value = (SumaSubtotal*0.12)+SumaSubtotal-
                parseFloat(document.querySelector("#txtdescuento").value);
    }


