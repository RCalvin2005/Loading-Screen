window.onload = function() {
    const circles = document.querySelectorAll(".circle");
    const delay = 75;
    var stopped = true;
    var counter = 0;

    // Changes the color of each successive circle unless stopped
    function change(i, color, reset) {
        if (stopped)
        {
            return;
        }

        setTimeout(function() {
            circles[i].style.backgroundColor = color;
            change((i + 1) % 8, color);
        }, delay)
    }

    // Resets all circles to white
    function reset() {
        for (let i = 0; i < 8; i++)
        {
            circles[i].style.backgroundColor = '#FFFFFF';
        }
    }

    // Starts the loading pattern
    function start() {
        change(0, "#000000");

        setTimeout(function() {
            change(0, "#444444");
        }, delay * 1);

        setTimeout(function() {
            change(0, "#888888");
        }, delay * 2);

        setTimeout(function() {
            change(0, "#BBBBBB");
        }, delay * 3);

        setTimeout(function() {
            change(0, "#FFFFFF");
        }, delay * 4);
    }

    // Checks for click to start and stop the loading pattern
    document.querySelector("html").addEventListener('click', function() {
        if (counter % 2 == 0)
        {
            reset();
            stopped = false;
            start();
        }
        else
        {
            stopped = true;
        }
        counter++;
    })
}