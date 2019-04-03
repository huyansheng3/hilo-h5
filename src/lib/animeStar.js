
let P1 = coord(380, 500),
    P2 = coord(300, 780),
    P3 = coord(180, 570),
    P4 = coord(400, 900)

function drawStar(pos) {
    hiloViews.star.x = pos.x
    hiloViews.star.y = pos.y
    if (hiloViews.star.scaleX > 3) {
        hiloViews.star.scaleX = 1
        hiloViews.star.scaleY = 1
    }

    if (hiloViews.star.rotation > 90) {
        hiloViews.star.rotation = 0
    }

    hiloViews.star.rotation = hiloViews.star.rotation + 0.5
    hiloViews.star.scaleX = hiloViews.star.scaleX + 0.02
    hiloViews.star.scaleY = hiloViews.star.scaleY + 0.02
}

const animateCurve = new AnimateCurve({ P1, P2, P3, P4, callback: drawStar })
animateCurve.start()
