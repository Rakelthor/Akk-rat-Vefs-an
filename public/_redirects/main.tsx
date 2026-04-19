# Redirect akkúrat.is to gloggva.is (if domain is connected)
https://akkúrat.is/* https://gloggva.is/:splat 301!
https://www.akkúrat.is/* https://gloggva.is/:splat 301!
http://akkúrat.is/* https://gloggva.is/:splat 301!
http://www.akkúrat.is/* https://gloggva.is/:splat 301!

# Redirect www to non-www for gloggva.is
https://www.gloggva.is/* https://gloggva.is/:splat 301!

# SPA fallback
/* /index.html 200
