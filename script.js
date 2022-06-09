$(document).ready(function(){
    
    $('#divRss').FeedEk({
      FeedUrl : 'https://www.abc.net.au/news/feed/4703630/rss.xml'
    });
    
    var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
 	var b = Math.floor(Math.random()*256);
    
    $('#example, .itemTitle a').css("color", getHex(r,g,b));
    
    $('#example').click(function() {
    
        $('.itemTitle a').css("color", getHex(r,g,b));

    });
    
    function intToHex(n){
        n = n.toString(16);
        if( n.length < 2) 
            n = "0"+n; 
        return n;
    }
    
    function getHex(r, g, b){
        return '#'+intToHex(r)+intToHex(g)+intToHex(b); 
    }
    
});