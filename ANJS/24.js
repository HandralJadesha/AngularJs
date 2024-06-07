function bottle_reuired(gallons_of_beer)
{
    let size=[10,7,5,1];
    let no_of_bottles=0;
    for(let i=0;i<size.length;i++)
        {   
            
            if(gallons_of_beer>=size[i])
                {
                    no_of_bottles+=Math.floor(gallons_of_beer/size[i]);
                    gallons_of_beer=gallons_of_beer%size[i];
              }
         }
     return no_of_bottles
}

res=bottle_reuired(13)
console.log(res)