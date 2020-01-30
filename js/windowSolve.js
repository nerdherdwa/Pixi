window.solveCollision = function(t, n) {
    n = n || {};
    var e = d3.quadtree().x(function(t) {
        return t.xp
    }).y(function(t) {
        return t.yp
    });
    void 0 !== n.extent && e.extent(n.extent);
    var a = 0;
    t.forEach(function(t) {
        function o(t) {
            var n = m.xp - t.xp
              , e = m.yp - t.yp
              , r = n * n + e * e
              , i = m.r + t.r;
            if (r < i * i) {
                var o, a, u, s, c, l, h = Math.sqrt(r);
                a = m.r < t.r ? (o = t,
                m) : (o = m,
                t);
                var f = o.r
                  , p = a.r
                  , d = (f + p + h) / 4;
                if (0 < r)
                    c = (a.xp - o.xp) / h,
                    l = (a.yp - o.yp) / h;
                else {
                    var y = 2 * Math.PI * Math.random();
                    c = Math.cos(y),
                    l = Math.sin(y)
                }
                s = d <= p ? (u = d / f,
                d / p) : (1 < (u = (f - p + h) / (2 * f)) && console.log(u),
                1),
                o.r *= u,
                a.r *= s,
                o.xp += (u - 1) * f * c,
                o.yp += (u - 1) * f * l,
                a.xp += (1 - s) * p * c,
                a.yp += (1 - s) * p * l,
                o.xMin = o.xp - o.r,
                o.xMax = o.xp + o.r,
                o.yMin = o.yp - o.r,
                o.yMax = o.yp + o.r,
                a.xMin = a.xp - a.r,
                a.xMax = a.xp + a.r,
                a.yMin = a.yp - a.r,
                a.yMax = a.yp + a.r
            }
        }
        var m;
        t.xp = t.x0,
        t.yp = t.y0,
        void 0 !== n.r0 && (t.r0 = n.r0),
        t.r = t.r0,
        t.xMin = t.x0 - t.r0,
        t.xMax = t.x0 + t.r0,
        t.yMin = t.y0 - t.r0,
        t.yMax = t.y0 + t.r0,
        e.visit((m = t,
        function(t, n, e, r, i) {
            if (!t.length)
                for (; t.data != m && m.xMax > t.data.xMin && m.xMin < t.data.xMax && m.yMax > t.data.yMin && m.yMin < t.data.yMax && o(t.data),
                t = t.next; )
                    ;
            return n > m.xMax + a || r + a < m.xMin || e > m.yMax + a || i + a < m.yMin
        }
        )),
        a = Math.max(a, t.r),
        e.add(t)
    }),
    void 0 !== n.zoom && t.forEach(function(t) {
        t.cache = t.cache || {},
        t.cache[n.zoom] = {
            x: t.xp,
            y: t.yp,
            r: t.r
        }
    });
    var r = d3.quadtree().x(function(t) {
        return t.xp
    }).y(function(t) {
        return t.yp
    })
      , i = 0;
    return t.forEach(function(t) {
        r.add(t),
        i = Math.max(i, t.r)
    }),
    r.rMax = i,
    r
}
;
