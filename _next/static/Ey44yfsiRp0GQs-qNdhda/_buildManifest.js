self.__BUILD_MANIFEST = function(s, a, e, c) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": ["static/chunks/pages/index-d6274ddd0e2d53e7.js"],
        "/404": ["static/chunks/78e521c3-6f4d1bc740faf402.js", "static/chunks/pages/404-d8af48d12bba8f2e.js"],
        "/_error": ["static/chunks/pages/_error-3f6d1c55bb8051ab.js"],
        "/components": ["static/chunks/31664189-06d3eebb7b2e8784.js", "static/chunks/d64684d8-cc8254fbc5f7ea77.js", "static/chunks/pages/components-4b8d62dbc9c73e3f.js"],
        "/dashboard": [s, a, e, c, "static/chunks/497-120c131caf994e4e.js", "static/chunks/pages/dashboard-25904e5eebe1b02b.js"],
        "/dashboard/detail/[owner]/[lockerId]": [s, a, "static/chunks/118-ad64076929f87285.js", "static/chunks/pages/dashboard/detail/[owner]/[lockerId]-95a296803eb3b071.js"],
        "/dashboard/my-lock": [s, a, e, c, "static/chunks/pages/dashboard/my-lock-8edc29e10f9a3e02.js"],
        "/dashboard/my-vesting-lock": [s, a, e, "static/chunks/pages/dashboard/my-vesting-lock-0c0fc0d23b69531f.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/components", "/dashboard", "/dashboard/detail/[owner]/[lockerId]", "/dashboard/my-lock", "/dashboard/my-vesting-lock"]
    }
}("static/css/30fd6dae99bf48e4.css", "static/chunks/79-fabb301d0e613787.js", "static/chunks/681-d870401ecb7c9730.js", "static/chunks/198-3777fd0c9e7812b2.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();