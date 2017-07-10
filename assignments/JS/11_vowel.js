function check()
{
var str=document.getElementById("t1").value; 
 var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x <str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  document.write("count="+vcount);
}