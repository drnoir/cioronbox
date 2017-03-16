$(document).ready(function(){
  $(".video").on("click", function()
      {
        var vidurl =$("a.videourl").attr('href');
        var vidurl2 =$("a.videourl2").attr('href');
        var vidurl3 =$("a.videourl3").attr('href');
        var vidurl4 =$("a.videourl4").attr('href');
        var vidurl5 =$("a.videourl5").attr('href');
        var vidurl6 =$("a.videourl6").attr('href');
        var vidurl7 =$("a.videourl7").attr('href');
        var vidurl8 =$("a.videourl8").attr('href');
        var vidurl9 =$("a.videourl9").attr('href');
        var vidurl10 =$("a.videourl10").attr('href');
        var vidurl11 =$("a.videourl11").attr('href');
        var vidurl12 =$("a.videourl12").attr('href');
        
        var allurl [ vidurl, vidurl2,vidurl3,vidurl4,vidurl5,vidurl6,vidurl7,vidurl8,vidurl9,vidurl0,vidurl1,vidurl2 ];
        console.log(allurl);

      var div = $("<div class ='videobox'></div>");
      $(".container-fluid").append(div);
     

 var videoselect;
 switch (new videoselect().vidurl())
    {
       case 0:
        videoselect=vidurl;
        $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl+'"></source></video>' );
        break;
        case 1:
            videoselect=vidurl2;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl2+'"></source></video>' );
            break;
        case 2:
            videoselect=vidurl3;
               $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl3+'"></source></video>' );
            break;
        case 3:
            videoselect=vidurl4;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl4+'"></source></video>' );
            break;
        case 4:
            videoselect=vidurl5;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl5+'"></source></video>' );
            break;
        case 5:
            videoselect=vidurl6;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl6+'"></source></video>' );
            break;
        case 6:
            videoselect=vidurl7;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl7+'"></source></video>' );
            break;
         case 7:
            videoselect=vidurl8;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl8+'"></source></video>' );
            break;
         case 8:
            videoselect=vidurl9;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl9+'"></source></video>' );
            break;
         case 9:
            videoselect=vidurl10;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl10+'"></source></video>' );
            break;
         case 10:
            videoselect=vidurl11;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl11+'"></source></video>' );
            break;
         case 11:
            videoselect=vidurl12;
             $(div).html('<video width = "800" height = "800" autoplay class = "videoplayer"><source src="'+vidurl2+'"></source></video>' );
            break;
      
    }
};
