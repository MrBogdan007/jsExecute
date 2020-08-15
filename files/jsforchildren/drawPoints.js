        
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        function drawPoints (points) {
          
            ctx.beginPath();
            ctx.moveTo(points[0][0],points[0][1]);
            for (var i = 1; i < points.length; i++ ) {
                ctx.lineTo(points[i][0], points[i][1]);
            }
            ctx.stroke();
        };
        var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50],
        [70, 90], [100, 90], [70, 120]];
        drawPoints(mysteryPoints);